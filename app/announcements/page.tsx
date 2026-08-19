"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Loader2,
  Megaphone,
  Search,
} from "lucide-react";

import AnnouncementCard from "@/app/components/AnnouncementCard";
import AnnouncementModal from "@/app/components/AnnouncementModal";
import AnnouncementPreviewModal from "@/app/components/AnnouncementPreviewModal";
import { ANNOUNCEMENTS_API_PATH } from "@/constants";
import { uploadAnnouncementImage } from "@/lib/adminUploadMedia";
import { useResolvedAdminMediaUrl } from "@/lib/useResolvedAdminMediaUrl";
import type {
  Announcement,
  AnnouncementFormState,
  AnnouncementPayload,
  AnnouncementStatus,
  AnnouncementsResponse,
} from "@/types/Announcement";

const emptyForm: AnnouncementFormState = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  thumbnailBlobName: "",
  contentImageBlobName: "",
};

function toDateInputValue(value: string | null) {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [form, setForm] = useState<AnnouncementFormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [previewingAnnouncement, setPreviewingAnnouncement] =
    useState<Announcement | null>(null);
  const [pendingDeleteAnnouncement, setPendingDeleteAnnouncement] =
    useState<Announcement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | AnnouncementStatus>(
    "ALL"
  );
  const [selectedThumbnailFile, setSelectedThumbnailFile] =
    useState<File | null>(null);
  const [selectedContentImageFile, setSelectedContentImageFile] =
    useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const existingThumbnailUrl = useResolvedAdminMediaUrl(
    form.thumbnailBlobName || null
  );
  const existingContentImageUrl = useResolvedAdminMediaUrl(
    form.contentImageBlobName || null
  );

  const stats = useMemo(() => {
    return {
      total: announcements.length,
      active: announcements.filter((item) => item.status === "ACTIVE").length,
      completed: announcements.filter((item) => item.status === "EXPIRED").length,
    };
  }, [announcements]);

  const filteredAnnouncements = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return announcements.filter((item) => {
      const matchesQuery =
        !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);
      const matchesStatus =
        statusFilter === "ALL" || item.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [announcements, query, statusFilter]);

  const thumbnailPreviewUrl = useMemo(() => {
    if (!selectedThumbnailFile) {
      return "";
    }

    return URL.createObjectURL(selectedThumbnailFile);
  }, [selectedThumbnailFile]);

  const contentImagePreviewUrl = useMemo(() => {
    if (!selectedContentImageFile) {
      return "";
    }

    return URL.createObjectURL(selectedContentImageFile);
  }, [selectedContentImageFile]);

  async function fetchAnnouncements() {
    setLoading(true);
    const res = await fetch(ANNOUNCEMENTS_API_PATH);
    const json = (await res.json()) as Partial<AnnouncementsResponse>;
    setAnnouncements(json.announcements ?? []);
    setLoading(false);
  }

  useEffect(() => {
    let cancelled = false;

    fetch(ANNOUNCEMENTS_API_PATH)
      .then((res) => res.json())
      .then((json: Partial<AnnouncementsResponse>) => {
        if (!cancelled) {
          setAnnouncements(json.announcements ?? []);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setMessage("Could not load announcements.");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (thumbnailPreviewUrl) {
        URL.revokeObjectURL(thumbnailPreviewUrl);
      }
    };
  }, [thumbnailPreviewUrl]);

  useEffect(() => {
    return () => {
      if (contentImagePreviewUrl) {
        URL.revokeObjectURL(contentImagePreviewUrl);
      }
    };
  }, [contentImagePreviewUrl]);

  function updateField<K extends keyof AnnouncementFormState>(
    key: K,
    value: AnnouncementFormState[K]
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function resetForm(clearMessage = true) {
    setForm(emptyForm);
    setSelectedThumbnailFile(null);
    setSelectedContentImageFile(null);
    setEditingId(null);
    if (clearMessage) {
      setMessage("");
    }
  }

  function openCreateModal() {
    resetForm();
    setIsModalOpen(true);
  }

  function closeModal() {
    resetForm();
    setIsModalOpen(false);
  }

  function editAnnouncement(announcement: Announcement) {
    setEditingId(announcement.id);
    setSelectedThumbnailFile(null);
    setSelectedContentImageFile(null);
    setForm({
      title: announcement.title,
      description: announcement.description,
      startDate: toDateInputValue(announcement.startDate),
      endDate: toDateInputValue(announcement.endDate),
      thumbnailBlobName: announcement.thumbnailBlobName ?? "",
      contentImageBlobName: announcement.contentImageBlobName ?? "",
    });
    setMessage("");
    setIsModalOpen(true);
  }

  function getValidImageFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      return null;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setMessage("Please upload JPG, PNG, or WEBP.");
      event.target.value = "";
      return null;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Image must be 5MB or smaller.");
      event.target.value = "";
      return null;
    }

    setMessage("");
    return file;
  }

  function handleThumbnailFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = getValidImageFile(event);
    setSelectedThumbnailFile(file);
  }

  function handleContentImageFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = getValidImageFile(event);
    setSelectedContentImageFile(file);
  }

  function removeThumbnailImage() {
    setSelectedThumbnailFile(null);
    updateField("thumbnailBlobName", "");
  }

  function removeContentImage() {
    setSelectedContentImageFile(null);
    updateField("contentImageBlobName", "");
  }

  async function saveAnnouncement() {
    setSaving(true);
    setMessage("");

    try {
      let thumbnailBlobName = form.thumbnailBlobName || null;
      let contentImageBlobName = form.contentImageBlobName || null;

      if (selectedThumbnailFile) {
        setUploading(true);
        const uploaded = await uploadAnnouncementImage(selectedThumbnailFile);
        thumbnailBlobName = uploaded.blobName;
      }

      if (selectedContentImageFile) {
        setUploading(true);
        const uploaded = await uploadAnnouncementImage(selectedContentImageFile);
        contentImageBlobName = uploaded.blobName;
      }

      if (!thumbnailBlobName) {
        throw new Error("Thumbnail image is required.");
      }

      const payload: AnnouncementPayload = {
        title: form.title,
        description: form.description,
        startDate: form.startDate,
        endDate: form.endDate || null,
        thumbnailBlobName,
        contentImageBlobName,
      };

      const res = await fetch(
        editingId ? `${ANNOUNCEMENTS_API_PATH}/${editingId}` : ANNOUNCEMENTS_API_PATH,
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.error || "Could not save announcement");
      }

      setMessage(editingId ? "Announcement updated." : "Announcement created.");
      resetForm(false);
      setIsModalOpen(false);
      await fetchAnnouncements();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setUploading(false);
      setSaving(false);
    }
  }

  async function deleteAnnouncement(id: string) {
    const res = await fetch(`${ANNOUNCEMENTS_API_PATH}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      setMessage("Could not delete announcement.");
      return;
    }

    setMessage("Announcement deleted.");
    setPendingDeleteAnnouncement(null);
    await fetchAnnouncements();
  }

  const thumbnailPreview = thumbnailPreviewUrl || existingThumbnailUrl;
  const contentImagePreview =
    contentImagePreviewUrl || existingContentImageUrl;

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-6 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <section className="space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-normal text-slate-950">
                Post Announcements
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Create, manage, and publish announcements for AU Connect users.
              </p>
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search announcements..."
                className="h-11 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-md border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Total Announcements
                  </p>
                  <p className="text-2xl font-semibold">{stats.total}</p>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Active Announcements
                  </p>
                  <p className="text-2xl font-semibold">{stats.active}</p>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Completed Announcements
                  </p>
                  <p className="text-2xl font-semibold">{stats.completed}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as "ALL" | AnnouncementStatus)
              }
              className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-52"
            >
              <option value="ALL">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="SCHEDULED">Scheduled</option>
              <option value="EXPIRED">Completed</option>
            </select>

            <button
              type="button"
              onClick={openCreateModal}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <Megaphone className="h-4 w-4" />
              Create Announcement
            </button>
          </div>

          {message && (
            <div className="rounded-md border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
              {message}
            </div>
          )}

          {loading ? (
            <div className="flex h-60 items-center justify-center rounded-md border border-slate-200 bg-white">
              <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredAnnouncements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  onPreview={setPreviewingAnnouncement}
                  onEdit={editAnnouncement}
                  onDelete={() => setPendingDeleteAnnouncement(announcement)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <AnnouncementModal
        isOpen={isModalOpen}
        mode={editingId ? "edit" : "create"}
        form={form}
        thumbnailPreview={thumbnailPreview}
        contentImagePreview={contentImagePreview}
        saving={saving}
        uploading={uploading}
        onClose={closeModal}
        onFieldChange={updateField}
        onThumbnailFileChange={handleThumbnailFileChange}
        onContentImageFileChange={handleContentImageFileChange}
        onRemoveThumbnail={removeThumbnailImage}
        onRemoveContentImage={removeContentImage}
        onSubmit={saveAnnouncement}
      />

      {previewingAnnouncement && (
        <AnnouncementPreviewModal
          announcement={previewingAnnouncement}
          onClose={() => setPreviewingAnnouncement(null)}
        />
      )}

      {pendingDeleteAnnouncement && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/35 px-4">
          <div
            role="alertdialog"
            aria-modal="true"
            className="w-full max-w-sm rounded-md bg-white p-5 shadow-xl"
          >
            <h3 className="text-base font-semibold text-slate-950">
              Delete Announcement
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Are you sure you want to delete this announcement?
            </p>
            <p className="mt-2 truncate text-sm font-semibold text-slate-950">
              {pendingDeleteAnnouncement.title}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPendingDeleteAnnouncement(null)}
                className="h-10 rounded-md border border-slate-200 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => deleteAnnouncement(pendingDeleteAnnouncement.id)}
                className="h-10 rounded-md bg-red-600 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
