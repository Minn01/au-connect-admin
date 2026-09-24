import "server-only";

const MAIN_APP_BASE_PATH = "/connect";

/** Returns the runtime-configured public URL of the main AU Connect app. */
export function getMainAppUrl() {
  const value = process.env.MAIN_APP_PATH?.trim();
  if (!value) {
    throw new Error("Missing environment variable: MAIN_APP_PATH");
  }

  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.pathname.replace(/\/+$/, "") !== MAIN_APP_BASE_PATH ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      `MAIN_APP_PATH must be an HTTP(S) URL ending in ${MAIN_APP_BASE_PATH}`
    );
  }

  return new URL(`${url.origin}${MAIN_APP_BASE_PATH}`);
}
