import { REPORTS_STAT_API_PATH } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export type ReportStats = {
  pendingReview: number;
  reportedPosts: number;
  reportedUsers: number;
  resolved: number;
  allReports: number;
  postsYesterday: number;
  usersYesterday: number;
};

type ReportStatsResponse = {
  data: ReportStats;
};

async function fetchReportStats() {
  const response = await fetch(REPORTS_STAT_API_PATH);

  if (!response.ok) {
    throw new Error(`Failed to fetch report statistics (${response.status})`);
  }

  return (await response.json()) as ReportStatsResponse;
}

export function useReportStatsQuery() {
  return useQuery({
    queryKey: ["report-stats"],
    queryFn: fetchReportStats,
  });
}
