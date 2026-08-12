function requiredEnv(name: string): string {
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

export function getMicrosoftAdminEnv() {
  return {
    clientId: requiredEnv("MICROSOFT_CLIENT_ID"),
    clientSecret: requiredEnv("MICROSOFT_CLIENT_SECRET"),
    tenantId: requiredEnv("MICROSOFT_TENANT_ID"),
    sessionSecret: requiredEnv("JWT_SECRET"),
  };
}
