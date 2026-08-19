import { REPORT_ACTION_API_PATH } from "@/constants";
import {
  ReportActionRequest,
  ReportActionResponse,
} from "@/types/Report";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default async function updateReportCase(
  reportTargetId: string,
  actionRequest: ReportActionRequest,
) {
  const requestUrl = REPORT_ACTION_API_PATH(reportTargetId);
  const res = await fetch(requestUrl, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(actionRequest),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    console.error("Failed to apply report action:", {
      url: requestUrl,
      status: res.status,
      body: errorBody,
    });
    throw new Error(
      errorBody?.error ?? `Failed to apply report action (${res.status})`,
    );
  }

  const data: ReportActionResponse = await res.json();
  console.log("Report action API response:", data);

  return data;
}

export function useReportActionMutation(reportTargetId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (actionRequest: ReportActionRequest) =>
      updateReportCase(reportTargetId, actionRequest),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["report-case", reportTargetId],
        }),
        queryClient.invalidateQueries({ queryKey: ["reports"] }),
        queryClient.invalidateQueries({ queryKey: ["report-stats"] }),
      ]);
    },
  });
}
