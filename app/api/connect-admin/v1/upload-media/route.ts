import { NextRequest, NextResponse } from "next/server";

import { createUploadUrl, IMAGE_EXTENSIONS } from "@/lib/azureMedia";
import { getOptionalAdminContext } from "@/lib/adminAuth";

const ANNOUNCEMENT_IMAGE_FOLDER = "announcements";

export async function POST(req: NextRequest) {
  try {
    getOptionalAdminContext(req);

    const body = await req.json();
    const fileType = body?.fileType;

    if (!fileType || typeof fileType !== "string") {
      return NextResponse.json({ error: "Invalid fileType" }, { status: 400 });
    }

    const extension = IMAGE_EXTENSIONS[fileType];

    if (!extension) {
      return NextResponse.json(
        { error: "Only JPG, PNG, WEBP, and GIF images are allowed" },
        { status: 400 }
      );
    }

    const blobName = `${ANNOUNCEMENT_IMAGE_FOLDER}/${crypto.randomUUID()}${extension}`;
    const uploadUrl = createUploadUrl(blobName);

    return NextResponse.json({ uploadUrl, blobName });
  } catch (error) {
    console.error("Announcement upload URL failed:", error);
    return NextResponse.json(
      { error: "Upload URL failed" },
      { status: 500 }
    );
  }
}
