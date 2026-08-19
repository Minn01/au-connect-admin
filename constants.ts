/*
 * GLOBAL VARIABLES USED ACROSS THE APP
 * contains routes, paths and other constants
 */

export const BASE_API_PATH = "/api/connect-admin/v1";
export const MAIN_APP_PATH = "https://au-connect-minn.vercel.app"

// page routes
export const MAIN_PAGE_PATH = "/"
export const ANNOUNCEMENTS_PAGE_PATH = "/announcements"
export const COMMUNITY_PAGE_PATH = "/community"
export const USER_MANAGEMENT_PAGE_PATH = "/user-management"
export const USER_VERIFICATION_PAGE_PATH = "/user-verification"
export const REPORTS_PAGE_PATH = "/reports"
export const LOGIN_PAGE_PATH = "/login";
export const ADMINISTRATORS_PAGE_PATH = "/administrators";

// API routes
export const REPORTS_API_PATH = BASE_API_PATH + "/reports";
export const REPORTS_STAT_API_PATH = BASE_API_PATH + "/reports/stats"
export const SINGLE_REPORT_API_PATH = (reportId: string) => `${BASE_API_PATH}/reports/${reportId}`;
export const REPORT_ACTION_API_PATH = (reportTargetId: string) =>
  `${BASE_API_PATH}/reports/${reportTargetId}/actions`;
export const ANNOUNCEMENTS_API_PATH = `${BASE_API_PATH}/announcements`;
export const COMMUNITIES_API_PATH = `${BASE_API_PATH}/communities`;
export const COMMUNITY_API_PATH = (id: string) => `${COMMUNITIES_API_PATH}/${id}`;
export const USERS_API_PATH = `${BASE_API_PATH}/users`;
export const USER_ACTION_API_PATH = (id: string) =>
  `${USERS_API_PATH}/${id}/actions`;
export const HISTORY_API_PATH = `${BASE_API_PATH}/history`;
export const VERIFICATIONS_API_PATH = BASE_API_PATH + "/verifications";
export const VERIFICATION_API_PATH = (id: string) => BASE_API_PATH + `/verifications/${id}`;
export const VERIFICATION_DOCUMENT_API_PATH = (id: string) =>
  BASE_API_PATH + `/verifications/${id}/document`;
export const MICROSOFT_LOGIN_API_PATH = `${BASE_API_PATH}/auth/microsoft`;
export const ADMIN_SESSION_API_PATH = `${BASE_API_PATH}/auth/session`;
export const ADMIN_LOGOUT_API_PATH = `${BASE_API_PATH}/auth/logout`;
export const ADMINS_API_PATH = `${BASE_API_PATH}/admins`;
export const ADMIN_API_PATH = (id: string) => `${ADMINS_API_PATH}/${id}`;


// constant variables
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;
export const ADMIN_SESSION_COOKIE = "ac_admin_session";
export const MICROSOFT_OAUTH_STATE_COOKIE = "ac_admin_oauth_state";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8;
export const MICROSOFT_OAUTH_STATE_MAX_AGE = 60 * 10;
