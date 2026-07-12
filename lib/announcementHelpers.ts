import type { AnnouncementStatus, PrismaClient } from "@/lib/generated/prisma";

export function getAnnouncementStatus(
  startDate: Date,
  endDate?: Date | null
): AnnouncementStatus {
  const today = startOfDay(new Date());
  const startDay = startOfDay(startDate);
  const endDay = endDate ? startOfDay(endDate) : null;

  if (endDay && endDay < today) {
    return "EXPIRED";
  }

  if (startDay > today) {
    return "SCHEDULED";
  }

  return "ACTIVE";
}

export async function syncAnnouncementStatuses(prisma: PrismaClient) {
  const today = startOfDay(new Date());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

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

function startOfDay(date: Date) {
  const day = new Date(date);
  day.setHours(0, 0, 0, 0);
  return day;
}
