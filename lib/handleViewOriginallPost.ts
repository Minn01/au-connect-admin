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
    const cleanUsername = targetUserName.toLowerCase().split(" ").join("-");
    routePath = `${MAIN_APP_PATH}/profile/${cleanUsername}-${targetId}`;
  }

  window.location.href = routePath;
}
