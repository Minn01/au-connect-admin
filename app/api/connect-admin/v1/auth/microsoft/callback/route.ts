import { AdminStatus } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE,
  MICROSOFT_OAUTH_STATE_COOKIE,
} from "@/constants";
import { createAdminSession } from "@/lib/adminAuth";
import { exchangeMicrosoftCode } from "@/lib/microsoftAuth";
import prisma from "@/lib/prisma";

function loginError(request: NextRequest, error: string) {
  const response = NextResponse.redirect(new URL(`/login?error=${error}`, request.url));
  response.cookies.delete(MICROSOFT_OAUTH_STATE_COOKIE);
  return response;
}

export async function GET(request: NextRequest) {
  // callback gets the code and state params (they're for security)
  const code = request.nextUrl.searchParams.get("code"); // this is for frontend token leakage/exposure
  const state = request.nextUrl.searchParams.get("state"); // this stops CSRF problem
  // check cookies
  const savedState = request.cookies.get(MICROSOFT_OAUTH_STATE_COOKIE)?.value;

  if (!code || !state || !savedState || state !== savedState) {
    // route back if any of the conditions are invalid
    return loginError(request, "invalid_state");
  }

  try {
    // get user data by calling token exchange API
    const identity = await exchangeMicrosoftCode(code, request.nextUrl.origin);
    let admin = await prisma.admin.findUnique({
      // check admin if they've already logged in with microsoft
      where: { microsoftId: identity.microsoftId },
    });

    // first microsoft login condition
    if (!admin) { 
      const invitedAdmin = await prisma.admin.findUnique({
        where: { email: identity.email },
      });

      // email isn't defined or uninvited 
      if (!invitedAdmin || invitedAdmin.microsoftId) {
        return loginError(request, "not_authorized");
      }

      // admin is defined/invited but status is DISABLED
      if (invitedAdmin.status === AdminStatus.DISABLED) {
        return loginError(request, "disabled");
      }

      // if AdminStatus is PENDING
      admin = await prisma.admin.update({
        where: { id: invitedAdmin.id },
        data: {
          microsoftId: identity.microsoftId,
          name: identity.name ?? invitedAdmin.name,
          status: AdminStatus.ACTIVE,
          activatedAt: invitedAdmin.activatedAt ?? new Date(),
          lastLoginAt: new Date(),
        },
      });
    } else {
      // already logged in but status is DISABLED
      if (admin.status !== AdminStatus.ACTIVE) {
        return loginError(request, "disabled");
      }

      // if not update the last login times
      admin = await prisma.admin.update({
        where: { id: admin.id },
        data: { name: identity.name ?? admin.name, lastLoginAt: new Date() },
      });
    }

    // create cookies and redirect to main "/"
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete(MICROSOFT_OAUTH_STATE_COOKIE);
    response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSession(admin.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: ADMIN_SESSION_MAX_AGE,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Microsoft login failed:", error);
    return loginError(request, "authentication_failed");
  }
}
