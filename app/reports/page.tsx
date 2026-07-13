"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  EllipsisVertical,
  FileText,
  Flag,
  Search,
  Users,
} from "lucide-react";

import DetailPanel from "./components/DetailPanel";
import { Report } from "@/types/Report";
import { useReportsQuery } from "./utils/reportsFetchFunction";

// Mock report records used to populate the moderation table and detail panel.
// const reports: Report[] = [
//   {
//     id: 1,
//     kind: "POST",
//     title: "Standard post with all media attached",
//     author: "Si Thu Naung",
//     subtitle: "",
//     reasons: ["Harassment", "Spam", "+1"],
//     reports: 5,
//     status: "Pending",
//     reportedAt: "2 hours ago",
//     date: "Mar 11, 2026  •  10:30 AM",
//     visual: "rider",
//   },
//   {
//     id: 2,
//     kind: "USER",
//     title: "@ayechan.moe",
//     author: "",
//     subtitle: "User profile and recent activity",
//     reasons: ["Harassment", "Offensive content", "+1"],
//     reports: 3,
//     status: "Pending",
//     reportedAt: "5 hours ago",
//     date: "Mar 10, 2026  •  09:15 AM",
//     visual: "portrait",
//   },
//   {
//     id: 3,
//     kind: "POST",
//     title: "Join this link to get free money!!!",
//     author: "Zaw Lin Htet",
//     subtitle: "",
//     reasons: ["Spam", "Fraud"],
//     reports: 2,
//     status: "Pending",
//     reportedAt: "1 day ago",
//     date: "Mar 10, 2026  •  08:40 AM",
//     visual: "car",
//   },
//   {
//     id: 4,
//     kind: "POST (POLL)",
//     title: "Which framework do you prefer?",
//     author: "Thin Zar Wint",
//     subtitle: "",
//     reasons: ["Inappropriate", "Off-topic"],
//     reports: 1,
//     status: "Pending",
//     reportedAt: "1 day ago",
//     date: "Mar 9, 2026  •  07:20 PM",
//     visual: "poll",
//   },
//   {
//     id: 5,
//     kind: "USER",
//     title: "@soe.min",
//     author: "",
//     subtitle: "Suspicious activity detected",
//     reasons: ["Spam", "Inappropriate"],
//     reports: 4,
//     status: "Under Review",
//     reportedAt: "2 days ago",
//     date: "Mar 9, 2026  •  06:05 PM",
//     visual: "person",
//   },
//   {
//     id: 6,
//     kind: "POST",
//     title: "Check out my income proof 🔥",
//     author: "Myo Thant",
//     subtitle: "",
//     reasons: ["Spam", "Misleading"],
//     reports: 6,
//     status: "Pending",
//     reportedAt: "2 days ago",
//     date: "Mar 9, 2026  •  03:12 PM",
//     visual: "document",
//   },
// ];

// Summary cards displayed across the top of the page.
const metrics = [
  {
    label: "Pending Review",
    value: 36,
    note: "Needs your action",
    icon: Clock3,
    tone: "orange",
  },
  {
    label: "Reported Posts",
    value: 48,
    note: "+5 from yesterday",
    icon: FileText,
    tone: "red",
  },
  {
    label: "Reported Users",
    value: 28,
    note: "+3 from yesterday",
    icon: Users,
    tone: "purple",
  },
  {
    label: "Resolved",
    value: 89,
    note: "Total resolved",
    icon: CheckCircle2,
    tone: "green",
  },
  {
    label: "All Reports",
    value: 165,
    note: "Total reports",
    icon: Flag,
    tone: "blue",
  },
];

// Reusable placeholder thumbnail for each type of reported content.
export function Thumb({
  type,
  large = false,
}: {
  type: Report["targetType"];
  large?: boolean;
}) {
  const iconClass = large ? "h-8 w-8" : "h-6 w-6";
  const common = `relative shrink-0 overflow-hidden border border-slate-200 ${
    large ? "h-28 w-full rounded-md" : "h-16 w-16 rounded-md"
  }`;

  if (type === "POST") {
    return (
      <div
        className={`${common} grid place-items-center bg-slate-50 text-slate-500`}
      >
        <FileText className={iconClass} />
      </div>
    );
  }

  return (
    <div
      className={`${common} grid place-items-center ${
        "bg-linear-to-br from-sky-100 to-rose-100"
      } text-slate-700`}
    >
      <CircleUserRound className={large ? "h-12 w-12" : "h-9 w-9"} />
    </div>
  );
}

