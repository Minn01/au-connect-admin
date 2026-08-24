"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Check, CheckCircle2, Loader2, Plus, Search, ShieldCheck, UserCog, X } from "lucide-react";

import { ADMIN_API_PATH, ADMINS_API_PATH, USERS_API_PATH } from "@/constants";
import ConfirmModal from "@/app/components/ConfirmModal";
import { useResolvedAdminMediaUrl } from "@/lib/useResolvedAdminMediaUrl";
import type { UserRecord, UsersResponse } from "@/types/UserManagement";

type AdminRole = "SUPER_ADMIN" | "ADMIN" | "MODERATOR";
type AdminStatus = "PENDING" | "ACTIVE" | "DISABLED";
type Administrator = {
  id: string;
  email: string;
  name: string | null;
  role: AdminRole;
  status: AdminStatus;
  createdAt: string;
  lastLoginAt: string | null;
};
type PendingAdminChange = {
  admin: Administrator;
  change: { role?: AdminRole; status?: AdminStatus };
};

const roleLabels: Record<AdminRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  MODERATOR: "Moderator",
};

function relativeDate(value: string | null) {
  if (!value) return "Never";
  const date = new Date(value);
  const days = Math.floor((Date.now() - date.getTime()) / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  return date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function UserSearchResult({
  user,
  onSelect,
}: {
  user: UserRecord;
  onSelect: (user: UserRecord) => void;
}) {
  const profileImageUrl = useResolvedAdminMediaUrl(user.profilePic);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(profileImageUrl) && !imageFailed;

  return (
    <button
      type="button"
      onClick={() => onSelect(user)}
      className="flex w-full items-center gap-3 border-b border-gray-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-red-50 focus-visible:bg-red-50 focus-visible:outline-none"
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-red-100 text-xs font-bold uppercase text-red-700 ring-1 ring-gray-200">
        {showImage ? (
          <Image
            src={profileImageUrl}
            alt={`${user.username}'s profile`}
            fill
            sizes="40px"
            className="object-cover"
            unoptimized
            onError={() => setImageFailed(true)}
          />
        ) : (
          user.username.charAt(0) || user.email.charAt(0)
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-gray-800">{user.username}</span>
        <span className="block truncate text-xs text-gray-500">{user.email}</span>
      </span>
    </button>
  );
}

export default function AdministratorsPage() {
  const [admins, setAdmins] = useState<Administrator[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [userResults, setUserResults] = useState<UserRecord[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);
  const [searchingUsers, setSearchingUsers] = useState(false);
  const [userSearchError, setUserSearchError] = useState("");
  const [role, setRole] = useState<AdminRole>("MODERATOR");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [pendingAdminChange, setPendingAdminChange] = useState<PendingAdminChange | null>(null);
  const [updating, setUpdating] = useState(false);

  const loadAdmins = useCallback(async () => {
    const response = await fetch(ADMINS_API_PATH, { cache: "no-store" });
    const json = await response.json();
    if (!response.ok) throw new Error(json.error ?? "Could not load administrators");
    setAdmins(json.admins);
  }, []);

  useEffect(() => {
    // Loading is an external synchronization; state updates happen after fetch settles.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadAdmins().catch((reason) => setError(reason.message)).finally(() => setLoading(false));
  }, [loadAdmins]);

  useEffect(() => {
    if (!modalOpen || selectedUser || userQuery.trim().length < 2) return;

    const controller = new AbortController();
    const timeout = window.setTimeout(async () => {
      setSearchingUsers(true);
      setUserSearchError("");
      try {
        const params = new URLSearchParams({
          q: userQuery.trim(),
          page: "1",
          limit: "6",
          sort: "username",
        });
        const response = await fetch(`${USERS_API_PATH}?${params}`, {
          signal: controller.signal,
        });
        const json = (await response.json()) as UsersResponse & { error?: string };
        if (!response.ok) throw new Error(json.error ?? "Could not search users");

        const adminEmails = new Set(admins.map((admin) => admin.email.toLowerCase()));
        setUserResults(
          json.users.filter((user) => !adminEmails.has(user.email.toLowerCase()))
        );
      } catch (reason) {
        if (!controller.signal.aborted) {
          setUserSearchError(reason instanceof Error ? reason.message : "Could not search users");
          setUserResults([]);
        }
      } finally {
        if (!controller.signal.aborted) setSearchingUsers(false);
      }
    }, 300);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [admins, modalOpen, selectedUser, userQuery]);

  function closeAddAdminModal() {
    setModalOpen(false);
    setUserQuery("");
    setUserResults([]);
    setSelectedUser(null);
    setUserSearchError("");
    setRole("MODERATOR");
  }

  async function addAdmin(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");
    const response = await fetch(ADMINS_API_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: selectedUser?.id, role }),
    });
    const json = await response.json();
    setSaving(false);
    if (!response.ok) return setError(json.error ?? "Could not add administrator");

    closeAddAdminModal();
    setMessage(json.invitationSent ? "Administrator added and invitation sent." : "Administrator added. They can now sign in with Microsoft.");
    await loadAdmins();
  }

  async function updateAdmin(id: string, change: { role?: AdminRole; status?: AdminStatus }) {
    setUpdating(true);
    setError("");
    try {
      const response = await fetch(ADMIN_API_PATH(id), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(change),
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error ?? "Could not update administrator");
        setPendingAdminChange(null);
        return;
      }
      setAdmins((current) => current.map((item) => item.id === id ? json.admin : item));
      setMessage("Administrator updated.");
      setPendingAdminChange(null);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Could not update administrator");
      setPendingAdminChange(null);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f8] px-6 py-8 text-gray-900 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-600"><ShieldCheck size={17} /> Access control</div>
            <h1 className="text-3xl font-bold tracking-tight">Administrators</h1>
            <p className="mt-2 text-sm text-gray-500">Manage access to the AU Connect administration portal.</p>
          </div>
          <button onClick={() => { setModalOpen(true); setError(""); }} className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700">
            <Plus size={18} /> Add administrator
          </button>
        </div>

        {message && <div className="mb-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"><CheckCircle2 size={17} />{message}</div>}
        {error && <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div><h2 className="font-semibold">Admin directory</h2><p className="mt-1 text-xs text-gray-400">{admins.length} authorized account{admins.length === 1 ? "" : "s"}</p></div>
            <div className="rounded-lg bg-red-50 p-2 text-red-600"><UserCog size={20} /></div>
          </div>

          {loading ? (
            <div className="flex h-64 items-center justify-center text-gray-400"><Loader2 className="mr-2 animate-spin" size={20} /> Loading administrators</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400"><tr><th className="px-6 py-4 font-semibold">Administrator</th><th className="px-6 py-4 font-semibold">Role</th><th className="px-6 py-4 font-semibold">Status</th><th className="px-6 py-4 font-semibold">Last login</th><th className="px-6 py-4 text-right font-semibold">Access</th></tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {admins.map((admin) => (
                    <tr key={admin.id} className="transition hover:bg-red-50/30">
                      <td className="px-6 py-5"><div className="font-semibold text-gray-800">{admin.name ?? "Invitation pending"}</div><div className="mt-1 text-xs text-gray-400">{admin.email}</div></td>
                      <td className="px-6 py-5"><select aria-label={`Role for ${admin.email}`} value={admin.role} onChange={(event) => setPendingAdminChange({ admin, change: { role: event.target.value as AdminRole } })} className="cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">{Object.entries(roleLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></td>
                      <td className="px-6 py-5"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${admin.status === "ACTIVE" ? "bg-green-50 text-green-700" : admin.status === "PENDING" ? "bg-amber-50 text-amber-700" : "bg-gray-100 text-gray-500"}`}>{admin.status.charAt(0) + admin.status.slice(1).toLowerCase()}</span></td>
                      <td className="px-6 py-5 text-gray-500">{relativeDate(admin.lastLoginAt)}</td>
                      <td className="px-6 py-5 text-right">{admin.status !== "PENDING" && <button onClick={() => { const nextStatus = admin.status === "DISABLED" ? "ACTIVE" : "DISABLED"; if (nextStatus === "ACTIVE") updateAdmin(admin.id, { status: nextStatus }); else setPendingAdminChange({ admin, change: { status: nextStatus } }); }} className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${admin.status === "DISABLED" ? "border-green-200 text-green-700 hover:bg-green-50" : "border-gray-200 text-gray-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"}`}>{admin.status === "DISABLED" ? "Reactivate" : "Disable"}</button>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!admins.length && <div className="py-20 text-center text-sm text-gray-400">No administrators found.</div>}
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/45 p-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) closeAddAdminModal(); }}>
          <form onSubmit={addAdmin} className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl">
            <div className="flex items-start justify-between"><div><h2 className="text-xl font-bold">Add administrator</h2><p className="mt-1 text-sm text-gray-500">Choose an existing AU Connect user.</p></div><button type="button" onClick={closeAddAdminModal} aria-label="Close" className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"><X size={18} /></button></div>
            <label htmlFor="admin-user-search" className="mt-7 block text-sm font-semibold">Search users</label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                id="admin-user-search"
                type="search"
                autoComplete="off"
                value={selectedUser ? `${selectedUser.username} · ${selectedUser.email}` : userQuery}
                onChange={(event) => {
                  setSelectedUser(null);
                  setUserQuery(event.target.value);
                  setUserResults([]);
                }}
                placeholder="Search by name or email"
                className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-10 text-sm outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-50"
              />
              {(searchingUsers || selectedUser) && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  {searchingUsers ? <Loader2 className="h-4 w-4 animate-spin text-gray-400" /> : <Check className="h-4 w-4 text-green-600" />}
                </span>
              )}
            </div>

            {!selectedUser && userQuery.trim().length >= 2 && (
              <div className="mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                {userResults.map((user) => (
                  <UserSearchResult
                    key={user.id}
                    user={user}
                    onSelect={(selected) => {
                      setSelectedUser(selected);
                      setUserQuery("");
                      setUserResults([]);
                    }}
                  />
                ))}
                {!searchingUsers && !userSearchError && userResults.length === 0 && (
                  <p className="px-4 py-4 text-center text-xs text-gray-500">No eligible users found.</p>
                )}
                {userSearchError && <p className="px-4 py-3 text-xs text-red-600">{userSearchError}</p>}
              </div>
            )}
            {!selectedUser && userQuery.trim().length < 2 && (
              <p className="mt-2 text-xs text-gray-400">Enter at least 2 characters to search.</p>
            )}
            <label className="mt-5 block text-sm font-semibold">Role</label>
            <select value={role} onChange={(event) => setRole(event.target.value as AdminRole)} className="mt-2 w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-red-400 focus:ring-4 focus:ring-red-50">{Object.entries(roleLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs leading-5 text-red-700">They will sign in using their Assumption University Microsoft account. No password is created here.</p>
            <div className="mt-7 flex justify-end gap-3"><button type="button" onClick={closeAddAdminModal} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-500 hover:bg-gray-100">Cancel</button><button disabled={saving || !selectedUser} className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60">{saving && <Loader2 size={16} className="animate-spin" />} Add administrator</button></div>
          </form>
        </div>
      )}

      <ConfirmModal
        isOpen={pendingAdminChange !== null}
        title={pendingAdminChange?.change.status === "DISABLED" ? "Disable administrator?" : "Change administrator role?"}
        description={pendingAdminChange?.change.status === "DISABLED"
          ? `${pendingAdminChange.admin.email} will immediately lose access to the admin portal.`
          : pendingAdminChange?.change.role
            ? `${pendingAdminChange.admin.email} will change from ${roleLabels[pendingAdminChange.admin.role]} to ${roleLabels[pendingAdminChange.change.role]}.`
            : "This administrator's access will change."}
        confirmLabel={pendingAdminChange?.change.status === "DISABLED" ? "Disable" : "Change role"}
        tone={pendingAdminChange?.change.status === "DISABLED" ? "danger" : "warning"}
        isConfirming={updating}
        onConfirm={() => {
          if (pendingAdminChange) updateAdmin(pendingAdminChange.admin.id, pendingAdminChange.change);
        }}
        onClose={() => setPendingAdminChange(null)}
      />
    </div>
  );
}
