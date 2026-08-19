import { NextRequest, NextResponse } from "next/server";

import { createReadUrl, isSafeInternalBlobName } from "@/lib/azureMedia";

export async function GET(req: NextRequest) {
  try {
    const blobName = req.nextUrl.searchParams.get("blobName")?.trim();

    if (!blobName || !isSafeInternalBlobName(blobName)) {
      return NextResponse.json({ error: "Invalid blobName" }, { status: 400 });
    }

    return NextResponse.json({ url: createReadUrl(blobName) });
  } catch (error) {
    console.error("Announcement media fetch failed:", error);
    return NextResponse.json(
      { error: "Failed to create media URL" },
      { status: 500 }
    );
  }
}
