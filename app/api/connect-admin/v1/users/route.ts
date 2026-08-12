import { NextRequest, NextResponse } from "next/server";

import type { Prisma } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";

const PAGE_SIZE = 12;

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("search")?.trim() ?? "";

    const where: Prisma.UserWhereInput = search
      ? {
          OR: [
            { username: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { title: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    const users = await prisma.user.findMany({
      where,
      orderBy: { username: "asc" },
      take: PAGE_SIZE,
      select: {
        id: true,
        username: true,
        email: true,
        title: true,
        profilePic: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Fetch users failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}
