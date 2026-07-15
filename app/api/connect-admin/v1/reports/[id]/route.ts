import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return NextResponse.json(
        { error: "A valid report target ID is required." },
        { status: 400 },
      );
    }

    const submissions = await prisma.report.findMany({
      where: { targetId: id },
      orderBy: { createdAt: "desc" },
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

    if (submissions.length === 0) {
      return NextResponse.json(
        { error: "No report case was found for this target." },
        { status: 404 },
      );
    }

    const latest = submissions[0];
    const oldest = submissions.at(-1)!;
    const moderationActions = await prisma.moderationAction.findMany({
      where: {
        targetId: id,
        targetType: latest.targetType,
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        action: true,
        note: true,
        durationDays: true,
        createdAt: true,
      },
    });
    const uniqueReporterCount = new Set(
      submissions.map((submission) => submission.reporter.id),
    ).size;

    return NextResponse.json({
      data: {
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
        reportCount: submissions.length,
        uniqueReporterCount,
        reasons: Array.from(
          new Set(submissions.map((submission) => submission.reason)),
        ),
        statuses: Array.from(
          new Set(submissions.map((submission) => submission.status)),
        ),
        latestStatus: latest.status,
        firstReportedAt: oldest.createdAt,
        latestReportedAt: latest.createdAt,
        moderationActions,
        submissions: submissions.map((submission) => ({
          id: submission.id,
          reason: submission.reason,
          description: submission.description,
          status: submission.status,
          createdAt: submission.createdAt,
          updatedAt: submission.updatedAt,
          reporter: submission.reporter,
        })),
      },
    });
  } catch (error) {
    console.error("Error fetching report case:", error);
    return NextResponse.json(
      { error: "Internal server error while fetching the report case." },
      { status: 500 },
    );
  }
}
