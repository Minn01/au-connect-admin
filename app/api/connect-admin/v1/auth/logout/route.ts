import { NextResponse } from "next/server";

import { ADMIN_SESSION_COOKIE, LOGIN_PAGE_PATH } from "@/constants";
import { adminPublicUrl } from "@/lib/adminPublicUrl";

export async function POST(request: Request) {
  const response = NextResponse.redirect(adminPublicUrl(LOGIN_PAGE_PATH, request), 303);
  response.cookies.delete(ADMIN_SESSION_COOKIE);
  return response;
}
