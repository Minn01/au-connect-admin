import { NextResponse } from "next/server";

import { ADMIN_SESSION_COOKIE, LOGIN_PAGE_PATH } from "@/constants";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL(LOGIN_PAGE_PATH, request.url), 303);
  response.cookies.delete(ADMIN_SESSION_COOKIE);
  return response;
}
