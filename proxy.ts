import { NextRequest, NextResponse } from "next/server";

import { BASE_API_PATH, LOGIN_PAGE_PATH } from "@/constants";
import { getCurrentAdmin } from "@/lib/adminAuth";

const PUBLIC_AUTH_PATH = `${BASE_API_PATH}/auth`;
const OPERATIONS_ONLY_API_PATHS = [
  `${BASE_API_PATH}/announcements`,
  `${BASE_API_PATH}/verifications`,
  `${BASE_API_PATH}/upload-media`,
  `${BASE_API_PATH}/fetch-media`,
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = pathname.startsWith(PUBLIC_AUTH_PATH);
  const isLoginPage = pathname === LOGIN_PAGE_PATH;

  if (isAuthRoute) return NextResponse.next();

  const admin = await getCurrentAdmin(request);

  if (pathname.startsWith(BASE_API_PATH) && !admin) {
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
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isLoginPage && !admin) {
    return NextResponse.redirect(new URL(LOGIN_PAGE_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|au-login-bg.jpg|au-connect-logo.png|microsoft-icon.png).*)",
  ],
};
