import { NextRequest, NextResponse } from "next/server";

import {
  MICROSOFT_OAUTH_STATE_COOKIE,
  MICROSOFT_OAUTH_STATE_MAX_AGE,
} from "@/constants";
import {
  createOAuthState,
  getMicrosoftAuthorizeUrl,
} from "@/lib/microsoftAuth";

export async function GET(request: NextRequest) {
  try {
    const state = createOAuthState();
    const response = NextResponse.redirect(
      getMicrosoftAuthorizeUrl(request.nextUrl.origin, state)
    );

    response.cookies.set(MICROSOFT_OAUTH_STATE_COOKIE, state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: MICROSOFT_OAUTH_STATE_MAX_AGE,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Microsoft login could not start:", error);
    return NextResponse.redirect(new URL("/login?error=configuration", request.url));
  }
}
