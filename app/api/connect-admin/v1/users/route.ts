import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "@/constants";
import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";
import { enumValue, positiveInteger } from "@/lib/apiQuery";
import {
  AccountVerificationRole,
  AccountVerificationStatus,
  Prisma,
  UserAccountStatus,
} from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";

const accountStatuses = new Set(Object.values(UserAccountStatus));
const verificationStatuses = new Set(Object.values(AccountVerificationStatus));
const verificationRoles = new Set(Object.values(AccountVerificationRole));

type SortOption = "newest" | "oldest" | "username";

/*
* used in both reports page and user management page
* to fetch user data
*/
export async function GET(request: NextRequest) {
  try {
    // admin verification check
    await requireAdmin(request);

    const searchParams = request.nextUrl.searchParams;
    const page = positiveInteger(searchParams.get("page"), 1);
    const limit = Math.min(
      positiveInteger(searchParams.get("limit"), DEFAULT_PAGE_SIZE),
      MAX_PAGE_SIZE,
    );
    // `search` remains supported because the community manager picker uses it.
    const query = (
      searchParams.get("q") ??
      searchParams.get("search") ??
      ""
    ).trim();
    const accountStatus = enumValue(
      searchParams.get("status"),
      accountStatuses,
    );
    const verificationStatus = enumValue(
      searchParams.get("verificationStatus"),
      verificationStatuses,
    );
    const role = enumValue(searchParams.get("role"), verificationRoles);
    const requestedSort = searchParams.get("sort") ?? "newest";

    if (
      accountStatus === null ||
      verificationStatus === null ||
      role === null
    ) {
      return NextResponse.json(
        { error: "An invalid status, verification status, or role was supplied." },
        { status: 400 },
      );
    }

    if (!["newest", "oldest", "username"].includes(requestedSort)) {
      return NextResponse.json(
        { error: "sort must be newest, oldest, or username." },
        { status: 400 },
      );
    }

    // search filters inputs (for where select)
    const sort = requestedSort as SortOption;
    const where: Prisma.UserWhereInput = {
      ...(accountStatus && { accountStatus }),
      ...(verificationStatus && {
        accountVerificationStatus: verificationStatus,
      }),
      ...(role && { accountVerificationRole: role }),
      ...(query && {
        OR: [
          { username: { contains: query, mode: "insensitive" } },
          { email: { contains: query, mode: "insensitive" } },
          { title: { contains: query, mode: "insensitive" } },
        ],
      }),
    };

    // ordering inputs
    const orderBy: Prisma.UserOrderByWithRelationInput[] =
      sort === "username"
        ? [{ username: "asc" }, { id: "asc" }]
        : [
            { createdAt: sort === "oldest" ? "asc" : "desc" },
            { id: sort === "oldest" ? "asc" : "desc" },
          ];

    const [users, total] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          username: true,
          email: true,
          title: true,
          profilePic: true,
          location: true,
          accountStatus: true,
          suspendedUntil: true,
          warningCount: true,
          accountVerificationStatus: true,
          accountVerificationRole: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    // define how many records should be shown per page
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1 && totalPages > 0,
      },
    });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    console.error("Fetch users failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 },
    );
  }
}
