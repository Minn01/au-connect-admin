import { AdminRole, AdminStatus } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

import { AdminAuthError, requireAdmin, requireSuperAdmin } from "@/lib/adminAuth";
import prisma from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const currentAdmin = await requireAdmin(request);
    requireSuperAdmin(currentAdmin);
    const { id } = await params;
    const body = await request.json();
    const role = body.role as AdminRole | undefined;
    const status = body.status as AdminStatus | undefined;

    if (role && !Object.values(AdminRole).includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }
    if (status && status !== AdminStatus.ACTIVE && status !== AdminStatus.DISABLED) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }
    if (!role && !status) {
      return NextResponse.json({ error: "No changes supplied" }, { status: 400 });
    }

    const target = await prisma.admin.findUnique({ where: { id } });
    if (!target) return NextResponse.json({ error: "Administrator not found" }, { status: 404 });

    const removesActiveSuperAdmin =
      target.role === AdminRole.SUPER_ADMIN &&
      target.status === AdminStatus.ACTIVE &&
      (role && role !== AdminRole.SUPER_ADMIN || status === AdminStatus.DISABLED);

    if (removesActiveSuperAdmin) {
      const activeSuperAdmins = await prisma.admin.count({
        where: { role: AdminRole.SUPER_ADMIN, status: AdminStatus.ACTIVE },
      });
      if (activeSuperAdmins <= 1) {
        return NextResponse.json(
          { error: "The final active super administrator cannot be changed" },
          { status: 409 }
        );
      }
    }

    const admin = await prisma.admin.update({
      where: { id },
      data: { ...(role && { role }), ...(status && { status }) },
      select: { id: true, email: true, name: true, role: true, status: true, createdAt: true, activatedAt: true, lastLoginAt: true },
    });
    return NextResponse.json({ admin });
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error("Update administrator failed:", error);
    return NextResponse.json({ error: "Could not update administrator" }, { status: 500 });
  }
}
