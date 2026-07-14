import { ReportStatus, ReportTargetType } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const now = new Date();

    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);

    const [
      pendingReview,
      reportedPosts,
      reportedUsers,
      resolved,
      allReports,
      postsYesterday,
      usersYesterday,
    ] = await Promise.all([
      // Still waiting for moderation
      prisma.report.count({
        where: {
          status: ReportStatus.PENDING,
        },
      }),

      // All report submissions targeting posts
      prisma.report.count({
        where: {
          targetType: ReportTargetType.POST,
        },
      }),

      // All report submissions targeting users
      prisma.report.count({
        where: {
          targetType: ReportTargetType.USER,
        },
      }),

      // Reports that reached a final decision
      prisma.report.count({
        where: {
          status: {
            in: [
              ReportStatus.DISMISSED,
              ReportStatus.ACTION_TAKEN,
            ],
          },
        },
      }),

      // Every individual report submission
      prisma.report.count(),

      // Post reports submitted yesterday
      prisma.report.count({
        where: {
          targetType: ReportTargetType.POST,
          createdAt: {
            gte: startOfYesterday,
            lt: startOfToday,
          },
        },
      }),

      // User reports submitted yesterday
      prisma.report.count({
        where: {
          targetType: ReportTargetType.USER,
          createdAt: {
            gte: startOfYesterday,
            lt: startOfToday,
          },
        },
      }),
    ]);

    return NextResponse.json({
      data: {
        pendingReview,
        reportedPosts,
        reportedUsers,
        resolved,
        allReports,
        postsYesterday,
        usersYesterday,
      },
    });
  } catch (error) {
    console.error("Error fetching report metrics:", error);

    return NextResponse.json(
      {
        error: "Internal server error while fetching report metrics.",
      },
      { status: 500 },
    );
  }
}