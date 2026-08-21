import { NextRequest, NextResponse } from "next/server";

import { createReadUrl, isSafeInternalBlobName } from "@/lib/azureMedia";
import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  try {
    // admin auth check
    await requireAdmin(req);

    const blobName = req.nextUrl.searchParams.get("blobName")?.trim();

    if (!blobName || !isSafeInternalBlobName(blobName)) {
      return NextResponse.json({ error: "Invalid blobName" }, { status: 400 });
    }

    return NextResponse.json({ url: createReadUrl(blobName) });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error("Announcement media fetch failed:", error);
    return NextResponse.json(
      { error: "Failed to create media URL" },
      { status: 500 },
    );
  }
}
