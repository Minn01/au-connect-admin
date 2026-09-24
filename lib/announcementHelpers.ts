import type { AnnouncementStatus, PrismaClient } from "@/lib/generated/prisma";

const ANNOUNCEMENT_TIME_ZONE = "Asia/Bangkok";
const BANGKOK_UTC_OFFSET_MS = 7 * 60 * 60 * 1000;
const DATE_ONLY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

export function getAnnouncementStatus(
  startDate: Date,
  endDate?: Date | null,
  now = new Date(),
): AnnouncementStatus {
  const today = getBangkokDateKey(now);
  const startDay = getBangkokDateKey(startDate);
  const endDay = endDate ? getBangkokDateKey(endDate) : null;

  if (endDay && endDay < today) {
    return "EXPIRED";
  }

  if (startDay > today) {
    return "SCHEDULED";
  }

  return "ACTIVE";
}

export function parseAnnouncementDate(value: unknown) {
  if (typeof value === "string") {
    const trimmedValue = value.trim();

    if (DATE_ONLY_PATTERN.test(trimmedValue)) {
      return bangkokDateKeyToUtcDate(trimmedValue);
    }

    return new Date(trimmedValue);
  }

  if (value instanceof Date || typeof value === "number") {
    return new Date(value);
  }

  return new Date(Number.NaN);
}

export function getAnnouncementTodayStart(now = new Date()) {
  return bangkokDateKeyToUtcDate(getBangkokDateKey(now));
}

export async function syncAnnouncementStatuses(
  prisma: PrismaClient,
  now = new Date(),
) {
  const today = getAnnouncementTodayStart(now);
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  await Promise.all([
    prisma.announcement.updateMany({
      where: {
        endDate: { lt: today },
        status: { not: "EXPIRED" },
      },
      data: { status: "EXPIRED" },
    }),
    prisma.announcement.updateMany({
      where: {
        startDate: { gte: tomorrow },
        status: { not: "SCHEDULED" },
      },
      data: { status: "SCHEDULED" },
    }),
    prisma.announcement.updateMany({
      where: {
        startDate: { lt: tomorrow },
        OR: [{ endDate: null }, { endDate: { gte: today } }],
        status: { not: "ACTIVE" },
      },
      data: { status: "ACTIVE" },
    }),
  ]);
}

function getBangkokDateKey(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: ANNOUNCEMENT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function bangkokDateKeyToUtcDate(dateKey: string) {
  const match = DATE_ONLY_PATTERN.exec(dateKey);

  if (!match) {
    return new Date(Number.NaN);
  }

  const [, year, month, day] = match;

  return new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day)) -
      BANGKOK_UTC_OFFSET_MS,
  );
}
