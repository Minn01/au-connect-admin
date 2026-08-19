import { randomBytes } from "node:crypto";

import { getMicrosoftAdminEnv } from "@/lib/env";

type MicrosoftIdToken = {
  aud?: string;
  exp?: number;
  iat?: number;
  name?: string;
  oid?: string;
  preferred_username?: string;
  email?: string;
  tid?: string;
};

export function createOAuthState() {
  return randomBytes(32).toString("base64url");
}

export function getMicrosoftAuthorizeUrl(origin: string, state: string) {
  const { clientId, tenantId } = getMicrosoftAdminEnv();
  const callbackUrl = `${origin}/api/connect-admin/v1/auth/microsoft/callback`;
  const url = new URL(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`
  );

  url.searchParams.set("client_id", clientId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", callbackUrl);
  url.searchParams.set("response_mode", "query");
  url.searchParams.set("scope", "openid profile email");
  url.searchParams.set("state", state);
  url.searchParams.set("prompt", "select_account");
  return url;
}

export async function exchangeMicrosoftCode(code: string, origin: string) {
  const { clientId, clientSecret, tenantId } = getMicrosoftAdminEnv();
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: `${origin}/api/connect-admin/v1/auth/microsoft/callback`,
      scope: "openid profile email",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Microsoft rejected the authorization code exchange");
  }

  const token = (await response.json()) as { id_token?: string };
  if (!token.id_token) throw new Error("Microsoft did not return an identity token");
  return readMicrosoftIdentity(token.id_token);
}

function readMicrosoftIdentity(idToken: string) {
  const { clientId, tenantId } = getMicrosoftAdminEnv();
  const sections = idToken.split(".");
  if (sections.length !== 3) throw new Error("Invalid Microsoft identity token");

  const claims = JSON.parse(
    Buffer.from(sections[1], "base64url").toString("utf8")
  ) as MicrosoftIdToken;
  const email = (claims.preferred_username ?? claims.email)?.trim().toLowerCase();

  if (
    !claims.oid ||
    !email ||
    claims.tid !== tenantId ||
    claims.aud !== clientId ||
    !claims.exp ||
    claims.exp * 1000 <= Date.now()
  ) {
    throw new Error("Microsoft identity claims could not be verified");
  }

  return { microsoftId: claims.oid, email, name: claims.name?.trim() || null };
}
