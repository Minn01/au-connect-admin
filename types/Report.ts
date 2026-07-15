export type Report = {
  id: string;
  targetId: string;
  targetType: "POST" | "USER";
  title: string;
  reportedUsername: string | null;
  reportedProfilePic: string | null;
  reportedContent: string | null;
  reportedMedia: unknown;
  reportedLinks: unknown;
  reasons: string[];
  reportCount: number;
  statuses: string[];
  latestStatus: "PENDING" | "REVIEWED" | "DISMISSED" | "ACTION_TAKEN";
  firstReportedAt: string;
  latestReportedAt: string;
  reporters: Array<{
    id: string;
    username: string;
    profilePic: string | null;
  }>;
};

export type ReportsResponse = {
  data: Report[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

export type ReportsQueryParams = {
  page: number;
  limit: number;
  query: string;
  type?: string;
  status?: string;
  reason?: string;
  reporter?: string;
  sort: string;
};

export type ReportSubmission = {
  id: string;
  reason: string;
  description: string | null;
  status: "PENDING" | "REVIEWED" | "DISMISSED" | "ACTION_TAKEN";
  createdAt: string;
  updatedAt: string;
  reporter: {
    id: string;
    username: string;
    profilePic: string | null;
  };
};

export type ModerationActivity = {
  id: string;
  action: ReportAdminAction;
  note: string | null;
  durationDays: number | null;
  createdAt: string;
};

export type ReportCase = {
  id: string;
  targetId: string;
  targetType: "POST" | "USER";
  title: string;
  reportedUsername: string | null;
  reportedProfilePic: string | null;
  reportedContent: string | null;
  reportedMedia: unknown;
  reportedLinks: unknown;
  reportCount: number;
  uniqueReporterCount: number;
  reasons: string[];
  statuses: string[];
  latestStatus: ReportSubmission["status"];
  firstReportedAt: string;
  latestReportedAt: string;
  moderationActions: ModerationActivity[];
  submissions: ReportSubmission[];
};

export type ReportCaseResponse = {
  data: ReportCase;
};

export type ReportAdminAction =
  | "MARK_UNDER_REVIEW"
  | "REOPEN_CASE"
  | "DISMISS_REPORTS"
  | "KEEP_POST"
  | "WARN_USER"
  | "SUSPEND_USER"
  | "BAN_USER"
  | "REMOVE_POST"
  | "REMOVE_POST_WARN_AUTHOR";

export type ReportActionRequest = {
  action: ReportAdminAction;
  note?: string;
  durationDays?: number;
};

export type ReportActionResponse = {
  data: {
    action: ReportAdminAction;
    reportStatus: ReportSubmission["status"];
    updatedReportCount: number;
    createdAt: string;
  };
  message: string;
};
