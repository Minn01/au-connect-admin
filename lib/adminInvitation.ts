import { AdminRole } from "@/lib/generated/prisma";

type AdminInvitation = {
  email: string;
  role: AdminRole;
  loginUrl: string;
  invitedBy: string;
};

/**
 * Provider boundary for a future transactional email service.
 * Admin creation intentionally succeeds without email delivery for now.
 */
export async function sendAdminInvitation(invitation: AdminInvitation) {
  if (process.env.NODE_ENV !== "test") {
    console.info("Admin invitation email provider is not configured", {
      email: invitation.email,
      role: invitation.role,
      loginUrl: invitation.loginUrl,
      invitedBy: invitation.invitedBy,
    });
  }

  return { delivered: false };
}
