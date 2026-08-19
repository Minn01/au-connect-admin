"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  FileCheck2,
  History,
  LoaderCircle,
  Megaphone,
  ShieldAlert,
  Users,
  UsersRound,
} from "lucide-react";

import {
  REPORTS_PAGE_PATH,
  USER_MANAGEMENT_PAGE_PATH,
  USER_VERIFICATION_PAGE_PATH,
} from "@/constants";
import type { HistoryResponse, HistoryType } from "@/types/History";
import { useHistoryQuery } from "./utils/historyFetchFunction";

const PAGE_SIZE = 12;

const emptySummary: HistoryResponse["summary"] = {
  totalUsers: 0,
  pendingReports: 0,
  pendingVerifications: 0,
  restrictedUsers: 0,
};

const typeDetails: Record<
  HistoryType,
  { label: string; icon: typeof History; tone: string }
> = {
  MODERATION: {
    label: "Moderation",
    icon: ShieldAlert,
    tone: "bg-red-50 text-red-600",
  },
  VERIFICATION: {
    label: "Verification",
    icon: FileCheck2,
    tone: "bg-blue-50 text-blue-600",
  },
  ANNOUNCEMENT: {
    label: "Announcement",
    icon: Megaphone,
    tone: "bg-violet-50 text-violet-600",
  },
  COMMUNITY: {
    label: "Community",
    icon: UsersRound,
    tone: "bg-emerald-50 text-emerald-600",
  },
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function readable(value: string) {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState<HistoryType | "">("");
  const historyQuery = useHistoryQuery({ page, limit: PAGE_SIZE, type });
  const data = historyQuery.data;
  const loading = historyQuery.isLoading;
  const error =
    historyQuery.error instanceof Error ? historyQuery.error.message : "";

  const summary = data?.summary ?? emptySummary;
  const pagination = data?.pagination;
  const start = pagination && pagination.total > 0
    ? (pagination.page - 1) * pagination.limit + 1
    : 0;
  const end = pagination
    ? Math.min(pagination.page * pagination.limit, pagination.total)
    : 0;

  const summaryCards = [
    {
      label: "Total users",
      value: summary.totalUsers,
      note: "All AU Connect accounts",
      href: USER_MANAGEMENT_PAGE_PATH,
      icon: Users,
      tone: "bg-blue-50 text-blue-600",
    },
    {
      label: "Pending reports",
      value: summary.pendingReports,
      note: "Waiting for review",
      href: REPORTS_PAGE_PATH,
      icon: CircleAlert,
      tone: "bg-red-50 text-red-600",
    },
    {
      label: "Pending verification",
      value: summary.pendingVerifications,
      note: "Requests requiring action",
      href: USER_VERIFICATION_PAGE_PATH,
      icon: FileCheck2,
      tone: "bg-amber-50 text-amber-600",
    },
    {
      label: "Restricted users",
      value: summary.restrictedUsers,
      note: "Suspended or banned",
      href: USER_MANAGEMENT_PAGE_PATH,
      icon: ShieldAlert,
      tone: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-6 text-slate-950">
      <div className="mx-auto max-w-7xl space-y-5">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Review what needs attention and browse recorded admin history.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.label}
                href={card.href}
                className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{card.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">
                      {loading ? "—" : card.value.toLocaleString()}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{card.note}</p>
                  </div>
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${card.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-100">
          <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <History className="h-5 w-5 text-slate-500" />
                <h2 className="font-semibold text-slate-900">History</h2>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Existing moderation, verification, announcement, and community records.
              </p>
            </div>
            <select
              aria-label="History type"
              value={type}
              onChange={(event) => {
                setType(event.target.value as HistoryType | "");
                setPage(1);
              }}
              className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All history</option>
              <option value="MODERATION">Moderation</option>
              <option value="VERIFICATION">Verification</option>
              <option value="ANNOUNCEMENT">Announcements</option>
              <option value="COMMUNITY">Communities</option>
            </select>
          </div>

          {error ? (
            <div className="m-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : loading ? (
            <div className="grid h-80 place-items-center text-sm text-slate-500">
              <div className="text-center">
                <LoaderCircle className="mx-auto mb-2 h-5 w-5 animate-spin" />
                Loading history...
              </div>
            </div>
          ) : !data?.items.length ? (
            <div className="grid h-80 place-items-center text-center">
              <div>
                <BellRing className="mx-auto mb-3 h-8 w-8 text-slate-300" />
                <p className="text-sm font-medium text-slate-700">No history found</p>
                <p className="mt-1 text-xs text-slate-500">
                  Recorded activity will appear here.
                </p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {data.items.map((item) => {
                const details = typeDetails[item.type];
                const Icon = details.icon;

                return (
                  <article key={item.id} className="flex gap-4 px-5 py-4 transition hover:bg-slate-50/80">
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${details.tone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                              {details.label}
                            </span>
                            <span className="text-xs font-medium text-slate-500">
                              {readable(item.action)}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm font-medium text-slate-900">
                            {item.description}
                          </p>
                        </div>
                        <time className="shrink-0 text-xs text-slate-400">
                          {dateFormatter.format(new Date(item.createdAt))}
                        </time>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <span>By {item.actor || "Administrator"}</span>
                        <Link
                          href={item.target.href}
                          className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          View {item.target.label}
                        </Link>
                      </div>
                      {item.note && (
                        <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <footer className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {start}–{end} of {pagination?.total.toLocaleString() ?? 0} records
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={loading || !pagination?.hasPreviousPage}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                className="inline-flex h-9 items-center gap-1 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <span className="px-2 text-xs font-medium text-slate-600">
                Page {pagination?.totalPages ? page : 0} of {pagination?.totalPages ?? 0}
              </span>
              <button
                type="button"
                disabled={loading || !pagination?.hasNextPage}
                onClick={() => setPage((current) => current + 1)}
                className="inline-flex h-9 items-center gap-1 rounded-md border border-slate-200 px-3 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
