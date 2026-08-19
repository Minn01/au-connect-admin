"use client";

import { useEffect, useState, useCallback } from "react";
import {
  CheckCircle2,
  XCircle,
  Clock3,
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import {
  VERIFICATIONS_API_PATH,
  VERIFICATION_API_PATH,
  VERIFICATION_DOCUMENT_API_PATH,
} from "@/constants";

// ── Types ────────────────────────────────────────────────────────────────────

type Status = "PENDING" | "APPROVED" | "REJECTED" | "UNSUBMITTED";
type Role = "STUDENT" | "ALUMNI" | "STAFF" | "LECTURER";

type ListItem = {
  id: string;
  role: Role;
  documentType: string;
  status: Status;
  note: string | null;
  reviewNote: string | null;
  reviewedAt: string | null;
  createdAt: string;
  user: {
    id: string;
    username: string;
    email: string;
    profilePic: string | null;
    accountVerificationStatus: Status;
  };
};

type Document = {
  blobName: string;
  name: string;
  mimetype: string;
  size: number;
};

type HistoryEntry = {
  id: string;
  action: Status;
  actor: string;
  note: string | null;
  createdAt: string;
};

type DetailItem = ListItem & {
  documents: Document[];
  history: HistoryEntry[];
  user: ListItem["user"] & {
    accountVerificationRole: Role | null;
    createdAt: string;
  };
};

type Counts = { pending: number; approved: number; rejected: number };

// ── Helpers ──────────────────────────────────────────────────────────────────

function statusBadge(status: Status) {
  const cfg: Record<Status, { label: string; className: string }> = {
    PENDING:     { label: "Pending",     className: "bg-amber-100 text-amber-700" },
    APPROVED:    { label: "Approved",    className: "bg-green-100 text-green-700" },
    REJECTED:    { label: "Rejected",    className: "bg-red-100 text-red-700" },
    UNSUBMITTED: { label: "Unsubmitted", className: "bg-neutral-100 text-neutral-600" },
  };
  const { label, className } = cfg[status] ?? cfg.UNSUBMITTED;
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>
      {label}
    </span>
  );
}

function StatusIcon({ status }: { status: Status }) {
  if (status === "APPROVED") return <CheckCircle2 className="h-4 w-4 text-green-600" />;
  if (status === "REJECTED") return <XCircle className="h-4 w-4 text-red-600" />;
  if (status === "PENDING")  return <Clock3 className="h-4 w-4 text-amber-500" />;
  return <FileText className="h-4 w-4 text-neutral-400" />;
}

