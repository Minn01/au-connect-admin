"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Archive,
  Check,
  CircleUserRound,
  Loader2,
  Plus,
  Search,
  Users,
  X,
} from "lucide-react";

import {
  COMMUNITIES_API_PATH,
  COMMUNITY_API_PATH,
  USERS_API_PATH,
} from "@/constants";

type CommunityStatus = "ACTIVE" | "ARCHIVED";

type ManagerUser = {
  id: string;
  username: string;
  email: string;
  title: string | null;
  profilePic: string | null;
};

type CommunityManager = {
  id: string;
  createdAt: string;
  user: ManagerUser;
};

type Community = {
  id: string;
  name: string;
  slug: string;
  about: string | null;
  location: string | null;
  profilePic: string | null;
  coverPhoto: string | null;
  status: CommunityStatus;
  createdAt: string;
  updatedAt: string;
  managers: CommunityManager[];
  _count: {
    managers: number;
    followers: number;
    posts: number;
  };
};

type CommunityForm = {
  name: string;
  slug: string;
  about: string;
  location: string;
  status: CommunityStatus;
  managerIds: string[];
};

type CommunitiesResponse = {
  communities?: Community[];
  error?: string;
};

type CommunityResponse = {
  community?: Community;
  error?: string;
};

type UsersResponse = {
  users?: ManagerUser[];
  error?: string;
};

