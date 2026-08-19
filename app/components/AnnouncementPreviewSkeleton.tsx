"use client";

import { X } from "lucide-react";

type AnnouncementPreviewSkeletonProps = {
  onClose: () => void;
};

export default function AnnouncementPreviewSkeleton({
  onClose,
}: AnnouncementPreviewSkeletonProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="h-[90vh] w-full max-w-6xl overflow-hidden rounded-lg bg-white"
        style={{ maxWidth: "1100px" }}
      >
        <div className="hidden h-full min-h-0 w-full md:flex">
          <div
            style={{
              width: "65%",
              minWidth: 0,
              flexShrink: 0,
              display: "flex",
              minHeight: 0,
              backgroundColor: "#111827",
            }}
            className="animate-pulse items-center justify-center p-6"
          >
            <div className="w-full space-y-4">
              <div className="h-6 w-2/3 rounded bg-gray-700" />
              <div className="h-4 w-1/2 rounded bg-gray-700" />
              <div className="h-64 w-full rounded bg-gray-800" />
            </div>
          </div>

          <div
            style={{
              width: "35%",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden",
              borderLeft: "1px solid #e5e7eb",
            }}
            className="animate-pulse"
          >
            <div className="flex items-center gap-3 border-b p-4">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-36 rounded bg-gray-200" />
                <div className="h-3 w-28 rounded bg-gray-200" />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close announcement preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3 border-b p-4">
              <div className="h-4 w-2/3 rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
            </div>
            <div className="flex-1 space-y-4 p-4">
              <div className="h-16 rounded bg-gray-200" />
              <div className="h-16 rounded bg-gray-200" />
              <div className="h-16 rounded bg-gray-200" />
            </div>
            <div className="border-t p-3">
              <div className="h-10 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col animate-pulse md:hidden">
          <div className="flex items-center gap-3 border-b p-4">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-36 rounded bg-gray-200" />
              <div className="h-3 w-28 rounded bg-gray-200" />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close announcement preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3 border-b p-4">
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
          </div>
          <div className="flex-1 space-y-4 p-4">
            <div className="h-16 rounded bg-gray-200" />
            <div className="h-16 rounded bg-gray-200" />
            <div className="h-16 rounded bg-gray-200" />
          </div>
          <div className="border-t p-3">
            <div className="h-10 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
