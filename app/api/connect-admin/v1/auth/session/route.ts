import { NextRequest, NextResponse } from "next/server";

import { getCurrentAdmin } from "@/lib/adminAuth";

export async function GET(request: NextRequest) {
  const admin = await getCurrentAdmin(request);
  if (!admin) return NextResponse.json({ admin: null }, { status: 401 });

  return NextResponse.json({
    admin: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    },
  });
}
