export type HistoryType =
  | "MODERATION"
  | "VERIFICATION"
  | "ANNOUNCEMENT"
  | "COMMUNITY";

export type HistoryItem = {
  id: string;
  type: HistoryType;
  action: string;
  description: string;
  actor: string | null;
  note: string | null;
  target: {
    id: string;
    label: string;
    href: string;
  };
  createdAt: string;
};

export type HistoryResponse = {
  items: HistoryItem[];
  summary: {
    totalUsers: number;
    pendingReports: number;
    pendingVerifications: number;
    restrictedUsers: number;
  };
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};
