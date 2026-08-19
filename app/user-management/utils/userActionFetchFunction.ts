import { useMutation, useQueryClient } from "@tanstack/react-query";

import { USER_ACTION_API_PATH } from "@/constants";
import type {
  ModerationRequest,
  ModerationResponse,
} from "@/types/UserManagement";

async function applyUserModeration({
  userId,
  ...request
}: ModerationRequest) {
  const response = await fetch(USER_ACTION_API_PATH(userId), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(body?.error || "Could not apply moderation action.");
  }

  return body as ModerationResponse;
}

export function useUserActionMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: applyUserModeration,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["users"] }),
        queryClient.invalidateQueries({ queryKey: ["history"] }),
      ]);
    },
  });
}
