"use client";

import Image from "next/image";
import { Edit3, Eye, Megaphone, Trash2 } from "lucide-react";

import { useResolvedAdminMediaUrl } from "@/lib/useResolvedAdminMediaUrl";
import type { Announcement, AnnouncementStatus } from "@/types/Announcement";

const statusLabels: Record<AnnouncementStatus, string> = {
  ACTIVE: "Active",
  SCHEDULED: "Scheduled",
  EXPIRED: "Completed",
};

const statusStyles: Record<AnnouncementStatus, string> = {
  ACTIVE: "bg-emerald-50 text-emerald-700",
  SCHEDULED: "bg-amber-50 text-amber-700",
  EXPIRED: "bg-slate-100 text-slate-600",
};

type AnnouncementCardProps = {
  announcement: Announcement;
  onPreview: (announcement: Announcement) => void;
  onEdit: (announcement: Announcement) => void;
  onDelete: (id: string) => void;
};

function formatDateRange(startDate: string, endDate: string | null) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const start = formatter.format(new Date(startDate));

  if (!endDate) {
    return start;
  }

  return `${start} - ${formatter.format(new Date(endDate))}`;
}

function AnnouncementThumbnail({
  blobName,
  title,
}: {
  blobName: string;
  title: string;
}) {
  const src = useResolvedAdminMediaUrl(blobName);

  if (!src) {
    return (
      <div className="flex h-28 w-full items-center justify-center rounded-md bg-gray-100 text-gray-400">
        <Megaphone className="h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="relative h-28 w-full overflow-hidden rounded-md">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover"
        sizes="112px"
        unoptimized
      />
    </div>
  );
}

export default function AnnouncementCard({
  announcement,
  onPreview,
  onEdit,
  onDelete,
}: AnnouncementCardProps) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-3">
      <div className="grid grid-cols-[112px_1fr] gap-3">
        <AnnouncementThumbnail
          blobName={announcement.thumbnailBlobName}
          title={announcement.title}
        />

        <div className="flex min-w-0 flex-col justify-center">
          <h2 className="truncate text-xl font-semibold text-slate-950">
            {announcement.title}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {formatDateRange(announcement.startDate, announcement.endDate)}
          </p>
          <span
            className={`mt-3 inline-flex w-fit rounded px-2 py-1 text-xs font-medium ${statusStyles[announcement.status]}`}
          >
            {statusLabels[announcement.status]}
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <button
          onClick={() => onPreview(announcement)}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-slate-200 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
        >
          <Eye className="h-3.5 w-3.5" />
          Preview
        </button>
        <button
          onClick={() => onEdit(announcement)}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-slate-200 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
        >
          <Edit3 className="h-3.5 w-3.5" />
          Edit
        </button>
        <button
          onClick={() => onDelete(announcement.id)}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-red-100 text-xs font-medium text-red-600 transition hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete
        </button>
      </div>
    </article>
  );
}
