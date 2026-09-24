import { BASE_API_PATH } from "@/constants";

let mainAppPathRequest: Promise<string> | undefined;

function getMainAppPath() {
  if (!mainAppPathRequest) {
    mainAppPathRequest = fetch(`${BASE_API_PATH}/runtime-config`, {
      cache: "no-store",
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error("Could not load the main application URL");
      }

      const payload = (await response.json()) as { mainAppPath?: unknown };
      if (typeof payload.mainAppPath !== "string") {
        throw new Error("The main application URL is invalid");
      }

      return payload.mainAppPath;
    });
  }

  return mainAppPathRequest;
}

export default async function handleViewOriginalPost(
  targetType: string,
  targetId: string,
  targetUserName: string,
) {
  if (!targetId || !targetType) return;

  const openedWindow = window.open("about:blank", "_blank");
  if (!openedWindow) return;
  openedWindow.opener = null;

  try {
    const mainAppUrl = new URL(await getMainAppPath());
    const mainAppPath = mainAppUrl.pathname.replace(/\/+$/, "");
    let routePath = "";

    if (targetType === "POST") {
      routePath = `${mainAppUrl.origin}${mainAppPath}/posts/${targetId}`;
    }
    if (targetType === "USER" && targetUserName) {
      const cleanUsername = targetUserName.toLowerCase().split(" ").join("-");
      routePath = `${mainAppUrl.origin}${mainAppPath}/profile/${cleanUsername}-${targetId}`;
    }

    if (routePath) {
      openedWindow.location.replace(routePath);
      return;
    }
  } catch (error) {
    console.error("Could not open the main application:", error);
  }

  openedWindow.close();
}
