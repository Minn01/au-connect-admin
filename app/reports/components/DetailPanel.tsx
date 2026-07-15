import { CircleUserRound, FileText, X } from "lucide-react";

import { Report } from "@/types/Report";

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
              <div key={reporter.id} className="flex items-center gap-2 text-xs">
                <CircleUserRound className="h-5 w-5 text-slate-500" />
                <span>{reporter.username}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-slate-200 p-3">
          <h3 className="mb-3 text-xs font-bold">Actions</h3>
          <div className="space-y-2">
            <button className="h-9 w-full rounded bg-slate-100 text-xs font-medium hover:bg-slate-200">
              Dismiss Report
            </button>
            <button className="h-9 w-full rounded bg-red-600 text-xs font-semibold text-white hover:bg-red-700">
              Delete {report.targetType === "USER" ? "User" : "Post"}
            </button>
            <button className="h-9 w-full rounded border border-blue-600 text-xs font-medium text-blue-600 hover:bg-blue-50">
              View Original {report.targetType === "USER" ? "Profile" : "Post"}
            </button>
          </div>
        </section>
      </div>
    </aside>
  );
}
