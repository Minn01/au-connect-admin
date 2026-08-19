import { BASE_API_PATH } from "@/constants";
import type { AdminMediaUploadResponse } from "@/types/AdminMedia";
import type { ApiErrorResponse } from "@/types/ApiResponse";

export async function uploadAnnouncementImage(file: File) {
  const res = await fetch(`${BASE_API_PATH}/upload-media`, {
    method: "POST",
    body: JSON.stringify({ fileType: file.type }),
  });
  const json = (await res.json()) as Partial<
    AdminMediaUploadResponse & ApiErrorResponse
  >;

  if (!res.ok || !json?.uploadUrl || !json?.blobName) {
    throw new Error(json?.error || "Could not prepare image upload");
  }

  const uploadRes = await fetch(json.uploadUrl, {
    method: "PUT",
    headers: {
      "x-ms-blob-type": "BlockBlob",
      "Content-Type": file.type,
      "Content-Length": file.size.toString(),
    },
    body: file,
  });

  if (!uploadRes.ok) {
    throw new Error("Azure upload failed");
  }

  return { blobName: json.blobName as string };
}