function formatBytes(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / (1024 * 1024)).toFixed(2)} MB`;
}

// ── Detail Drawer ─────────────────────────────────────────────────────────────

function DetailDrawer({
  id,
  onClose,
  onReviewed,
}: {
  id: string;
  onClose: () => void;
  onReviewed: () => void;
}) {
  const [detail, setDetail] = useState<DetailItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviewNote, setReviewNote] = useState("");
  const [submitting, setSubmitting] = useState<
    "APPROVED" | "REJECTED" | "UNAPPROVE" | null
  >(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(VERIFICATION_API_PATH(id))
      .then((r) => r.json())
      .then((d) => setDetail(d))
      .finally(() => setLoading(false));
  }, [id]);

  const handleReview = async (
    action: "APPROVED" | "REJECTED" | "UNAPPROVE",
  ) => {
    setSubmitting(action);
    setError("");
    try {
      const res = await fetch(VERIFICATION_API_PATH(id), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, reviewNote: reviewNote.trim() || undefined }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to submit review");
      }
      onReviewed();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(null);
    }
  };

  const openDocument = async (doc: Document) => {
    try {
      const res = await fetch(
        `${VERIFICATION_DOCUMENT_API_PATH(id)}?blobName=${encodeURIComponent(doc.blobName)}`,
      );
      const { url } = await res.json();
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      alert("Could not load document. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-50 ml-auto flex h-full w-full max-w-xl flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="text-base font-semibold text-gray-900">Verification Request</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        {loading || !detail ? (
          <div className="flex flex-1 items-center justify-center text-sm text-gray-400">
            Loading…
          </div>
        ) : (
          <div className="flex flex-1 flex-col gap-0 overflow-y-auto">
            {/* User info */}
            <section className="border-b border-gray-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600">
                  {detail.user.username?.[0]?.toUpperCase() ?? "?"}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{detail.user.username}</p>
                  <p className="text-xs text-gray-500">{detail.user.email}</p>
                </div>
                <div className="ml-auto">{statusBadge(detail.status)}</div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500">
                <div><span className="font-medium text-gray-700">Role:</span> {detail.role}</div>
                <div><span className="font-medium text-gray-700">Doc type:</span> {detail.documentType}</div>
                <div>
                  <span className="font-medium text-gray-700">Submitted:</span>{" "}
                  {new Date(detail.createdAt).toLocaleDateString()}
                </div>
              </div>
              {detail.note && (
                <div className="mt-3 rounded-md bg-gray-50 px-3 py-2 text-sm text-gray-600">
                  <span className="font-medium">Note from user:</span> {detail.note}
                </div>
              )}
            </section>

            {/* Documents */}
            <section className="border-b border-gray-100 px-6 py-5">
              <h3 className="mb-3 text-sm font-semibold text-gray-700">Documents</h3>
              {detail.documents.length === 0 ? (
                <p className="text-sm text-gray-400">No documents attached.</p>
              ) : (
                <div className="space-y-2">
                  {detail.documents.map((doc) => (
                    <button
                      key={doc.blobName}
                      onClick={() => openDocument(doc)}
                      className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2.5 text-left text-sm hover:border-red-300 hover:bg-red-50 transition"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="h-4 w-4 shrink-0 text-gray-400" />
                        <span className="truncate text-gray-800">{doc.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span className="text-xs text-gray-400">{formatBytes(doc.size)}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* Review action — only for PENDING */}
            {detail.status === "PENDING" && (
              <section className="border-b border-gray-100 px-6 py-5">
                <h3 className="mb-3 text-sm font-semibold text-gray-700">Review decision</h3>
                <textarea
                  value={reviewNote}
                  onChange={(e) => setReviewNote(e.target.value)}
                  rows={3}
                  placeholder="Optional note to the user (shown if rejected)"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-red-400"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
                <div className="mt-3 flex gap-2">
                  <button
                    disabled={!!submitting}
                    onClick={() => handleReview("APPROVED")}
                    className="flex-1 rounded-lg bg-green-600 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
                  >
                    {submitting === "APPROVED" ? "Approving…" : "Approve"}
                  </button>
                  <button
                    disabled={!!submitting}
                    onClick={() => handleReview("REJECTED")}
                    className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    {submitting === "REJECTED" ? "Rejecting…" : "Reject"}
                  </button>
                </div>
              </section>
            )}

            {/* Reverse decision — only for APPROVED */}
            {detail.status === "APPROVED" && (
              <section className="border-b border-gray-100 px-6 py-5">
                <h3 className="mb-1 text-sm font-semibold text-gray-700">
                  Reverse verification
                </h3>
                <p className="mb-3 text-xs text-gray-500">
                  Unapproving revokes this user&apos;s verified status and sends
                  the request back to the pending queue for re-review.
                </p>
                <textarea
                  value={reviewNote}
                  onChange={(e) => setReviewNote(e.target.value)}
                  rows={3}
                  placeholder="Optional reason for reversing (recorded in history)"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-amber-400"
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                <button
                  disabled={!!submitting}
                  onClick={() => handleReview("UNAPPROVE")}
                  className="mt-3 w-full rounded-lg border border-amber-500 bg-amber-50 py-2.5 text-sm font-semibold text-amber-700 hover:bg-amber-100 disabled:opacity-50"
                >
                  {submitting === "UNAPPROVE" ? "Unapproving…" : "Unapprove"}
                </button>
              </section>
            )}

            {/* History */}
            {detail.history.length > 0 && (
              <section className="px-6 py-5">
                <h3 className="mb-3 text-sm font-semibold text-gray-700">History</h3>
                <div className="space-y-2">
                  {detail.history.map((h) => (
                    <div key={h.id} className="flex items-start gap-2 text-sm">
                      <StatusIcon status={h.action} />
                      <div>
                        <span className="font-medium text-gray-800">{h.action}</span>
                        {h.note && <span className="text-gray-500"> — {h.note}</span>}
                        <p className="text-xs text-gray-400">
                          by {h.actor} · {new Date(h.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

type FilterTab = "ALL" | "PENDING" | "APPROVED" | "REJECTED";

export default function UserVerificationPage() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [counts, setCounts] = useState<Counts>({ pending: 0, approved: 0, rejected: 0 });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<FilterTab>("PENDING");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [cursor, setCursor] = useState<string | null>(null);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [cursorStack, setCursorStack] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchData = useCallback(
    async (cur: string | null) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (activeTab !== "ALL") params.set("status", activeTab);
        if (search) params.set("search", search);
        if (cur) params.set("cursor", cur);

        const res = await fetch(`${VERIFICATIONS_API_PATH}?${params}`);
        const data = await res.json();
        setItems(data.items ?? []);
        setNextCursor(data.nextCursor ?? null);
        setCounts(data.counts ?? { pending: 0, approved: 0, rejected: 0 });
      } finally {
        setLoading(false);
      }
    },
    [activeTab, search],
  );

  useEffect(() => {
    setCursor(null);
    setCursorStack([]);
    fetchData(null);
  }, [fetchData]);

  const goNext = () => {
    if (!nextCursor) return;
    setCursorStack((s) => [...s, cursor ?? ""]);
    setCursor(nextCursor);
    fetchData(nextCursor);
  };

  const goPrev = () => {
    const stack = [...cursorStack];
    const prev = stack.pop() ?? null;
    setCursorStack(stack);
    setCursor(prev);
    fetchData(prev);
  };

  const tabs: { key: FilterTab; label: string; count?: number }[] = [
    { key: "PENDING",  label: "Pending",  count: counts.pending  },
    { key: "APPROVED", label: "Approved", count: counts.approved },
    { key: "REJECTED", label: "Rejected", count: counts.rejected },
    { key: "ALL",      label: "All"                               },
  ];

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Page header */}
      <div className="border-b border-gray-200 bg-white px-8 py-5">
        <h1 className="text-xl font-bold text-gray-900">User Verification</h1>
        <p className="mt-1 text-sm text-gray-500">
          Review and approve AU Connect account verification requests.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 border-b border-gray-200 bg-white px-8 py-4">
        {[
          { label: "Pending review", value: counts.pending,  color: "text-amber-600" },
          { label: "Approved",       value: counts.approved, color: "text-green-600" },
          { label: "Rejected",       value: counts.rejected, color: "text-red-600"   },
        ].map(({ label, value, color }) => (
          <div key={label}>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 border-b border-gray-200 bg-white px-8 py-3">
        {/* Tabs */}
        <div className="flex gap-1">
          {tabs.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                activeTab === key
                  ? "bg-red-50 text-red-600"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              {label}
              {count !== undefined && (
                <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-600">
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search */}
        <form
          className="relative ml-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(searchInput);
          }}
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by name or email"
            className="w-64 rounded-lg border border-gray-200 py-1.5 pl-9 pr-8 text-sm text-gray-800 outline-none focus:border-red-400"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => { setSearchInput(""); setSearch(""); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </form>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto px-8 py-6">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-sm text-gray-400">
            Loading…
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-sm text-gray-400">
            <FileText className="mb-3 h-8 w-8 text-gray-300" />
            No verification requests found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  <th className="px-5 py-3">User</th>
                  <th className="px-5 py-3">Role</th>
                  <th className="px-5 py-3">Document type</th>
                  <th className="px-5 py-3">Submitted</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 transition hover:bg-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600">
                          {item.user.username?.[0]?.toUpperCase() ?? "?"}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.user.username}</p>
                          <p className="text-xs text-gray-400">{item.user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-700">{item.role}</td>
                    <td className="px-5 py-3 text-gray-600">{item.documentType}</td>
                    <td className="px-5 py-3 text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-3">{statusBadge(item.status)}</td>
                    <td className="px-5 py-3 text-right">
                      <button
                        onClick={() => setSelectedId(item.id)}
                        className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:border-red-300 hover:text-red-600 transition"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {(cursorStack.length > 0 || nextCursor) && (
          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              disabled={cursorStack.length === 0}
              onClick={goPrev}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button
              disabled={!nextCursor}
              onClick={goNext}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Detail Drawer */}
      {selectedId && (
        <DetailDrawer
          id={selectedId}
          onClose={() => setSelectedId(null)}
          onReviewed={() => {
            setSelectedId(null);
            fetchData(cursor);
          }}
        />
      )}
    </div>
  );
}
