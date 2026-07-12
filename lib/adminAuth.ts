import { NextRequest } from "next/server";

export type AdminContext = {
  id: string;
  email?: string;
};

/**
 * Temporary auth adapter.
 *
 * For now announcements can be created without admin login. When the admin
 * auth flow exists, replace this helper with session/header validation and the
 * announcement APIs will automatically start saving the real admin id.
 */
export function getOptionalAdminContext(req: NextRequest): AdminContext | null {
  const id = req.headers.get("x-admin-id")?.trim();

  if (!id) {
    return null;
  }

  return {
    id,
    email: req.headers.get("x-admin-email")?.trim() || undefined,
  };
}
