import { NextRequest, NextResponse } from "next/server";

import { LOGIN_PAGE_PATH } from "@/constants";
import { getCurrentAdmin } from "@/lib/adminAuth";
import { adminPublicUrl } from "@/lib/adminPublicUrl";

const API_PATH = "/api/connect-admin/v1";
const PUBLIC_AUTH_PATH = `${API_PATH}/auth`;
const OPERATIONS_ONLY_API_PATHS = [
  `${API_PATH}/announcements`,
  `${API_PATH}/verifications`,
  `${API_PATH}/upload-media`,
  `${API_PATH}/fetch-media`,
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = pathname.startsWith(PUBLIC_AUTH_PATH);
  const isLoginPage = pathname === LOGIN_PAGE_PATH;

  if (isAuthRoute) return NextResponse.next();

  const admin = await getCurrentAdmin(request);

  if (pathname.startsWith(API_PATH) && !admin) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  if (
    admin?.role === "MODERATOR" &&
    OPERATIONS_ONLY_API_PATHS.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.json(
      { error: "You do not have permission to access this resource" },
      { status: 403 }
    );
  }

  if (isLoginPage && admin) {
    return NextResponse.redirect(adminPublicUrl("/", request));
  }

  if (!isLoginPage && !admin) {
    return NextResponse.redirect(adminPublicUrl(LOGIN_PAGE_PATH, request));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|favicon.ico|au-login-bg.jpg|au-connect-logo.png|microsoft-icon.png).*)",
  ],
};
