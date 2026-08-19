export type AccountStatus = "ACTIVE" | "SUSPENDED" | "BANNED";
export type VerificationStatus =
  | "UNSUBMITTED"
  | "PENDING"
  | "APPROVED"
  | "REJECTED";
export type VerificationRole = "STUDENT" | "ALUMNI" | "STAFF" | "LECTURER";
export type UserSortOption = "newest" | "oldest" | "username";
export type ModerationAction =
  | "WARN_USER"
  | "SUSPEND_USER"
  | "BAN_USER"
  | "REACTIVATE_USER";

export type UserRecord = {
  id: string;
  username: string;
  email: string;
  title: string | null;
  profilePic: string | null;
  location: string | null;
  accountStatus: AccountStatus;
  suspendedUntil: string | null;
  warningCount: number;
  accountVerificationStatus: VerificationStatus;
  accountVerificationRole: VerificationRole | null;
  createdAt: string;
  updatedAt: string;
};

export type UsersQueryParams = {
  page: number;
  limit: number;
  query: string;
  status: AccountStatus | "";
  verificationStatus: VerificationStatus | "";
  role: VerificationRole | "";
  sort: UserSortOption;
};

export type UsersResponse = {
  users: UserRecord[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
};

export type ModerationRequest = {
  userId: string;
  action: ModerationAction;
  note: string;
  durationDays?: number;
};

export type ModerationResponse = {
  user: Pick<
    UserRecord,
    "id" | "accountStatus" | "suspendedUntil" | "warningCount" | "updatedAt"
  >;
  message: string;
};
