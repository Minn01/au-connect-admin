function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const AZURE_STORAGE_ACCOUNT_NAME = requiredEnv(
  "AZURE_STORAGE_ACCOUNT_NAME"
);
export const AZURE_STORAGE_ACCOUNT_KEY = requiredEnv("AZURE_STORAGE_ACCOUNT_KEY");
export const AZURE_STORAGE_CONTAINER_NAME = requiredEnv(
  "AZURE_STORAGE_CONTAINER_NAME"
);
export const AZURE_STORAGE_CONNECTION_STRING = requiredEnv(
  "AZURE_STORAGE_CONNECTION_STRING"
);
