import {
  BlobSASPermissions,
  BlobServiceClient,
  generateBlobSASQueryParameters,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

import {
  AZURE_STORAGE_ACCOUNT_KEY,
  AZURE_STORAGE_ACCOUNT_NAME,
  AZURE_STORAGE_CONNECTION_STRING,
  AZURE_STORAGE_CONTAINER_NAME,
} from "@/lib/env";

const READ_SAS_TTL_MS = 10 * 60 * 1000;
const WRITE_SAS_TTL_MS = 5 * 60 * 1000;

export const IMAGE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
};

export function isSafeInternalBlobName(blobName: string) {
  if (!blobName) return false;
  const lower = blobName.toLowerCase();

  if (lower.startsWith("http://") || lower.startsWith("https://")) {
    return false;
  }

  if (blobName.includes("..")) {
    return false;
  }

  return (
    blobName.startsWith("images/") ||
    blobName.startsWith("videos/") ||
    blobName.startsWith("files/") ||
    blobName.startsWith("thumbnails/") ||
    blobName.startsWith("announcements/")
  );
}

function getSharedKeyCredential() {
  return new StorageSharedKeyCredential(
    AZURE_STORAGE_ACCOUNT_NAME,
    AZURE_STORAGE_ACCOUNT_KEY
  );
}

function getBlobUrl(blobName: string, sasToken: string) {
  return `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${AZURE_STORAGE_CONTAINER_NAME}/${blobName}?${sasToken}`;
}

export function createUploadUrl(blobName: string) {
  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: AZURE_STORAGE_CONTAINER_NAME,
      blobName,
      permissions: BlobSASPermissions.parse("cw"),
      expiresOn: new Date(Date.now() + WRITE_SAS_TTL_MS),
    },
    getSharedKeyCredential()
  ).toString();

  return getBlobUrl(blobName, sasToken);
}

export function createReadUrl(blobName: string) {
  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: AZURE_STORAGE_CONTAINER_NAME,
      blobName,
      permissions: BlobSASPermissions.parse("r"),
      expiresOn: new Date(Date.now() + READ_SAS_TTL_MS),
    },
    getSharedKeyCredential()
  ).toString();

  return getBlobUrl(blobName, sasToken);
}

export async function deleteBlobIfExists(blobName: string) {
  if (!isSafeInternalBlobName(blobName)) {
    return;
  }

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(
    AZURE_STORAGE_CONTAINER_NAME
  );

  await containerClient.getBlobClient(blobName).deleteIfExists();
}
