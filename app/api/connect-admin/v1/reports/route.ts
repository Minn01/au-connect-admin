import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "@/constants";
import {
  Prisma,
  ReportReason,
  ReportStatus,
  ReportTargetType,
} from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { enumValue, positiveInteger } from "@/lib/apiQuery";
import { NextRequest, NextResponse } from "next/server";


const reportStatuses = new Set(Object.values(ReportStatus));
const reportReasons = new Set(Object.values(ReportReason));
const reportTargetTypes = new Set(Object.values(ReportTargetType));

type SortOption = "newest" | "oldest" | "most-reported";

export async function GET(request: NextRequest) {
  try {
    // get and validate search params
    const searchParams = request.nextUrl.searchParams;
    const page = positiveInteger(searchParams.get("page"), 1);
    const limit = Math.min(
      positiveInteger(searchParams.get("limit"), DEFAULT_PAGE_SIZE),
      MAX_PAGE_SIZE,
    );
    const query = searchParams.get("q")?.trim();
    const reporter = searchParams.get("reporter")?.trim();
    const targetType = enumValue(
      searchParams.get("type"),
      reportTargetTypes,
    );
    const status = enumValue(searchParams.get("status"), reportStatuses);
    const reason = enumValue(searchParams.get("reason"), reportReasons);
    const requestedSort = searchParams.get("sort") ?? "newest";


    if (targetType === null || status === null || reason === null) {
      return NextResponse.json(
        { error: "An invalid type, status, or reason was supplied." },
        { status: 400 },
      );
    }

    if (!["newest", "oldest", "most-reported"].includes(requestedSort)) {
      return NextResponse.json(
        { error: "sort must be newest, oldest, or most-reported." },
        { status: 400 },
      );
    }

    const sort = requestedSort as SortOption;
    const where: Prisma.ReportWhereInput = {
      ...(targetType && { targetType }),
      ...(status && { status }),
      ...(reason && { reason }),
      ...(reporter && {
        reporter: { is: { username: { contains: reporter, mode: "insensitive" } } },
      }),
      ...(query && {
        OR: [
          { reportedUsername: { contains: query, mode: "insensitive" } },
          { reportedTitle: { contains: query, mode: "insensitive" } },
          { reportedContent: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
          { reporter: { is: { username: { contains: query, mode: "insensitive" } } } },
        ],
      }),
    };

    const submissions = await prisma.report.findMany({
      where,
      orderBy: { createdAt: sort === "oldest" ? "asc" : "desc" },
      select: {
        id: true,
        targetId: true,
        targetType: true,
        reason: true,
        description: true,
        status: true,
        reportedUsername: true,
        reportedProfilePic: true,
        reportedTitle: true,
        reportedContent: true,
        reportedMedia: true,
        reportedLinks: true,
        createdAt: true,
        updatedAt: true,
        reporter: {
          select: { id: true, username: true, profilePic: true },
        },
      },
    });

    // The database stores individual submissions; the admin table needs one row per target.
    const grouped = new Map<string, (typeof submissions)[number][]>();

    for (const submission of submissions) {
      const key = `${submission.targetType}:${submission.targetId}`;
      const existing = grouped.get(key);
      if (existing) {
        existing.push(submission);
      } else {
        grouped.set(key, [submission]);
      }
    }

    const reports = Array.from(grouped.values()).map((items) => {
      const ordered = [...items].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      );
      const latest = ordered[0];
      const oldest = ordered.at(-1)!;

      return {
        id: latest.targetId,
        targetId: latest.targetId,
        targetType: latest.targetType,
        title:
          latest.reportedTitle ??
          latest.reportedUsername ??
          latest.reportedContent?.slice(0, 100) ??
          "Reported content",
        reportedUsername: latest.reportedUsername,
        reportedProfilePic: latest.reportedProfilePic,
        reportedContent: latest.reportedContent,
        reportedMedia: latest.reportedMedia,
        reportedLinks: latest.reportedLinks,
        reasons: Array.from(new Set(items.map((item) => item.reason))),
        reportCount: items.length,
        statuses: Array.from(new Set(items.map((item) => item.status))),
        latestStatus: latest.status,
        firstReportedAt: oldest.createdAt,
        latestReportedAt: latest.createdAt,
        reporters: items.map((item) => item.reporter),
      };
    });

    reports.sort((a, b) => {
      if (sort === "most-reported") return b.reportCount - a.reportCount;

      const difference =
        a.latestReportedAt.getTime() - b.latestReportedAt.getTime();
      return sort === "oldest" ? difference : -difference;
    });

    const total = reports.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;

    return NextResponse.json({
      data: reports.slice(start, start + limit),
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
    console.error("Error fetching reports:", error);
    return NextResponse.json(
      { error: "Internal server error while fetching reports." },
      { status: 500 },
    );
  }
}
