"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { ImagePlus, Loader2, Trash2, X } from "lucide-react";

import type { AnnouncementFormState } from "@/types/Announcement";

type AnnouncementModalProps = {
  isOpen: boolean;
  mode: "create" | "edit";
  form: AnnouncementFormState;
  thumbnailPreview: string;
  contentImagePreview: string;
  saving: boolean;
  uploading: boolean;
  onClose: () => void;
  onFieldChange: <K extends keyof AnnouncementFormState>(
    key: K,
    value: AnnouncementFormState[K]
  ) => void;
  onThumbnailFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onContentImageFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemoveThumbnail: () => void;
  onRemoveContentImage: () => void;
  onSubmit: () => void;
};

function getTodayInputValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function AnnouncementModal({
  isOpen,
  mode,
  form,
  thumbnailPreview,
  contentImagePreview,
  saving,
  uploading,
  onClose,
  onFieldChange,
  onThumbnailFileChange,
  onContentImageFileChange,
  onRemoveThumbnail,
  onRemoveContentImage,
  onSubmit,
}: AnnouncementModalProps) {
  const [warning, setWarning] = useState("");
  const todayInputValue = useMemo(() => getTodayInputValue(), []);
  const startDateMin = mode === "create" ? todayInputValue : undefined;
  const endDateMin = form.startDate || startDateMin;

  if (!isOpen) {
    return null;
  }

  function showWarning(message: string) {
    setWarning(message);
  }

  function handleDateChange(
    key: "startDate" | "endDate",
    value: string
  ) {
    if (mode === "create" && value && value < todayInputValue) {
      showWarning("Please choose today or a future date.");
      return;
    }

    if (key === "startDate") {
      if (form.endDate && value && form.endDate < value) {
        showWarning("End date cannot be earlier than the start date.");
        onFieldChange("endDate", "");
      }

      onFieldChange("startDate", value);
      return;
    }

    if (value && form.startDate && value < form.startDate) {
      showWarning("End date cannot be earlier than the start date.");
      return;
    }

    onFieldChange("endDate", value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (mode === "create" && form.startDate && form.startDate < todayInputValue) {
      showWarning("Please choose today or a future date.");
      return;
    }

    if (form.endDate && form.startDate && form.endDate < form.startDate) {
      showWarning("End date cannot be earlier than the start date.");
      return;
    }

    if (!thumbnailPreview) {
      showWarning("Thumbnail image is required.");
      return;
    }

    onSubmit();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-md bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 className="text-base font-semibold text-slate-950">
            {mode === "edit" ? "Edit Announcement" : "Create Announcement"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close announcement form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-h-[calc(92vh-64px)] space-y-4 overflow-y-auto p-5"
        >
          <label className="block">
            <span className="text-xs font-semibold text-slate-700">Title</span>
            <input
              value={form.title}
              onChange={(event) => onFieldChange("title", event.target.value)}
              required
              className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Enter announcement title"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-slate-700">
              Description
            </span>
            <textarea
              value={form.description}
              onChange={(event) =>
                onFieldChange("description", event.target.value)
              }
              required
              rows={5}
              className="mt-1 w-full resize-none rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              placeholder="Enter announcement description"
            />
          </label>

          <div>
            <span className="text-xs font-semibold text-slate-700">
              Announcement Display Period
            </span>
            <div className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                type="date"
                value={form.startDate}
                min={startDateMin}
                onChange={(event) =>
                  handleDateChange("startDate", event.target.value)
                }
                required
                className="h-10 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <input
                type="date"
                value={form.endDate}
                min={endDateMin}
                onChange={(event) =>
                  handleDateChange("endDate", event.target.value)
                }
                className="h-10 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-700">
              Thumbnail Image <span className="text-red-500">*</span>
            </span>
            <label className="mt-1 flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-center transition hover:border-blue-300 hover:bg-blue-50">
              {thumbnailPreview ? (
                <div className="relative w-full">
                  <div className="relative h-32 w-full overflow-hidden rounded-md">
                    <Image
                      src={thumbnailPreview}
                      alt="Announcement thumbnail preview"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 640px"
                      unoptimized
                    />
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onRemoveThumbnail();
                    }}
                    className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-red-600 shadow-sm transition hover:bg-red-50"
                    aria-label="Remove thumbnail image"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <ImagePlus className="h-7 w-7 text-slate-400" />
                  <span className="mt-2 text-sm font-medium text-slate-600">
                    Click to upload image
                  </span>
                  <span className="mt-1 text-xs text-slate-400">
                    JPG, PNG or WEBP. Max 5MB.
                  </span>
                </>
              )}
              <input
                key={thumbnailPreview ? "thumbnail-selected" : "thumbnail-empty"}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={onThumbnailFileChange}
                className="sr-only"
              />
            </label>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-700">
              Content Poster Image
            </span>
            <label className="mt-1 flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-center transition hover:border-blue-300 hover:bg-blue-50">
              {contentImagePreview ? (
                <div className="relative w-full">
                  <div className="relative h-72 w-full overflow-hidden rounded-md">
                    <Image
                      src={contentImagePreview}
                      alt="Announcement content poster preview"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 640px"
                      unoptimized
                    />
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      onRemoveContentImage();
                    }}
                    className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-red-600 shadow-sm transition hover:bg-red-50"
                    aria-label="Remove content poster image"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <ImagePlus className="h-7 w-7 text-slate-400" />
                  <span className="mt-2 text-sm font-medium text-slate-600">
                    Click to upload content poster
                  </span>
                  <span className="mt-1 text-xs text-slate-400">
                    JPG, PNG or WEBP. Max 5MB.
                  </span>
                </>
              )}
              <input
                key={
                  contentImagePreview
                    ? "content-image-selected"
                    : "content-image-empty"
                }
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={onContentImageFileChange}
                className="sr-only"
              />
            </label>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              disabled={saving}
              onClick={onClose}
              className="h-11 rounded-md border border-slate-200 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {saving && <Loader2 className="h-4 w-4 animate-spin" />}
              {uploading ? "Uploading Images" : "Publish Announcement"}
            </button>
          </div>
        </form>
      </div>

      {warning && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/35 px-4">
          <div
            role="alertdialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-md bg-white p-5 shadow-xl"
          >
            <h3 className="text-base font-semibold text-slate-950">
              Date Warning
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{warning}</p>
            <button
              type="button"
              onClick={() => setWarning("")}
              className="mt-5 h-10 w-full rounded-md bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
