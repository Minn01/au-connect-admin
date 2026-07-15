import { SINGLE_REPORT_API_PATH } from "@/constants";
import { ReportCaseResponse } from "@/types/Report";
import { useQuery } from "@tanstack/react-query";

export default async function fetchReportCase(reportTargetId: string) {
  const requestUrl = SINGLE_REPORT_API_PATH(reportTargetId);
  const res = await fetch(requestUrl);

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("Failed to fetch report case:", {
      url: requestUrl,
      status: res.status,
      body: errorBody,
    });
    throw new Error(`Failed to fetch report case (${res.status})`);
  }

  const data: ReportCaseResponse = await res.json();
  console.log("Report case API response:", data);

  return data;
}

export function useReportCaseQuery(reportTargetId: string) {
  return useQuery({
    queryKey: ["report-case", reportTargetId],
    queryFn: () => fetchReportCase(reportTargetId),
    enabled: Boolean(reportTargetId),
  });
}
