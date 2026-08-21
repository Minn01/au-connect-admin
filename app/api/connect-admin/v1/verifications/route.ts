import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";

const PAGE_SIZE = 20;

export async function GET(req: NextRequest) {
  try {
    // admin auth check (route level)
    await requireAdmin(req);

    const { searchParams } = req.nextUrl;
    const status = searchParams.get("status"); // PENDING | APPROVED | REJECTED | null = all
    const cursor = searchParams.get("cursor") ?? undefined;
    const search = searchParams.get("search")?.trim() ?? "";

    const where: Prisma.AccountVerificationRequestWhereInput = {};

    if (
      status &&
      ["PENDING", "APPROVED", "REJECTED", "UNSUBMITTED"].includes(status)
    ) {
      where.status = status as
        | "PENDING"
        | "APPROVED"
        | "REJECTED"
        | "UNSUBMITTED";
    }

    if (search) {
      where.user = {
        OR: [
          { username: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      };
    }

    const requests = await prisma.accountVerificationRequest.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: PAGE_SIZE + 1,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      select: {
        id: true,
        role: true,
        documentType: true,
        status: true,
        note: true,
        reviewNote: true,
        reviewedAt: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            profilePic: true,
            accountVerificationStatus: true,
          },
        },
      },
    });

    const hasMore = requests.length > PAGE_SIZE;
    const items = hasMore ? requests.slice(0, PAGE_SIZE) : requests;
    const nextCursor = hasMore ? items[items.length - 1].id : null;

    // counts for the status filter tabs
    const [pendingCount, approvedCount, rejectedCount] = await Promise.all([
      prisma.accountVerificationRequest.count({ where: { status: "PENDING" } }),
      prisma.accountVerificationRequest.count({
        where: { status: "APPROVED" },
      }),
      prisma.accountVerificationRequest.count({
        where: { status: "REJECTED" },
      }),
    ]);

    return NextResponse.json({
      items,
      nextCursor,
      counts: {
        pending: pendingCount,
        approved: approvedCount,
        rejected: rejectedCount,
      },
    });
  } catch (err) {
    if (err instanceof AdminAuthError) {
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
    console.error("Fetch verification requests failed:", err);
    return NextResponse.json(
      { error: "Failed to fetch verification requests." },
      { status: 500 },
    );
  }
}
