"use client";

import { FormEvent, useState } from "react";
import {
  Ban,
  BellRing,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock3,
  FilterX,
  LoaderCircle,
  Search,
  ShieldCheck,
  UserCheck,
  UserRound,
  Users,
  X,
} from "lucide-react";

import type {
  AccountStatus,
  ModerationAction,
  UserRecord,
  UserSortOption,
  VerificationRole,
  VerificationStatus,
} from "@/types/UserManagement";
import { useUserActionMutation } from "./utils/userActionFetchFunction";
import { useUsersQuery } from "./utils/usersFetchFunction";
import ConfirmModal from "@/app/components/ConfirmModal";

const statusStyles: Record<AccountStatus, string> = {
  ACTIVE: "border-emerald-200 bg-emerald-50 text-emerald-700",
  SUSPENDED: "border-amber-200 bg-amber-50 text-amber-700",
  BANNED: "border-red-200 bg-red-50 text-red-700",
};

const verificationStyles: Record<VerificationStatus, string> = {
  APPROVED: "bg-blue-50 text-blue-700",
  PENDING: "bg-amber-50 text-amber-700",
  REJECTED: "bg-red-50 text-red-700",
  UNSUBMITTED: "bg-slate-100 text-slate-500",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function readable(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function UserAvatar({ user, large = false }: { user: UserRecord; large?: boolean }) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full bg-red-50 font-semibold uppercase text-red-700 ${
        large ? "h-14 w-14 text-lg" : "h-10 w-10 text-sm"
      }`}
    >
      {user.username.trim().charAt(0) || "U"}
    </div>
  );
}

export default function UserManagementPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<AccountStatus | "">("");
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus | "">("");
  const [role, setRole] = useState<VerificationRole | "">("");
  const [sort, setSort] = useState<UserSortOption>("newest");
  const [selected, setSelected] = useState<UserRecord | null>(null);
  const [pendingAction, setPendingAction] = useState<ModerationAction | null>(null);
  const [actionNote, setActionNote] = useState("");
  const [durationDays, setDurationDays] = useState("7");
  const [actionMessage, setActionMessage] = useState("");
  const [isModerationConfirmationOpen, setIsModerationConfirmationOpen] = useState(false);
  const usersQuery = useUsersQuery({
    page,
    limit,
    query,
    status,
    verificationStatus,
    role,
    sort,
  });
  const actionMutation = useUserActionMutation();
  const users = usersQuery.data?.users ?? [];
  const total = usersQuery.data?.pagination.total ?? 0;
  const totalPages = usersQuery.data?.pagination.totalPages ?? 0;
  const loading = usersQuery.isLoading;
  const error = usersQuery.error instanceof Error ? usersQuery.error.message : "";
  const actionSaving = actionMutation.isPending;
  const actionError =
    actionMutation.error instanceof Error ? actionMutation.error.message : "";

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setQuery(searchInput.trim());
  }

  function clearFilters() {
    setSearchInput("");
    setQuery("");
    setStatus("");
    setVerificationStatus("");
    setRole("");
    setSort("newest");
    setPage(1);
  }

  function openUserDetails(user: UserRecord) {
    setSelected(user);
    setPendingAction(null);
    setActionNote("");
    setDurationDays("7");
    actionMutation.reset();
    setActionMessage("");
  }

  function closeUserDetails() {
    if (actionSaving) return;
    setIsModerationConfirmationOpen(false);
    setSelected(null);
    setPendingAction(null);
    actionMutation.reset();
    setActionMessage("");
  }

  function chooseAction(action: ModerationAction) {
    setIsModerationConfirmationOpen(false);
    setPendingAction(action);
    setActionNote("");
    setDurationDays("7");
    actionMutation.reset();
    setActionMessage("");
  }

  function applyModerationAction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pendingAction === "BAN_USER" || pendingAction === "REACTIVATE_USER") {
      setIsModerationConfirmationOpen(true);
      return;
    }

    executeModerationAction();
  }

  function executeModerationAction() {
    if (!selected || !pendingAction) return;

    actionMutation.reset();
    setActionMessage("");

    actionMutation.mutate(
      {
        userId: selected.id,
        action: pendingAction,
        note: actionNote.trim(),
        ...(pendingAction === "SUSPEND_USER" && {
          durationDays: Number(durationDays),
        }),
      },
      {
        onSuccess: (data) => {
          setSelected((current) =>
            current?.id === data.user.id
              ? { ...current, ...data.user }
              : current,
          );
          setPendingAction(null);
          setActionNote("");
          setActionMessage(data.message || "Moderation action applied.");
          setIsModerationConfirmationOpen(false);
        },
        onError: () => setIsModerationConfirmationOpen(false),
      },
    );
  }

  const hasFilters = Boolean(
    query || status || verificationStatus || role || sort !== "newest",
  );
  const firstResult = total === 0 ? 0 : (page - 1) * limit + 1;
  const lastResult = Math.min(page * limit, total);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-6 text-slate-950">
      <div className="mx-auto max-w-7xl space-y-5">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">User Management</h1>
          <p className="mt-1 text-sm text-slate-500">
            Find AU Connect accounts and review their current standing.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Matching users</p>
                <p className="text-2xl font-semibold">{total.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Current view</p>
                <p className="text-sm font-semibold text-slate-800">
                  {status ? readable(status) : "All account statuses"}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-amber-600">
                <CircleAlert className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Moderation</p>
                <p className="text-sm font-semibold text-slate-800">
                  Status and warnings visible
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-100">
          <div className="border-b border-slate-200 p-4">
            <form
              onSubmit={submitSearch}
              className="flex flex-col gap-3 xl:flex-row xl:items-center"
            >
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchInput}
                  onChange={(event) => setSearchInput(event.target.value)}
                  placeholder="Search by name, email, or title..."
                  className="h-10 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:flex">
                <select
                  aria-label="Account status"
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value as AccountStatus | "");
                    setPage(1);
                  }}
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">All statuses</option>
                  <option value="ACTIVE">Active</option>
                  <option value="SUSPENDED">Suspended</option>
                  <option value="BANNED">Banned</option>
                </select>
                <select
                  aria-label="Verification status"
                  value={verificationStatus}
                  onChange={(event) => {
                    setVerificationStatus(event.target.value as VerificationStatus | "");
                    setPage(1);
                  }}
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">All verification</option>
                  <option value="APPROVED">Verified</option>
                  <option value="PENDING">Pending</option>
                  <option value="REJECTED">Rejected</option>
                  <option value="UNSUBMITTED">Unsubmitted</option>
                </select>
                <select
                  aria-label="Verification role"
                  value={role}
                  onChange={(event) => {
                    setRole(event.target.value as VerificationRole | "");
                    setPage(1);
                  }}
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">All roles</option>
                  <option value="STUDENT">Student</option>
                  <option value="ALUMNI">Alumni</option>
                  <option value="STAFF">Staff</option>
                  <option value="LECTURER">Lecturer</option>
                </select>
                <select
                  aria-label="Sort users"
                  value={sort}
                  onChange={(event) => {
                    setSort(event.target.value as UserSortOption);
                    setPage(1);
                  }}
                  className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="username">Name A–Z</option>
                </select>
              </div>
              <button
                type="submit"
                className="h-10 rounded-md bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Search
              </button>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  <FilterX className="h-4 w-4" />
                  Clear
                </button>
              )}
            </form>
          </div>

          {error ? (
            <div className="m-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-225 text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-3">User</th>
                    <th className="px-5 py-3">Role & verification</th>
                    <th className="px-5 py-3">Account status</th>
                    <th className="px-5 py-3">Warnings</th>
                    <th className="px-5 py-3">Joined</th>
                    <th className="px-5 py-3 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="h-64 text-center text-slate-500">
                        <LoaderCircle className="mx-auto mb-2 h-5 w-5 animate-spin" />
                        Loading users...
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="h-64 text-center">
                        <UserRound className="mx-auto mb-3 h-8 w-8 text-slate-300" />
                        <p className="font-medium text-slate-700">No users found</p>
                        <p className="mt-1 text-xs text-slate-500">
                          Try changing your search or filters.
                        </p>
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user.id} className="transition hover:bg-slate-50/80">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <UserAvatar user={user} />
                            <div className="min-w-0">
                              <p className="max-w-64 truncate font-semibold text-slate-900">
                                {user.username}
                              </p>
                              <p className="max-w-64 truncate text-xs text-slate-500">
                                {user.email}
                              </p>
                              {user.title && (
                                <p className="mt-0.5 max-w-64 truncate text-xs text-slate-400">
                                  {user.title}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <p className="text-xs font-medium text-slate-700">
                            {user.accountVerificationRole
                              ? readable(user.accountVerificationRole)
                              : "No role"}
                          </p>
                          <span
                            className={`mt-1 inline-flex rounded-full px-2 py-1 text-[11px] font-medium ${verificationStyles[user.accountVerificationStatus]}`}
                          >
                            {readable(user.accountVerificationStatus)}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyles[user.accountStatus]}`}
                          >
                            {readable(user.accountStatus)}
                          </span>
                          {user.accountStatus === "SUSPENDED" && user.suspendedUntil && (
                            <p className="mt-1 text-[11px] text-slate-500">
                              Until {dateFormatter.format(new Date(user.suspendedUntil))}
                            </p>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <span className={user.warningCount > 0 ? "font-semibold text-amber-700" : "text-slate-500"}>
                            {user.warningCount}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-xs text-slate-500">
                          {dateFormatter.format(new Date(user.createdAt))}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() => openUserDetails(user)}
                            className="rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                          >
                            View details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          <footer className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 text-sm lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:gap-5">
              <p>
                Showing {firstResult}–{lastResult} of {total.toLocaleString()} users
              </p>
              <label className="flex items-center gap-2">
                Show
                <select
                  aria-label="Users per page"
                  value={limit}
                  onChange={(event) => {
                    setLimit(Number(event.target.value));
                    setPage(1);
                  }}
                  className="h-9 rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                per page
              </label>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={loading || page <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className="inline-flex h-9 items-center gap-1 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <span className="px-2 text-xs font-medium text-slate-600">
                Page {totalPages === 0 ? 0 : page} of {totalPages}
              </span>
              <button
                type="button"
                disabled={loading || page >= totalPages}
                onClick={() => setPage((current) => current + 1)}
                className="inline-flex h-9 items-center gap-1 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </footer>
        </section>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/30" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeUserDetails();
        }}>
          <aside className="h-full w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <UserAvatar user={selected} large />
                <div className="min-w-0">
                  <h2 className="truncate text-lg font-semibold text-slate-950">
                    {selected.username}
                  </h2>
                  <p className="truncate text-sm text-slate-500">{selected.email}</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close user details"
                onClick={closeUserDetails}
                className="rounded-md p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-slate-200 p-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Status</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{readable(selected.accountStatus)}</p>
              </div>
              <div className="rounded-md border border-slate-200 p-3">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">Warnings</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{selected.warningCount}</p>
              </div>
            </div>

            <dl className="mt-6 space-y-4 border-y border-slate-200 py-5 text-sm">
              <div>
                <dt className="text-xs font-medium text-slate-400">Title</dt>
                <dd className="mt-1 text-slate-800">{selected.title || "Not provided"}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Location</dt>
                <dd className="mt-1 text-slate-800">{selected.location || "Not provided"}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Verification</dt>
                <dd className="mt-1 text-slate-800">
                  {readable(selected.accountVerificationStatus)}
                  {selected.accountVerificationRole
                    ? ` · ${readable(selected.accountVerificationRole)}`
                    : ""}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-slate-400">Joined</dt>
                <dd className="mt-1 text-slate-800">
                  {dateFormatter.format(new Date(selected.createdAt))}
                </dd>
              </div>
              {selected.suspendedUntil && (
                <div>
                  <dt className="text-xs font-medium text-slate-400">Suspended until</dt>
                  <dd className="mt-1 text-slate-800">
                    {dateFormatter.format(new Date(selected.suspendedUntil))}
                  </dd>
                </div>
              )}
            </dl>

            <section className="mt-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Moderation actions
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Every action requires a reason and is saved to moderation history.
                </p>
              </div>

              {actionMessage && (
                <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs text-emerald-700">
                  {actionMessage}
                </div>
              )}

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => chooseAction("WARN_USER")}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-amber-200 bg-amber-50 text-xs font-semibold text-amber-800 transition hover:bg-amber-100"
                >
                  <BellRing className="h-4 w-4" /> Warn
                </button>
                {selected.accountStatus === "ACTIVE" && (
                  <button
                    type="button"
                    onClick={() => chooseAction("SUSPEND_USER")}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-orange-200 bg-orange-50 text-xs font-semibold text-orange-800 transition hover:bg-orange-100"
                  >
                    <Clock3 className="h-4 w-4" /> Suspend
                  </button>
                )}
                {selected.accountStatus !== "BANNED" && (
                  <button
                    type="button"
                    onClick={() => chooseAction("BAN_USER")}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-red-200 bg-red-50 text-xs font-semibold text-red-700 transition hover:bg-red-100"
                  >
                    <Ban className="h-4 w-4" /> Ban
                  </button>
                )}
                {selected.accountStatus !== "ACTIVE" && (
                  <button
                    type="button"
                    onClick={() => chooseAction("REACTIVATE_USER")}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                  >
                    <UserCheck className="h-4 w-4" /> Reactivate
                  </button>
                )}
              </div>

              {pendingAction && (
                <form
                  onSubmit={applyModerationAction}
                  className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {readable(pendingAction)}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {pendingAction === "WARN_USER" &&
                          "The warning count will increase and the user will receive a notice."}
                        {pendingAction === "SUSPEND_USER" &&
                          "The user will be unable to use their account until the suspension expires."}
                        {pendingAction === "BAN_USER" &&
                          "The account will remain inaccessible until an administrator reactivates it."}
                        {pendingAction === "REACTIVATE_USER" &&
                          "The user will regain access to their account."}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label="Cancel moderation action"
                      disabled={actionSaving}
                      onClick={() => {
                        setPendingAction(null);
                        actionMutation.reset();
                      }}
                      className="rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {pendingAction === "SUSPEND_USER" && (
                    <label className="mt-4 block text-xs font-medium text-slate-700">
                      Duration in days
                      <input
                        type="number"
                        min={1}
                        max={365}
                        required
                        value={durationDays}
                        onChange={(event) => setDurationDays(event.target.value)}
                        className="mt-1.5 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </label>
                  )}

                  <label className="mt-4 block text-xs font-medium text-slate-700">
                    Reason
                    <textarea
                      required
                      maxLength={1000}
                      rows={4}
                      value={actionNote}
                      onChange={(event) => setActionNote(event.target.value)}
                      placeholder="Explain why this action is being taken..."
                      className="mt-1.5 w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </label>

                  {actionError && (
                    <p className="mt-3 text-xs font-medium text-red-600">
                      {actionError}
                    </p>
                  )}

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      type="button"
                      disabled={actionSaving}
                      onClick={() => {
                        setPendingAction(null);
                        actionMutation.reset();
                      }}
                      className="h-9 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={actionSaving || !actionNote.trim()}
                      className={`inline-flex h-9 items-center gap-2 rounded-md px-3 text-xs font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 ${
                        pendingAction === "BAN_USER"
                          ? "bg-red-600 hover:bg-red-700"
                          : pendingAction === "REACTIVATE_USER"
                            ? "bg-emerald-600 hover:bg-emerald-700"
                            : "bg-amber-600 hover:bg-amber-700"
                      }`}
                    >
                      {actionSaving && <LoaderCircle className="h-4 w-4 animate-spin" />}
                      Confirm {readable(pendingAction)}
                    </button>
                  </div>
                </form>
              )}
            </section>

          </aside>
        </div>
      )}

      <ConfirmModal
        isOpen={isModerationConfirmationOpen}
        title={pendingAction === "BAN_USER" ? "Ban user?" : "Reactivate user?"}
        description={pendingAction === "BAN_USER"
          ? `${selected?.username ?? "This user"} will lose access to their account until an administrator reactivates it.`
          : `${selected?.username ?? "This user"} will regain access to their account.`}
        confirmLabel={pendingAction === "BAN_USER" ? "Ban user" : "Reactivate user"}
        tone={pendingAction === "BAN_USER" ? "danger" : "warning"}
        isConfirming={actionSaving}
        onConfirm={executeModerationAction}
        onClose={() => setIsModerationConfirmationOpen(false)}
      />
    </div>
  );
}
