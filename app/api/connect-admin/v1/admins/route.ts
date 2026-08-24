import { AdminRole, AdminStatus } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

import { AdminAuthError, requireAdmin, requireSuperAdmin } from "@/lib/adminAuth";
import { sendAdminInvitation } from "@/lib/adminInvitation";
import prisma from "@/lib/prisma";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function authError(error: unknown) {
  if (error instanceof AdminAuthError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }
  return null;
}

export async function GET(request: NextRequest) {
  try {
    const currentAdmin = await requireAdmin(request);
    requireSuperAdmin(currentAdmin);
    const admins = await prisma.admin.findMany({
      orderBy: [{ status: "asc" }, { createdAt: "desc" }],
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        status: true,
        createdAt: true,
        activatedAt: true,
        lastLoginAt: true,
      },
    });
    return NextResponse.json({ admins });
  } catch (error) {
    return authError(error) ?? NextResponse.json({ error: "Could not load administrators" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const currentAdmin = await requireAdmin(request);
    requireSuperAdmin(currentAdmin);
    const body = await request.json();
    const userId = typeof body.userId === "string" ? body.userId.trim() : "";
    const role = body.role as AdminRole;

    if (!userId) {
      return NextResponse.json({ error: "Select an AU Connect user" }, { status: 400 });
    }
    if (!Object.values(AdminRole).includes(role)) {
      return NextResponse.json({ error: "Select a valid administrator role" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { email: true },
    });
    const email = user?.email.trim().toLowerCase() ?? "";
    if (!user || !emailPattern.test(email)) {
      return NextResponse.json({ error: "That AU Connect user could not be found" }, { status: 404 });
    }

    const existing = await prisma.admin.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "That email is already an administrator" }, { status: 409 });
    }

    const admin = await prisma.admin.create({
      data: { email, role, status: AdminStatus.PENDING, invitedById: currentAdmin.id },
      select: { id: true, email: true, name: true, role: true, status: true, createdAt: true, activatedAt: true, lastLoginAt: true },
    });
    const invitation = await sendAdminInvitation({
      email,
      role,
      loginUrl: `${request.nextUrl.origin}/login`,
      invitedBy: currentAdmin.email,
    });

    return NextResponse.json({ admin, invitationSent: invitation.delivered }, { status: 201 });
  } catch (error) {
    console.error("Create administrator failed:", error);
    return authError(error) ?? NextResponse.json({ error: "Could not create administrator" }, { status: 500 });
  }
}
