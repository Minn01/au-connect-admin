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