export default function ReportsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [reason, setReason] = useState("");
  const [reporter, setReporter] = useState("");
  const [sort, setSort] = useState("newest");

  const {
    data: reportsData,
    isLoading,
    isError,
    error,
  } = useReportsQuery({
    page,
    limit,
    query,
    type,
    status,
    reason,
    reporter,
    sort,
  });
  const reports = reportsData?.data ?? [];
  const pagination = reportsData?.pagination;

  // Page-level UI state for tabs, searching, row details, and bulk selection.
  const [selected, setSelected] = useState<Report | null>(null);
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (id: string) => {
    setChecked((value) =>
      value.includes(id) ? value.filter((item) => item !== id) : [...value, id],
    );
  };

  const startNewFilter = () => {
    setPage(1);
    setChecked([]);
    setSelected(null);
  };

  const handleTypeChange = (newType: string) => {
    setType(newType);
    startNewFilter();
  };

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    startNewFilter();
  };

  const totalPages = pagination?.totalPages ?? 0;
  const numberOfVisiblePages = Math.min(totalPages, 5);
  const firstVisiblePage = Math.max(
    1,
    Math.min(page - 2, totalPages - numberOfVisiblePages + 1),
  );
  const visiblePages = Array.from(
    { length: numberOfVisiblePages },
    (_, index) => firstVisiblePage + index,
  );

  return (
    <div className="reports-workspace flex h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden px-5 py-5 lg:px-7 2xl:px-8">
        {/* Page title and admin account controls */}
        <header className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Reports &amp; Moderation
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Review and take action on reported content and users.
            </p>
          </div>
          {/* <div className="flex items-center gap-4">
            <button
              title="Notifications"
              className="relative rounded-full p-2 text-slate-700 hover:bg-white"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-red-600 text-[9px] font-bold text-white">
                6
              </span>
            </button>
            <div className="hidden h-7 w-px bg-slate-200 sm:block" />
            <button className="hidden items-center gap-2 text-xs font-medium sm:flex">
              <span className="text-xl">🇬🇧</span> English{" "}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="hidden h-7 w-px bg-slate-200 md:block" />
            <button className="hidden items-center gap-2 md:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-200">
                <CircleUserRound className="h-6 w-6" />
              </span>
              <span className="text-left">
                <strong className="block text-xs">Moni Roy</strong>
                <span className="text-[10px] text-slate-500">Admin</span>
              </span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div> */}
        </header>

        {/* Moderation summary metrics */}
        <section className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-5">
          {metrics.map(({ label, value, note, icon: Icon, tone }) => (
            <article
              key={label}
              className="flex min-h-24 items-center gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-[0_2px_10px_rgba(15,23,42,.025)]"
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-${tone}-50 text-${tone}-600`}
                style={{
                  backgroundColor: (
                    {
                      orange: "#fff4e6",
                      red: "#fff0f1",
                      purple: "#f3f0ff",
                      green: "#edf9f0",
                      blue: "#eef5ff",
                    } as Record<string, string>
                  )[tone],
                  color: (
                    {
                      orange: "#f97316",
                      red: "#ef4444",
                      purple: "#5b45ff",
                      green: "#16a34a",
                      blue: "#1677ff",
                    } as Record<string, string>
                  )[tone],
                }}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-slate-700">
                  {label}
                </p>
                <p className="mt-1 textxl font-bold">{value}</p>
                <p className="mt-1 text-[10px] text-slate-500">{note}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Report type tabs */}
        <div className="mt-6 flex gap-2 border-b border-slate-200 pb-2">
          {[
            { label: "All Reports", value: "", count: 165 },
            { label: "Posts", value: "POST", count: 102 },
            { label: "Users", value: "USER", count: 63 },
          ].map((tab) => (
            <button
              key={tab.label}
              onClick={() => handleTypeChange(tab.value)}
              className={`rounded-md px-4 py-2 text-xs font-semibold ${
                type === tab.value
                  ? "border border-blue-600 bg-blue-50 text-blue-600"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Search and filter toolbar */}
        <div className="mt-5 flex flex-wrap gap-2">
          <label className="flex h-10 min-w-64 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-3">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
              placeholder="Search reports by title, username, or content..."
            />
          </label>
          <select
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
              startNewFilter();
            }}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700"
            aria-label="Filter by status"
          >
            <option value="">Status: All</option>
            <option value="PENDING">Pending</option>
            <option value="REVIEWED">Reviewed</option>
            <option value="DISMISSED">Dismissed</option>
            <option value="ACTION_TAKEN">Action Taken</option>
          </select>
          <select
            value={reason}
            onChange={(event) => {
              setReason(event.target.value);
              startNewFilter();
            }}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700"
            aria-label="Filter by reason"
          >
            <option value="">Reason: All</option>
            <option value="SPAM">Spam</option>
            <option value="HARASSMENT">Harassment</option>
            <option value="HATE_SPEECH">Hate Speech</option>
            <option value="VIOLENCE">Violence</option>
            <option value="NUDITY">Nudity</option>
            <option value="SCAM">Scam</option>
            <option value="MISINFORMATION">Misinformation</option>
            <option value="FAKE_ACCOUNT">Fake Account</option>
            <option value="IMPERSONATION">Impersonation</option>
            <option value="OTHER">Other</option>
          </select>
          <input
            value={reporter}
            onChange={(event) => {
              setReporter(event.target.value);
              startNewFilter();
            }}
            className="h-10 w-36 rounded-md border border-slate-200 bg-white px-3 text-xs outline-none"
            placeholder="Reporter username"
            aria-label="Filter by reporter"
          />
          <select
            value={sort}
            onChange={(event) => {
              setSort(event.target.value);
              startNewFilter();
            }}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700"
            aria-label="Sort reports"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="most-reported">Most Reported</option>
          </select>
        </div>

        {/* Reports table; selecting a row opens its detail panel */}
        <div className="mt-5 overflow-hidden rounded-md border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-225 border-collapse text-left text-[11px]">
              <thead className="bg-slate-50/80 text-slate-600">
                <tr>
                  <th className="w-12 px-4 py-3">
                    <input
                      type="checkbox"
                      aria-label="Select all"
                      checked={reports.length > 0 && checked.length === reports.length}
                      onChange={(event) =>
                        setChecked(
                          event.target.checked
                            ? reports.map(({ id }) => id)
                            : [],
                        )
                      }
                    />
                  </th>
                  <th className="px-2 py-3">Content</th>
                  <th className="px-2 py-3">Type</th>
                  <th className="px-2 py-3">Reasons</th>
                  <th className="px-2 py-3">Reports</th>
                  <th className="px-2 py-3">Status</th>
                  <th className="px-2 py-3">Reported At</th>
                  <th className="px-3 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr
                    key={report.id}
                    onClick={() => setSelected(report)}
                    className={`cursor-pointer border-t border-slate-200 hover:bg-blue-50/30 ${
                      selected?.id === report.id ? "bg-blue-50/20" : ""
                    }`}
                  >
                    <td
                      className="px-4 py-3"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        aria-label={`Select ${report.title}`}
                        checked={checked.includes(report.id)}
                        onChange={() => toggle(report.id)}
                      />
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex items-center gap-3">
                        <Thumb type={report.targetType} />
                        <div className="max-w-52">
                          <p className="font-semibold leading-4 text-slate-900">
                            {report.title}
                          </p>
                          {report.reportedUsername && (
                            <p className="mt-1 font-medium">
                              @{report.reportedUsername}
                            </p>
                          )}
                          <p className="mt-1 text-[10px] text-slate-500">
                            {new Date(report.latestReportedAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3">
                      <span className="rounded bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-600">
                        {report.targetType}
                      </span>
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex max-w-48 flex-wrap gap-1">
                        {report.reasons.map((reason, index) => (
                          <span
                            key={reason}
                            className={`rounded px-2 py-1 text-[9px] ${
                              reason === "+1"
                                ? "bg-slate-100 text-slate-600"
                                : index === 0
                                  ? "bg-red-50 text-red-600"
                                  : "bg-orange-50 text-orange-600"
                            }`}
                          >
                            {reason}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">{report.reportCount}</td>
                    <td className="px-2 py-3">
                      <span
                        className={`rounded px-2.5 py-1 text-[9px] font-medium ${
                          report.latestStatus === "PENDING"
                            ? "bg-orange-50 text-orange-700"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {report.latestStatus.replaceAll("_", " ")}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-3 text-slate-600">
                      {new Date(report.latestReportedAt).toLocaleString()}
                    </td>
                    <td className="px-3 py-3 text-center">
                      <button
                        title="Report actions"
                        onClick={(event) => event.stopPropagation()}
                        className="rounded p-1 hover:bg-slate-100"
                      >
                        <EllipsisVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isLoading && (
            <div className="grid h-32 place-items-center text-sm text-slate-500">
              Loading reports...
            </div>
          )}
          {isError && (
            <div className="grid h-32 place-items-center text-sm text-red-600">
              {error instanceof Error ? error.message : "Unable to load reports."}
            </div>
          )}
          {!isLoading && !isError && reports.length === 0 && (
            <div className="grid h-32 place-items-center text-sm text-slate-500">
              No reports match your search.
            </div>
          )}
        </div>

        {/* Pagination and rows-per-page controls */}
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div />
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
              disabled={!pagination?.hasPreviousPage}
              className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {visiblePages.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`h-9 w-9 rounded border text-xs ${
                  pageNumber === page
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => setPage((currentPage) => currentPage + 1)}
              disabled={!pagination?.hasNextPage}
              className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            Show
            <select
              value={limit}
              onChange={(event) => {
                setLimit(Number(event.target.value));
                startNewFilter();
              }}
              className="h-9 rounded border border-slate-200 bg-white px-2"
              aria-label="Reports per page"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            per page
          </div>
        </footer>
      </div>

      {/* Only render the side panel while a report is selected. */}
      {selected && (
        <DetailPanel report={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
