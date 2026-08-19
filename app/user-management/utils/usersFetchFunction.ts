import { useQuery } from "@tanstack/react-query";

import { USERS_API_PATH } from "@/constants";
import type { UsersQueryParams, UsersResponse } from "@/types/UserManagement";

async function fetchUsers(params: UsersQueryParams) {
  const searchParams = new URLSearchParams({
    page: String(params.page),
    limit: String(params.limit),
    sort: params.sort,
  });

  if (params.query) searchParams.set("q", params.query);
  if (params.status) searchParams.set("status", params.status);
  if (params.verificationStatus) {
    searchParams.set("verificationStatus", params.verificationStatus);
  }
  if (params.role) searchParams.set("role", params.role);

  const response = await fetch(`${USERS_API_PATH}?${searchParams}`);
  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.error || "Could not load users.");
  }

  return body as UsersResponse;
}

export function useUsersQuery(params: UsersQueryParams) {
  return useQuery({
    queryKey: ["users", params],
    queryFn: () => fetchUsers(params),
    placeholderData: (previousData) => previousData,
  });
}
