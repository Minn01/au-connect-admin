import {
  CircleUserRound,
  ExternalLink,
  FileSearch,
  FileText,
  X,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import { Report } from "@/types/Report";
import { MAIN_APP_PATH } from "@/constants";
import handleViewOriginalPost from "@/lib/handleViewOriginallPost";

const formatDate = (value: string) => new Date(value).toLocaleString();
const formatLabel = (value: string) => value.replaceAll("_", " ");

export default function DetailPanel({
  report,
  onClose,
}: {
  report: Report;
  onClose: () => void;
}) {
  return (
    <aside className="fixed inset-y-0 right-0 z-40 w-100 max-w-full overflow-y-auto border-l border-slate-200 bg-white shadow-[-10px_0_35px_rgba(15,23,42,.08)] xl:static xl:z-auto xl:w-[380px] xl:shrink-0 xl:shadow-none 2xl:w-[410px]">
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-950">Report Details</h2>
          <button
            onClick={onClose}
            title="Close details"
            className="rounded p-1 text-slate-600 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-slate-200 bg-slate-50 text-slate-500">
            {report.targetType === "POST" ? (
              <FileText className="h-6 w-6" />
            ) : (
              <CircleUserRound className="h-7 w-7" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold">{report.title}</p>
            {report.reportedUsername && (
              <p className="mt-1 text-xs text-slate-500">
                @{report.reportedUsername}
              </p>
            )}
          </div>
          <span className="rounded bg-violet-50 px-2 py-1 text-[10px] font-semibold text-violet-600">
            {report.targetType}
          </span>
        </div>

        {report.reportedContent && (
          <section className="rounded-md border border-slate-200 p-4">
            <h3 className="text-xs font-bold">Reported Content</h3>
            <p className="mt-3 whitespace-pre-wrap text-xs leading-5 text-slate-600">
              {report.reportedContent}
            </p>
          </section>
        )}

        <section className="rounded-md border border-slate-200 p-4">
          <h3 className="text-xs font-bold">Report Summary</h3>
          <dl className="mt-4 grid grid-cols-[1fr_auto] gap-x-4 gap-y-3 text-[11px] text-slate-600">
            <dt>Total Reports</dt>
            <dd>{report.reportCount}</dd>
            <dt>First Reported</dt>
            <dd>{formatDate(report.firstReportedAt)}</dd>
            <dt>Latest Report</dt>
            <dd>{formatDate(report.latestReportedAt)}</dd>
            <dt>Status</dt>
            <dd>
              <span className="rounded bg-orange-50 px-2 py-1 text-orange-700">
                {formatLabel(report.latestStatus)}
              </span>
            </dd>
          </dl>
        </section>

        <section className="rounded-md border border-slate-200 p-4">
          <h3 className="text-xs font-bold">Reasons</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {report.reasons.map((reason) => (
              <span
                key={reason}
                className="rounded bg-red-50 px-2 py-1 text-[10px] font-medium text-red-600"
              >
                {formatLabel(reason)}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-slate-200 p-4">
          <h3 className="text-xs font-bold">
            Reporters ({report.reporters.length})
          </h3>
          <div className="mt-3 space-y-2">
            {report.reporters.map((reporter) => (
              <div
                key={reporter.id}
                className="flex items-center gap-2 text-xs"
              >
                <CircleUserRound className="h-5 w-5 text-slate-500" />
                <span>{reporter.username}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-slate-200 p-4">
          <h3 className="text-xs font-bold">Quick actions</h3>
          <p className="mt-1 text-[11px] leading-4 text-slate-500">
            Inspect the original target or open the complete report history.
          </p>

          <div className="mt-4 space-y-2">
            <button
              onClick={() => handleViewOriginalPost(report.targetType, report.targetId, report.reportedUsername || "")}
              type="button"
              className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <ExternalLink className="h-4 w-4" />
              View{" "}
              {report.targetType === "USER" ? "User Profile" : "Original Post"}
            </button>
            <Link
              href={`/reports/${report.targetId}`}
              className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-600 px-3 text-xs font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <FileSearch className="h-4 w-4" />
              Review Full Case
            </Link>
            <button
              type="button"
              className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-red-200 bg-white px-3 text-xs font-semibold text-red-600 transition-colors hover:border-red-300 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <XCircle className="h-4 w-4" />
              Dismiss All Reports
            </button>
          </div>
        </section>
      </div>
    </aside>
  );
}
