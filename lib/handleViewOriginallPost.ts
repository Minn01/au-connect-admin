import { MAIN_APP_PATH } from "@/constants";

export default function handleViewOriginalPost(
  targetType: string,
  targetId: string,
  targetUserName: string,
) {
  if (!targetId || !targetType) return;

  let routePath = "";
  if (targetType === "POST") {
    routePath = `${MAIN_APP_PATH}/posts/${targetId}`;
  }
  if (targetType === "USER" && targetUserName) {
    // Must mirror the main app's buildSlug() exactly - it requires the slug
    // to match /^[a-z0-9-]+-[a-fA-F0-9]{24}$/, so any character outside
    // a-z0-9 (periods, apostrophes, spaces, etc.) has to collapse to a
    // single hyphen or the profile route 404s.
    const cleanUsername = targetUserName
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    routePath = `${MAIN_APP_PATH}/profile/${cleanUsername}-${targetId}`;
  }

  if (routePath) {
    window.open(routePath, "_blank", "noopener,noreferrer");
  }
}
