import { REPORTS_API_PATH } from "@/constants";
import { ReportsQueryParams, ReportsResponse } from "@/types/Report";
import { useQuery } from "@tanstack/react-query";

export default async function fetchReports({
  page,
  limit,
  query,
  type,
  status,
  reason,
  reporter,
  sort,
}: ReportsQueryParams) {
  // build the url with search params
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    q: query,
    sort,
  });

  // set search params if values aren't null
  if (type) params.set("type", type);
  if (status) params.set("status", status);
  if (reason) params.set("reason", reason);
  if (reporter) params.set("reporter", reporter);

  const requestUrl = `${REPORTS_API_PATH}?${params.toString()}`;
  const res = await fetch(requestUrl);

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("Failed to fetch reports:", {
      url: requestUrl,
      status: res.status,
      body: errorBody,
    });
    throw new Error(`Failed to fetch reports (${res.status})`);
  }

  const data: ReportsResponse = await res.json();
  console.log("Reports API response:", data);

  return data;
}

export function useReportsQuery(params: ReportsQueryParams) {
  return useQuery({
    queryKey: ["reports", params],
    queryFn: () => fetchReports(params),
    placeholderData: (prevData) => prevData,
  });
}
