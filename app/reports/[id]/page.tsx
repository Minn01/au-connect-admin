"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  ExternalLink,
  FileText,
  Flag,
  Loader2,
  MessageSquareText,
  RefreshCw,
  Search,
  ShieldAlert,
  Users,
} from "lucide-react";

import { REPORTS_PAGE_PATH } from "@/constants";
import { ReportAdminAction, ReportSubmission } from "@/types/Report";
import { useReportActionMutation } from "../utils/reportActionFetchFunction";
import { useReportCaseQuery } from "../utils/reportCaseFetchFunction";
import handleViewOriginalPost from "@/lib/handleViewOriginallPost";

const formatDate = (value: string) => new Date(value).toLocaleString();
const formatLabel = (value: string) => value.replaceAll("_", " ");

const statusTone: Record<ReportSubmission["status"], string> = {
  PENDING: "bg-amber-50 text-amber-700 ring-amber-200",
  REVIEWED: "bg-blue-50 text-blue-700 ring-blue-200",
  DISMISSED: "bg-slate-100 text-slate-600 ring-slate-200",
  ACTION_TAKEN: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

const actionDescriptions: Record<ReportAdminAction, string> = {
  MARK_UNDER_REVIEW: "Marked case under review",
  REOPEN_CASE: "Reopened case",
  DISMISS_REPORTS: "Dismissed all reports",
  KEEP_POST: "Kept post and dismissed reports",
  WARN_USER: "Warned user",
  SUSPEND_USER: "Suspended user",
  BAN_USER: "Banned user",
  REMOVE_POST: "Removed post",
  REMOVE_POST_WARN_AUTHOR: "Removed post and warned author",
};

export default function ReportCasePage() {
  const { id } = useParams<{ id: string }>();
  const [query, setQuery] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [moderatorNote, setModeratorNote] = useState("");
  const [suspensionDays, setSuspensionDays] = useState(7);

  const { data, isLoading, isError, error, isFetching, refetch } =
    useReportCaseQuery(id);
  const reportCase = data?.data;
  const actionMutation = useReportActionMutation(id);

  const applyAction = (action: ReportAdminAction) => {
    const destructiveActions: ReportAdminAction[] = [
      "BAN_USER",
      "REMOVE_POST",
      "REMOVE_POST_WARN_AUTHOR",
    ];

    if (
      destructiveActions.includes(action) &&
      !window.confirm(
        "Are you sure you want to apply this moderation decision?",
      )
    ) {
      return;
    }

    actionMutation.mutate(
      {
        action,
        note: moderatorNote,
        ...(action === "SUSPEND_USER" && {
          durationDays: suspensionDays,
        }),
      },
      {
        onSuccess: () => setModeratorNote(""),
      },
    );
  };

  const actionLabel = (action: ReportAdminAction, label: string) =>
    actionMutation.isPending && actionMutation.variables?.action === action ? (
      <span className="inline-flex items-center justify-center gap-2">
        <Loader2 className="h-4 w-4 animate-spin" /> Applying...
      </span>
    ) : (
      label
    );

  const visibleSubmissions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const submissions = reportCase?.submissions.filter((submission) => {
      const matchesQuery =
        !normalizedQuery ||
        submission.reporter.username.toLowerCase().includes(normalizedQuery) ||
        submission.description?.toLowerCase().includes(normalizedQuery) ||
        submission.reason.toLowerCase().includes(normalizedQuery);
      const matchesReason = !reason || submission.reason === reason;
      const matchesStatus = !status || submission.status === status;

      return matchesQuery && matchesReason && matchesStatus;
    });

    return [...(submissions ?? [])].sort((a, b) => {
      const difference =
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return sort === "oldest" ? difference : -difference;
    });
  }, [query, reason, reportCase?.submissions, sort, status]);

  const activityEntries = useMemo(() => {
    if (!reportCase) return [];

    return [
      ...reportCase.submissions.map((submission) => ({
        id: `report-${submission.id}`,
        kind: "REPORT" as const,
        title: `Report submitted by @${submission.reporter.username}`,
        detail: formatLabel(submission.reason),
        note: submission.description,
        createdAt: submission.createdAt,
      })),
      ...reportCase.moderationActions.map((activity) => ({
        id: `action-${activity.id}`,
        kind: "ACTION" as const,
        title: actionDescriptions[activity.action],
        detail:
          activity.action === "SUSPEND_USER" && activity.durationDays
            ? `${activity.durationDays} day suspension`
            : "Admin action",
        note: activity.note,
        createdAt: activity.createdAt,
      })),
    ].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [reportCase]);

  if (isLoading) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50">
        <div className="text-center text-sm text-slate-500">
          <RefreshCw className="mx-auto mb-3 h-5 w-5 animate-spin" />
          Loading report case...
        </div>
      </div>
    );
  }

  if (isError || !reportCase) {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50 p-6">
        <div className="max-w-md rounded-xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <ShieldAlert className="mx-auto h-9 w-9 text-red-500" />
          <h1 className="mt-4 text-lg font-bold text-slate-950">
            Case unavailable
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            {error instanceof Error ? error.message : "Unable to load this case."}
          </p>
          <Link
            href={REPORTS_PAGE_PATH}
            className="mt-5 inline-flex h-9 items-center gap-2 rounded-md bg-slate-900 px-4 text-xs font-semibold text-white hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to reports
          </Link>
        </div>
      </div>
    );
  }

  const pendingCount = reportCase.submissions.filter(
    (submission) => submission.status === "PENDING",
  ).length;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <div className="mx-auto max-w-400 px-5 py-6 lg:px-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link
              href={REPORTS_PAGE_PATH}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" /> Reports &amp; Moderation
            </Link>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight">
                Case Review
              </h1>
              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-bold text-violet-700 ring-1 ring-violet-200">
                {reportCase.targetType}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${statusTone[reportCase.latestStatus]}`}
              >
                {formatLabel(reportCase.latestStatus)}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Case ID: <span className="font-mono">{reportCase.targetId}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-50"
              title="Refresh case"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
            </button>
            <button
            onClick={() => console.log("clicked button")}
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <ExternalLink className="h-4 w-4" />
              View {reportCase.targetType === "USER" ? "Profile" : "Original Post"}
            </button>
          </div>
        </header>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total reports", value: reportCase.reportCount, icon: Flag },
            { label: "Unique reporters", value: reportCase.uniqueReporterCount, icon: Users },
            { label: "Pending", value: pendingCount, icon: Clock3 },
            { label: "Reasons raised", value: reportCase.reasons.length, icon: MessageSquareText },
          ].map((metric) => (
            <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                <metric.icon className="h-4 w-4 text-slate-400" />
              </div>
              <p className="mt-3 text-2xl font-bold">{metric.value}</p>
            </div>
          ))}
        </section>

        <div className="mt-5 grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
          <main className="min-w-0 space-y-4">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-bold">Individual reports</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Read the reason and full description submitted by each reporter.
                  </p>
                </div>
                <p className="text-xs font-semibold text-slate-500">
                  Showing {visibleSubmissions.length} of {reportCase.reportCount}
                </p>
              </div>

              <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-[minmax(220px,1fr)_170px_150px_130px]">
                <label className="relative md:col-span-2 xl:col-span-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search descriptions or reporters..."
                    className="h-10 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-xs outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <select value={reason} onChange={(event) => setReason(event.target.value)} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-xs outline-none focus:border-blue-500">
                  <option value="">All reasons</option>
                  {reportCase.reasons.map((item) => <option key={item} value={item}>{formatLabel(item)}</option>)}
                </select>
                <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-xs outline-none focus:border-blue-500">
                  <option value="">All statuses</option>
                  {reportCase.statuses.map((item) => <option key={item} value={item}>{formatLabel(item)}</option>)}
                </select>
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-10 rounded-md border border-slate-300 bg-white px-3 text-xs outline-none focus:border-blue-500">
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                </select>
              </div>
            </section>

            {visibleSubmissions.map((submission, index) => (
              <article key={submission.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/2">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500">
                      <CircleUserRound className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">@{submission.reporter.username}</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">Report #{sort === "oldest" ? index + 1 : reportCase.reportCount - index}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600 ring-1 ring-red-100">{formatLabel(submission.reason)}</span>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ${statusTone[submission.status]}`}>{formatLabel(submission.status)}</span>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50/70 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Reporter description</p>
                  <p className={`mt-2 whitespace-pre-wrap text-sm leading-6 ${submission.description ? "text-slate-700" : "italic text-slate-400"}`}>
                    {submission.description || "No additional description was provided."}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> Submitted {formatDate(submission.createdAt)}</span>
                  <span className="font-mono text-[10px]">{submission.id}</span>
                </div>
              </article>
            ))}

            {visibleSubmissions.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center">
                <Search className="mx-auto h-6 w-6 text-slate-400" />
                <p className="mt-3 text-sm font-semibold">No reports match these filters</p>
                <button type="button" onClick={() => { setQuery(""); setReason(""); setStatus(""); }} className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700">Clear filters</button>
              </div>
            )}
          </main>

          <aside className="space-y-4 xl:sticky xl:top-5">
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/2">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500">
                  {reportCase.targetType === "POST" ? <FileText className="h-5 w-5" /> : <CircleUserRound className="h-6 w-6" />}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Reported target</p>
                  <h2 className="mt-1 truncate text-sm font-bold">{reportCase.title}</h2>
                  {reportCase.reportedUsername && <p className="mt-0.5 text-xs text-slate-500">@{reportCase.reportedUsername}</p>}
                </div>
              </div>
              {reportCase.reportedContent && <p className="mt-4 line-clamp-6 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-600">{reportCase.reportedContent}</p>}
              <button 
              onClick={() => handleViewOriginalPost(reportCase.targetType, reportCase.targetId, reportCase.reportedUsername || "")}
              type="button" className="mt-4 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                <ExternalLink className="h-4 w-4" /> View original post
              </button>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/2">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-bold">Activity timeline</h2>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Reports and moderation decisions
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">
                  {activityEntries.length}
                </span>
              </div>

              <div className="mt-5 max-h-96 space-y-0 overflow-y-auto pr-1">
                {activityEntries.map((activity, index) => (
                  <div key={activity.id} className="relative flex gap-3 pb-5 last:pb-0">
                    {index < activityEntries.length - 1 && (
                      <span className="absolute left-3 top-6 h-full w-px bg-slate-200" />
                    )}
                    <div
                      className={`relative z-1 grid h-6 w-6 shrink-0 place-items-center rounded-full ring-4 ring-white ${
                        activity.kind === "ACTION"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {activity.kind === "ACTION" ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Flag className="h-3 w-3" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-[11px] font-bold leading-4 text-slate-800">
                        {activity.title}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold text-slate-500">
                        {activity.detail}
                      </p>
                      {activity.note && (
                        <p className="mt-2 line-clamp-3 rounded bg-slate-50 px-2.5 py-2 text-[10px] leading-4 text-slate-600">
                          {activity.note}
                        </p>
                      )}
                      <p className="mt-1.5 text-[10px] text-slate-400">
                        {formatDate(activity.createdAt)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/2">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /><h2 className="text-sm font-bold">Moderation decision</h2></div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Review the evidence, then choose one outcome for this case.
              </p>

              <div className="mt-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Case workflow
                </p>
                {reportCase.latestStatus === "PENDING" ? (
                  <button
                    type="button"
                    onClick={() => applyAction("MARK_UNDER_REVIEW")}
                    disabled={actionMutation.isPending}
                    className="mt-2 h-10 w-full rounded-md bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700"
                  >
                    {actionLabel("MARK_UNDER_REVIEW", "Mark Under Review")}
                  </button>
                ) : reportCase.latestStatus === "REVIEWED" ? (
                  <div className="mt-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-2.5 text-xs font-semibold text-blue-700">
                    This case is under review
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => applyAction("REOPEN_CASE")}
                    disabled={actionMutation.isPending}
                    className="mt-2 h-10 w-full rounded-md border border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                  >
                    {actionLabel("REOPEN_CASE", "Reopen Case")}
                  </button>
                )}
              </div>

              <div className="my-5 border-t border-slate-100" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Final decision
                </p>
                <label className="mt-3 block text-[11px] font-semibold text-slate-600">
                  Internal moderator note
                  <textarea
                    value={moderatorNote}
                    onChange={(event) => setModeratorNote(event.target.value)}
                    rows={3}
                    maxLength={1000}
                    placeholder="Add context for other admins..."
                    className="mt-1.5 w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-normal leading-5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </label>
                <div className="mt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() =>
                      applyAction(
                        reportCase.targetType === "POST"
                          ? "KEEP_POST"
                          : "DISMISS_REPORTS",
                      )
                    }
                    disabled={actionMutation.isPending}
                    className="h-10 w-full rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {actionLabel(
                      reportCase.targetType === "POST"
                        ? "KEEP_POST"
                        : "DISMISS_REPORTS",
                      reportCase.targetType === "POST"
                        ? "Keep Post & Dismiss Reports"
                        : "Dismiss All Reports",
                    )}
                  </button>

                  {reportCase.targetType === "USER" ? (
                    <>
                      <button
                        type="button"
                        onClick={() => applyAction("WARN_USER")}
                        disabled={actionMutation.isPending}
                        className="h-10 w-full rounded-md border border-amber-200 bg-amber-50/60 text-xs font-semibold text-amber-700 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionLabel("WARN_USER", "Warn User")}
                      </button>
                      <div className="flex gap-2">
                        <select
                          value={suspensionDays}
                          onChange={(event) =>
                            setSuspensionDays(Number(event.target.value))
                          }
                          disabled={actionMutation.isPending}
                          aria-label="Suspension duration"
                          className="h-10 w-25 rounded-md border border-orange-200 bg-white px-2 text-[11px] font-semibold text-orange-700 outline-none focus:border-orange-400"
                        >
                          <option value={1}>1 day</option>
                          <option value={7}>7 days</option>
                          <option value={30}>30 days</option>
                          <option value={90}>90 days</option>
                        </select>
                      <button
                        type="button"
                          onClick={() => applyAction("SUSPEND_USER")}
                          disabled={actionMutation.isPending}
                          className="h-10 min-w-0 flex-1 rounded-md border border-orange-200 bg-orange-50/60 text-xs font-semibold text-orange-700 hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                          {actionLabel("SUSPEND_USER", "Suspend User")}
                      </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => applyAction("BAN_USER")}
                        disabled={actionMutation.isPending}
                        className="h-10 w-full rounded-md border border-red-200 bg-red-50/60 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionLabel("BAN_USER", "Ban User")}
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => applyAction("REMOVE_POST")}
                        disabled={actionMutation.isPending}
                        className="h-10 w-full rounded-md border border-red-200 bg-red-50/60 text-xs font-semibold text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionLabel("REMOVE_POST", "Remove Post")}
                      </button>
                      <button
                        type="button"
                        onClick={() => applyAction("REMOVE_POST_WARN_AUTHOR")}
                        disabled={actionMutation.isPending}
                        className="h-10 w-full rounded-md border border-red-300 bg-red-600 text-xs font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {actionLabel(
                          "REMOVE_POST_WARN_AUTHOR",
                          "Remove Post & Warn Author",
                        )}
                      </button>
                    </>
                  )}
                </div>

                {actionMutation.isError && (
                  <div className="mt-3 rounded-md border border-red-100 bg-red-50 px-3 py-2.5 text-[11px] leading-4 text-red-700">
                    {actionMutation.error instanceof Error
                      ? actionMutation.error.message
                      : "The moderation action could not be applied."}
                  </div>
                )}
                {actionMutation.isSuccess && (
                  <div className="mt-3 rounded-md border border-emerald-100 bg-emerald-50 px-3 py-2.5 text-[11px] leading-4 text-emerald-700">
                    {actionMutation.data.message}
                  </div>
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
