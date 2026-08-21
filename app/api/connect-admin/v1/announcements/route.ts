import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import {
  AdminAuthError,
  requireAdmin,
} from "@/lib/adminAuth";
import {
  getAnnouncementStatus,
  syncAnnouncementStatuses,
} from "@/lib/announcementHelpers";
import { isSafeInternalBlobName } from "@/lib/azureMedia";

export async function GET(req: NextRequest) {
  try {
    // admin auth check
    await requireAdmin(req);

    await syncAnnouncementStatuses(prisma);

    const announcements = await prisma.announcement.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      announcements: announcements.map((announcement) => ({
        ...announcement,
        status: getAnnouncementStatus(
          announcement.startDate,
          announcement.endDate,
        ),
      })),
    });
  } catch (err) {
    if (err instanceof AdminAuthError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status },
      );
    }

    console.error("Fetch announcements failed:", err);
    return NextResponse.json(
      { error: "Failed to fetch announcements" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const admin = await requireAdmin(req);
    const body = await req.json();

    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const description =
      typeof body?.description === "string" ? body.description.trim() : "";
    const thumbnailBlobName =
      typeof body?.thumbnailBlobName === "string" &&
      body.thumbnailBlobName.trim()
        ? body.thumbnailBlobName.trim()
        : null;
    const contentImageBlobName =
      typeof body?.contentImageBlobName === "string" &&
      body.contentImageBlobName.trim()
        ? body.contentImageBlobName.trim()
        : null;
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 },
      );
    }

    if (!thumbnailBlobName) {
      return NextResponse.json(
        { error: "Thumbnail image is required" },
        { status: 400 },
      );
    }

    const startDate = new Date(body?.startDate);
    const endDate = body?.endDate ? new Date(body.endDate) : null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(startDate.getTime())) {
      return NextResponse.json(
        { error: "Start date is required" },
        { status: 400 },
      );
    }

    if (endDate && Number.isNaN(endDate.getTime())) {
      return NextResponse.json({ error: "Invalid end date" }, { status: 400 });
    }

    if (startDate < today) {
      return NextResponse.json(
        { error: "Start date cannot be in the past" },
        { status: 400 },
      );
    }

    if (endDate && endDate < startDate) {
      return NextResponse.json(
        { error: "End date must be on or after start date" },
        { status: 400 },
      );
    }

    if (thumbnailBlobName && !isSafeInternalBlobName(thumbnailBlobName)) {
      return NextResponse.json(
        { error: "Invalid thumbnail image" },
        { status: 400 },
      );
    }

    if (contentImageBlobName && !isSafeInternalBlobName(contentImageBlobName)) {
      return NextResponse.json(
        { error: "Invalid content image" },
        { status: 400 },
      );
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        description,
        startDate,
        endDate,
        thumbnailBlobName,
        contentImageBlobName,
        status: getAnnouncementStatus(startDate, endDate),
        createdByAdminId: admin?.id ?? null,
      },
    });

    return NextResponse.json({ announcement }, { status: 201 });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error("Create announcement failed:", error);
    return NextResponse.json(
      { error: "Failed to create announcement" },
      { status: 500 },
    );
  }
}