const emptyForm: CommunityForm = {
  name: "",
  slug: "",
  about: "",
  location: "",
  status: "ACTIVE",
  managerIds: [],
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function slugPreview(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function managerLabel(user: ManagerUser) {
  return user.title ? `${user.email} · ${user.title}` : user.email;
}

export default function CommunityPage() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [form, setForm] = useState<CommunityForm>(emptyForm);
  const [editingCommunity, setEditingCommunity] = useState<Community | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [communitySearch, setCommunitySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | CommunityStatus>(
    "ALL",
  );
  const [managerSearch, setManagerSearch] = useState("");
  const [managerResults, setManagerResults] = useState<ManagerUser[]>([]);
  const [selectedManagers, setSelectedManagers] = useState<ManagerUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchingManagers, setSearchingManagers] = useState(false);
  const [message, setMessage] = useState("");

  const stats = useMemo(
    () => ({
      total: communities.length,
      active: communities.filter((item) => item.status === "ACTIVE").length,
      archived: communities.filter((item) => item.status === "ARCHIVED").length,
    }),
    [communities],
  );

  const filteredCommunities = useMemo(() => {
    const normalizedQuery = communitySearch.trim().toLowerCase();

    return communities.filter((community) => {
      const matchesStatus =
        statusFilter === "ALL" || community.status === statusFilter;
      const matchesQuery =
        !normalizedQuery ||
        community.name.toLowerCase().includes(normalizedQuery) ||
        community.slug.toLowerCase().includes(normalizedQuery) ||
        (community.about ?? "").toLowerCase().includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });
  }, [communities, communitySearch, statusFilter]);

  const generatedSlug = useMemo(() => slugPreview(form.name), [form.name]);

  async function loadCommunities() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(COMMUNITIES_API_PATH);
      const json = (await res.json()) as CommunitiesResponse;

      if (!res.ok) {
        throw new Error(json.error || "Could not load communities");
      }

      setCommunities(json.communities ?? []);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Could not load communities.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let cancelled = false;

    fetch(COMMUNITIES_API_PATH)
      .then((res) => res.json())
      .then((json: CommunitiesResponse) => {
        if (!cancelled) {
          setCommunities(json.communities ?? []);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setMessage("Could not load communities.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const query = managerSearch.trim();

    if (!isModalOpen || query.length < 2) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      fetch(`${USERS_API_PATH}?search=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((json: UsersResponse) => {
          if (!cancelled) {
            setManagerResults(json.users ?? []);
          }
        })
        .catch(() => {
          if (!cancelled) {
            setManagerResults([]);
          }
        })
        .finally(() => {
          if (!cancelled) {
            setSearchingManagers(false);
          }
        });
    }, 250);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [isModalOpen, managerSearch]);

  function resetForm() {
    setForm(emptyForm);
    setEditingCommunity(null);
    setSelectedManagers([]);
    setManagerSearch("");
    setManagerResults([]);
  }

  function openCreateModal() {
    resetForm();
    setMessage("");
    setIsModalOpen(true);
  }

  function openEditModal(community: Community) {
    setEditingCommunity(community);
    setSelectedManagers(community.managers.map((manager) => manager.user));
    setForm({
      name: community.name,
      slug: community.slug,
      about: community.about ?? "",
      location: community.location ?? "",
      status: community.status,
      managerIds: community.managers.map((manager) => manager.user.id),
    });
    setManagerSearch("");
    setManagerResults([]);
    setMessage("");
    setIsModalOpen(true);
  }

  function closeModal() {
    resetForm();
    setIsModalOpen(false);
  }

  function updateForm<K extends keyof CommunityForm>(
    key: K,
    value: CommunityForm[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleManagerSearchChange(value: string) {
    setManagerSearch(value);

    if (value.trim().length < 2) {
      setManagerResults([]);
      setSearchingManagers(false);
    } else {
      setSearchingManagers(true);
    }
  }

  function addManager(user: ManagerUser) {
    if (form.managerIds.includes(user.id)) return;

    setSelectedManagers((current) => [...current, user]);
    setForm((current) => ({
      ...current,
      managerIds: [...current.managerIds, user.id],
    }));
  }

  function removeManager(userId: string) {
    setSelectedManagers((current) =>
      current.filter((user) => user.id !== userId),
    );
    setForm((current) => ({
      ...current,
      managerIds: current.managerIds.filter((id) => id !== userId),
    }));
  }

  async function saveCommunity() {
    setSaving(true);
    setMessage("");

    try {
      const payload = {
        name: form.name,
        slug: form.slug || undefined,
        about: form.about,
        location: form.location,
        status: form.status,
        managerIds: form.managerIds,
      };

      const res = await fetch(
        editingCommunity
          ? COMMUNITY_API_PATH(editingCommunity.id)
          : COMMUNITIES_API_PATH,
        {
          method: editingCommunity ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const json = (await res.json()) as CommunityResponse;

      if (!res.ok) {
        throw new Error(json.error || "Could not save community");
      }

      setMessage(
        editingCommunity ? "Community updated." : "Community created.",
      );
      closeModal();
      await loadCommunities();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Could not save community.",
      );
    } finally {
      setSaving(false);
    }
  }

  async function setCommunityStatus(
    community: Community,
    status: CommunityStatus,
  ) {
    setMessage("");

    try {
      const res = await fetch(COMMUNITY_API_PATH(community.id), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: community.name,
          slug: community.slug,
          about: community.about,
          location: community.location,
          status,
          managerIds: community.managers.map((manager) => manager.user.id),
        }),
      });
      const json = (await res.json()) as CommunityResponse;

      if (!res.ok) {
        throw new Error(json.error || "Could not update status");
      }

      setMessage(status === "ACTIVE" ? "Community restored." : "Community archived.");
      await loadCommunities();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Could not update community.",
      );
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-6 text-slate-950">
      <div className="mx-auto max-w-7xl space-y-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-normal text-slate-950">
              Community Management
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Create pages and assign the users who can operate them.
            </p>
          </div>

          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Create Community
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Total Communities
                </p>
                <p className="text-2xl font-semibold">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Active</p>
                <p className="text-2xl font-semibold">{stats.active}</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                <Archive className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">Archived</p>
                <p className="text-2xl font-semibold">{stats.archived}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={communitySearch}
              onChange={(event) => setCommunitySearch(event.target.value)}
              placeholder="Search communities..."
              className="h-10 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as "ALL" | CommunityStatus)
            }
            className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:w-52"
          >
            <option value="ALL">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>

        {message && (
          <div className="rounded-md border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {message}
          </div>
        )}

        {loading ? (
          <div className="flex h-64 items-center justify-center rounded-md border border-slate-200 bg-white">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
          </div>
        ) : filteredCommunities.length ? (
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredCommunities.map((community) => (
              <article
                key={community.id}
                className="rounded-md border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-lg font-semibold text-slate-950">
                        {community.name}
                      </h2>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          community.status === "ACTIVE"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        {community.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-500">
                      /community/{community.slug}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => openEditModal(community)}
                      className="h-9 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCommunityStatus(
                          community,
                          community.status === "ACTIVE" ? "ARCHIVED" : "ACTIVE",
                        )
                      }
                      className={`h-9 rounded-md px-3 text-sm font-semibold text-white transition ${
                        community.status === "ACTIVE"
                          ? "bg-orange-600 hover:bg-orange-700"
                          : "bg-emerald-600 hover:bg-emerald-700"
                      }`}
                    >
                      {community.status === "ACTIVE" ? "Archive" : "Restore"}
                    </button>
                  </div>
                </div>

                {community.about && (
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
                    {community.about}
                  </p>
                )}

                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Managers</p>
                    <p className="mt-1 font-semibold">{community._count.managers}</p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Followers</p>
                    <p className="mt-1 font-semibold">{community._count.followers}</p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Posts</p>
                    <p className="mt-1 font-semibold">{community._count.posts}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {community.managers.length ? (
                    community.managers.slice(0, 5).map((manager) => (
                      <span
                        key={manager.id}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        <CircleUserRound className="h-3.5 w-3.5" />
                        {manager.user.username}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-slate-400">
                      No managers assigned
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-slate-200 bg-white p-10 text-center">
            <p className="text-sm font-medium text-slate-600">
              No communities found.
            </p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 px-4 py-6">
          <div
            role="dialog"
            aria-modal="true"
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-md bg-white p-5 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {editingCommunity ? "Edit Community" : "Create Community"}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Assign managers who can act as this community page.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-md p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">
                  Community name
                </span>
                <input
                  value={form.name}
                  onChange={(event) => updateForm("name", event.target.value)}
                  className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">Slug</span>
                <input
                  value={form.slug}
                  onChange={(event) => updateForm("slug", event.target.value)}
                  placeholder={generatedSlug || "auto-generated"}
                  className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">
                  Location
                </span>
                <input
                  value={form.location}
                  onChange={(event) =>
                    updateForm("location", event.target.value)
                  }
                  className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="space-y-1.5">
                <span className="text-sm font-medium text-slate-700">
                  Status
                </span>
                <select
                  value={form.status}
                  onChange={(event) =>
                    updateForm("status", event.target.value as CommunityStatus)
                  }
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="ACTIVE">Active</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </label>

              <label className="space-y-1.5 md:col-span-2">
                <span className="text-sm font-medium text-slate-700">About</span>
                <textarea
                  value={form.about}
                  onChange={(event) => updateForm("about", event.target.value)}
                  rows={4}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>

            <div className="mt-5 rounded-md border border-slate-200 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-950">
                    Community managers
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">
                    Every assigned manager has full community permissions.
                  </p>
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={managerSearch}
                    onChange={(event) =>
                      handleManagerSearchChange(event.target.value)
                    }
                    placeholder="Search users..."
                    className="h-10 w-full rounded-md border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {managerSearch.trim().length >= 2 && (
                <div className="mt-3 rounded-md border border-slate-200">
                  {searchingManagers ? (
                    <div className="flex h-16 items-center justify-center">
                      <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                    </div>
                  ) : managerResults.length ? (
                    <div className="divide-y divide-slate-100">
                      {managerResults.map((user) => {
                        const selected = form.managerIds.includes(user.id);

                        return (
                          <button
                            key={user.id}
                            type="button"
                            onClick={() => addManager(user)}
                            disabled={selected}
                            className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left transition hover:bg-slate-50 disabled:cursor-default disabled:bg-white"
                          >
                            <div className="flex min-w-0 items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                                {initials(user.username) || "U"}
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-slate-900">
                                  {user.username}
                                </p>
                                <p className="truncate text-xs text-slate-500">
                                  {managerLabel(user)}
                                </p>
                              </div>
                            </div>
                            {selected && (
                              <span className="text-xs font-semibold text-emerald-600">
                                Added
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="px-3 py-4 text-sm text-slate-500">
                      No users found.
                    </p>
                  )}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedManagers.length ? (
                  selectedManagers.map((user) => (
                    <span
                      key={user.id}
                      className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                    >
                      {user.username}
                      <button
                        type="button"
                        onClick={() => removeManager(user.id)}
                        className="rounded-full p-0.5 hover:bg-blue-100"
                        aria-label={`Remove ${user.username}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">
                    No managers selected.
                  </span>
                )}
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={closeModal}
                className="h-10 rounded-md border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveCommunity}
                disabled={saving || !form.name.trim()}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                {editingCommunity ? "Save Changes" : "Create Community"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
