function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Environment variable "${name}" is missing`);
  return value;
}

export const AZURE_STORAGE_ACCOUNT_KEY = required("AZURE_STORAGE_ACCOUNT_KEY");
export const AZURE_STORAGE_ACCOUNT_NAME = required("AZURE_STORAGE_ACCOUNT_NAME");
export const AZURE_STORAGE_CONTAINER_NAME = required("AZURE_STORAGE_CONTAINER_NAME");
