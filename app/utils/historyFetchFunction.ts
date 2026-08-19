import { useQuery } from "@tanstack/react-query";

import { HISTORY_API_PATH } from "@/constants";
import type { HistoryResponse, HistoryType } from "@/types/History";

type HistoryQueryParams = {
  page: number;
  limit: number;
  type: HistoryType | "";
};

async function fetchHistory(params: HistoryQueryParams) {
  const searchParams = new URLSearchParams({
    page: String(params.page),
    limit: String(params.limit),
  });
  if (params.type) searchParams.set("type", params.type);

  const response = await fetch(`${HISTORY_API_PATH}?${searchParams}`);
  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.error || "Could not load dashboard history.");
  }

  return body as HistoryResponse;
}

export function useHistoryQuery(params: HistoryQueryParams) {
  return useQuery({
    queryKey: ["history", params],
    queryFn: () => fetchHistory(params),
    placeholderData: (previousData) => previousData,
  });
}
