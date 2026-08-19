import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getAnnouncementStatus } from "@/lib/announcementHelpers";
import { deleteBlobIfExists, isSafeInternalBlobName } from "@/lib/azureMedia";

type Params = {
  params: Promise<{ id: string }>;
};

export async function PATCH(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();

    const existing = await prisma.announcement.findUnique({ where: { id } });

    if (!existing) {
      return NextResponse.json(
        { error: "Announcement not found" },
        { status: 404 }
      );
    }

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
    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    if (!thumbnailBlobName) {
      return NextResponse.json(
        { error: "Thumbnail image is required" },
        { status: 400 }
      );
    }

    const startDate = new Date(body?.startDate);
    const endDate = body?.endDate ? new Date(body.endDate) : null;

    if (Number.isNaN(startDate.getTime())) {
      return NextResponse.json(
        { error: "Start date is required" },
        { status: 400 }
      );
    }

    if (endDate && Number.isNaN(endDate.getTime())) {
      return NextResponse.json({ error: "Invalid end date" }, { status: 400 });
    }

    if (endDate && endDate < startDate) {
      return NextResponse.json(
        { error: "End date must be on or after start date" },
        { status: 400 }
      );
    }

    if (thumbnailBlobName && !isSafeInternalBlobName(thumbnailBlobName)) {
      return NextResponse.json(
        { error: "Invalid thumbnail image" },
        { status: 400 }
      );
    }

    if (contentImageBlobName && !isSafeInternalBlobName(contentImageBlobName)) {
      return NextResponse.json(
        { error: "Invalid content image" },
        { status: 400 }
      );
    }

    const announcement = await prisma.announcement.update({
      where: { id },
      data: {
        title,
        description,
        startDate,
        endDate,
        thumbnailBlobName,
        contentImageBlobName,
        status: getAnnouncementStatus(startDate, endDate),
      },
    });

    if (
      existing.thumbnailBlobName &&
      existing.thumbnailBlobName !== thumbnailBlobName
    ) {
      await deleteBlobIfExists(existing.thumbnailBlobName);
    }

    if (
      existing.contentImageBlobName &&
      existing.contentImageBlobName !== contentImageBlobName
    ) {
      await deleteBlobIfExists(existing.contentImageBlobName);
    }

    return NextResponse.json({ announcement });
  } catch (error) {
    console.error("Update announcement failed:", error);
    return NextResponse.json(
      { error: "Failed to update announcement" },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const existing = await prisma.announcement.findUnique({ where: { id } });

    if (!existing) {
      return NextResponse.json(
        { error: "Announcement not found" },
        { status: 404 }
      );
    }

    await prisma.announcement.delete({ where: { id } });

    if (existing.thumbnailBlobName) {
      await deleteBlobIfExists(existing.thumbnailBlobName);
    }

    if (existing.contentImageBlobName) {
      await deleteBlobIfExists(existing.contentImageBlobName);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete announcement failed:", error);
    return NextResponse.json(
      { error: "Failed to delete announcement" },
      { status: 500 }
    );
  }
}
