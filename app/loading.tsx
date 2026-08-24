export default function Loading() {
  return (
    <div
      className="min-h-full bg-slate-50 px-6 py-6"
      role="status"
      aria-label="Loading page"
    >
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-7 w-48 rounded-lg bg-slate-200" />
        <div className="mt-3 h-4 w-80 max-w-full rounded bg-slate-200/80" />

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-28 rounded-xl border border-slate-200 bg-white shadow-sm"
            />
          ))}
        </div>

        <div className="mt-5 h-80 rounded-xl border border-slate-200 bg-white shadow-sm" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
