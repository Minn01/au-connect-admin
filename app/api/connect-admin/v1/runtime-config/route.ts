import { NextRequest, NextResponse } from "next/server";

import { AdminAuthError, requireAdmin } from "@/lib/adminAuth";
import { getMainAppUrl } from "@/lib/mainAppUrl";

export const dynamic = "force-dynamic";

/**
 * Supplies browser-only features with selected runtime configuration without
 * baking it into the client bundle as a NEXT_PUBLIC_* value.
 */
export async function GET(request: NextRequest) {
  try {
    await requireAdmin(request);
    return NextResponse.json(
      { mainAppPath: getMainAppUrl().toString() },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }

    console.error("Could not load runtime configuration:", error);
    return NextResponse.json(
      { error: "Runtime configuration is unavailable" },
      { status: 500 }
    );
  }
}
