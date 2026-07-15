/*
 * GLOBAL VARIABLES USED ACROSS THE APP
 * contains routes, paths and other constants
 */

export const BASE_API_PATH = "/api/connect-admin/v1";
export const ANNOUNCEMENTS_API_PATH = `${BASE_API_PATH}/announcements`;

// page routes
export const MAIN_PAGE_PATH = "/"
export const ANNOUNCEMENTS_PAGE_PATH = "/announcements"
export const COMMUNITY_PAGE_PATH = "/community"
export const USER_MANAGEMENT_PAGE_PATH = "/user-management"
export const USER_VERIFICATION_PAGE_PATH = "/user-verification"
export const REPORTS_PAGE_PATH = "/reports"


// API routes
export const REPORTS_API_PATH = BASE_API_PATH + "/reports";
export const REPORTS_STAT_API_PATH = BASE_API_PATH + "/reports/stats"
export const SINGLE_REPORT_API_PATH = (reportId: string) => `${BASE_API_PATH}/reports/${reportId}`;
export const REPORT_ACTION_API_PATH = (reportTargetId: string) =>
  `${BASE_API_PATH}/reports/${reportTargetId}/actions`;

// constant variables
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;

// api routes
export const VERIFICATIONS_API_PATH = BASE_API_PATH + "/verifications";
export const VERIFICATION_API_PATH = (id: string) => BASE_API_PATH + `/verifications/${id}`;
export const VERIFICATION_DOCUMENT_API_PATH = (id: string) =>
  BASE_API_PATH + `/verifications/${id}/document`;
