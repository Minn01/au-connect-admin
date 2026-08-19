export function positiveInteger(value: string | null, fallback: number) {
  if (value === null || !/^\d+$/.test(value)) return fallback;

  const parsed = Number(value);
  return parsed > 0 ? parsed : fallback;
}

export function enumValue<T extends string>(
  value: string | null,
  values: ReadonlySet<T>,
) {
  if (!value) return undefined;

  const normalized = value.toUpperCase().replaceAll("-", "_") as T;
  return values.has(normalized) ? normalized : null;
}
