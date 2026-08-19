import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
} from "@/constants";
import type { AdminRole, AdminStatus } from "@/lib/generated/prisma";
import { getMicrosoftAdminEnv } from "@/lib/env";
import prisma from "@/lib/prisma";

export type AdminContext = {
  id: string;
  email: string;
  name: string | null;
  role: AdminRole;
  status: AdminStatus;
};

type AdminSession = {
  adminId: string;
  expiresAt: number;
};

export class AdminAuthError extends Error {
  constructor(message: string, public status = 401) {
    super(message);
  }
}

function encode(value: string) {
  return Buffer.from(value).toString("base64url");
}

function sign(value: string) {
  return createHmac("sha256", getMicrosoftAdminEnv().sessionSecret)
    .update(value)
    .digest("base64url");
}

export function createAdminSession(adminId: string) {
  const payload = encode(JSON.stringify({
    adminId,
    expiresAt: Date.now() + ADMIN_SESSION_MAX_AGE * 1000,
  } satisfies AdminSession));

  return `${payload}.${sign(payload)}`;
}

function readAdminSession(token: string | undefined): AdminSession | null {
  if (!token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  if (
    expected.length !== signature.length ||
    !timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
  ) {
    return null;
  }

  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    ) as AdminSession;
    return session.expiresAt > Date.now() ? session : null;
  } catch {
    return null;
  }
}

async function getAdminFromToken(token: string | undefined) {
  // reads data from admin token
  const session = readAdminSession(token);
  if (!session) return null;

  // returns data of admin
  return prisma.admin.findUnique({ where: { id: session.adminId } });
}

export async function getCurrentAdmin(request?: NextRequest) {
  // gets token
  const token = request
    ? request.cookies.get(ADMIN_SESSION_COOKIE)?.value
    : (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  // reads data from token and fetches admin data from db
  const admin = await getAdminFromToken(token);
  // check for active status and returns admin
  return admin?.status === "ACTIVE" ? admin : null;
}

// this should be used for every API calls
export async function requireAdmin(request: NextRequest): Promise<AdminContext> {
  const admin = await getCurrentAdmin(request);
  if (!admin) throw new AdminAuthError("Authentication required");
  return admin;
}

// can be used for role specifications
export function requireRole(admin: AdminContext, roles: AdminRole[]) {
  if (!roles.includes(admin.role)) {
    throw new AdminAuthError("You do not have permission to do that", 403);
  }
}

// super admin role specification
export function requireSuperAdmin(admin: AdminContext) {
  requireRole(admin, ["SUPER_ADMIN"]);
}

export async function getOptionalAdminContext(request: NextRequest) {
  return getCurrentAdmin(request);
}
