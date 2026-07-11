"use client";

import {
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Clock3,
  EllipsisVertical,
  FileText,
  Filter,
  Flag,
  ImageIcon,
  Link2,
  Play,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  Video,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type Report = {
  id: number;
  kind: "POST" | "USER" | "POST (POLL)";
  title: string;
  author: string;
  subtitle: string;
  reasons: string[];
  reports: number;
  status: "Pending" | "Under Review";
  reportedAt: string;
  date: string;
  visual: "rider" | "portrait" | "car" | "poll" | "person" | "document";
};

const reports: Report[] = [
  { id: 1, kind: "POST", title: "Standard post with all media attached", author: "Si Thu Naung", subtitle: "", reasons: ["Harassment", "Spam", "+1"], reports: 5, status: "Pending", reportedAt: "2 hours ago", date: "Mar 11, 2026  •  10:30 AM", visual: "rider" },
  { id: 2, kind: "USER", title: "@ayechan.moe", author: "", subtitle: "User profile and recent activity", reasons: ["Harassment", "Offensive content", "+1"], reports: 3, status: "Pending", reportedAt: "5 hours ago", date: "Mar 10, 2026  •  09:15 AM", visual: "portrait" },
  { id: 3, kind: "POST", title: "Join this link to get free money!!!", author: "Zaw Lin Htet", subtitle: "", reasons: ["Spam", "Fraud"], reports: 2, status: "Pending", reportedAt: "1 day ago", date: "Mar 10, 2026  •  08:40 AM", visual: "car" },
  { id: 4, kind: "POST (POLL)", title: "Which framework do you prefer?", author: "Thin Zar Wint", subtitle: "", reasons: ["Inappropriate", "Off-topic"], reports: 1, status: "Pending", reportedAt: "1 day ago", date: "Mar 9, 2026  •  07:20 PM", visual: "poll" },
  { id: 5, kind: "USER", title: "@soe.min", author: "", subtitle: "Suspicious activity detected", reasons: ["Spam", "Inappropriate"], reports: 4, status: "Under Review", reportedAt: "2 days ago", date: "Mar 9, 2026  •  06:05 PM", visual: "person" },
  { id: 6, kind: "POST", title: "Check out my income proof 🔥", author: "Myo Thant", subtitle: "", reasons: ["Spam", "Misleading"], reports: 6, status: "Pending", reportedAt: "2 days ago", date: "Mar 9, 2026  •  03:12 PM", visual: "document" },
];

const metrics = [
  { label: "Pending Review", value: 36, note: "Needs your action", icon: Clock3, tone: "orange" },
  { label: "Reported Posts", value: 48, note: "+5 from yesterday", icon: FileText, tone: "red" },
  { label: "Reported Users", value: 28, note: "+3 from yesterday", icon: Users, tone: "purple" },
  { label: "Resolved", value: 89, note: "Total resolved", icon: CheckCircle2, tone: "green" },
  { label: "All Reports", value: 165, note: "Total reports", icon: Flag, tone: "blue" },
];

function Thumb({ type, large = false }: { type: Report["visual"]; large?: boolean }) {
  const iconClass = large ? "h-8 w-8" : "h-6 w-6";
  const common = `relative shrink-0 overflow-hidden border border-slate-200 ${large ? "h-28 w-full rounded-md" : "h-16 w-16 rounded-md"}`;
  if (type === "rider") return <div className={`${common} bg-[radial-gradient(circle_at_50%_25%,#d8c6fb_0_14%,transparent_15%),linear-gradient(135deg,#202638_0_45%,#75829a_46%_55%,#171923_56%)]`}><ShieldCheck className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white ${iconClass}`} /></div>;
  if (type === "car") return <div className={`${common} bg-[linear-gradient(160deg,#cce3f5_0_45%,#314862_46%_63%,#101828_64%)]`}><div className="absolute bottom-3 left-2 h-4 w-11 rounded-sm bg-red-600 shadow-[7px_7px_0_-5px_#111827]" /></div>;
  if (type === "poll") return <div className={`${common} grid place-items-center bg-emerald-50 text-emerald-600`}><SlidersHorizontal className={iconClass} /></div>;
  if (type === "document") return <div className={`${common} grid place-items-center bg-slate-50 text-slate-500`}><FileText className={iconClass} /></div>;
  return <div className={`${common} grid place-items-center ${type === "portrait" ? "bg-gradient-to-br from-sky-100 to-rose-100" : "bg-gradient-to-br from-amber-100 to-slate-300"} text-slate-700`}><CircleUserRound className={large ? "h-12 w-12" : "h-9 w-9"} /></div>;
}

function SelectButton({ children }: { children: React.ReactNode }) {
  return <button className="flex h-10 items-center justify-between gap-4 rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 transition hover:border-blue-300"><span>{children}</span><ChevronDown className="h-3.5 w-3.5 text-slate-500" /></button>;
}

function DetailPanel({ report, onClose }: { report: Report; onClose: () => void }) {
  return (
    <aside className="fixed inset-y-0 right-0 z-40 w-[400px] max-w-full overflow-y-auto border-l border-slate-200 bg-white shadow-[-10px_0_35px_rgba(15,23,42,.08)] xl:static xl:z-auto xl:w-[380px] xl:shrink-0 xl:shadow-none 2xl:w-[410px]">
      <div className="sticky top-0 z-10 bg-white px-5 pt-5">
        <div className="flex items-center justify-between"><h2 className="text-lg font-bold text-slate-950">Report Details</h2><button onClick={onClose} title="Close details" className="rounded p-1 text-slate-600 hover:bg-slate-100"><X className="h-5 w-5" /></button></div>
        <div className="mt-5 grid grid-cols-3 border-b border-slate-200 text-center text-xs font-medium text-slate-600"><button className="border-b-2 border-blue-600 pb-3 text-blue-600">Overview</button><button className="pb-3">Reports ({report.reports})</button><button className="pb-3">History</button></div>
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-slate-200"><CircleUserRound className="h-6 w-6" /></div><div className="min-w-0 flex-1"><p className="text-xs font-bold">{report.author || report.title}</p><p className="mt-1 text-[10px] text-slate-500">Mar 11, 2026&nbsp; • &nbsp;10:30 AM</p></div><span className="rounded bg-violet-50 px-2 py-1 text-[10px] font-semibold text-violet-600">{report.kind}</span></div>
        <p className="text-xs font-semibold text-slate-900">{report.title}</p>
        <div className="grid grid-cols-3 gap-1"><Thumb type={report.visual} large /><div className="relative overflow-hidden rounded-md bg-black"><div className="absolute inset-0 grid place-items-center"><span className="grid h-11 w-11 place-items-center rounded-full border border-white text-white"><Play className="ml-0.5 h-5 w-5 fill-white" /></span></div><span className="absolute bottom-2 left-2 text-xs text-white">0:12</span></div><div className="relative overflow-hidden rounded-md bg-[linear-gradient(160deg,#cce3f5_0_45%,#314862_46%_63%,#101828_64%)]"><div className="absolute bottom-4 left-2 h-5 w-14 bg-red-600"/><span className="absolute bottom-2 right-2 text-xs font-bold text-white">+2</span></div></div>
        <div className="flex justify-between text-[10px] font-medium text-slate-600"><span className="flex items-center gap-1"><ImageIcon className="h-3.5 w-3.5"/>2 Images</span><span className="flex items-center gap-1"><Video className="h-3.5 w-3.5"/>1 Video</span><span className="flex items-center gap-1"><FileText className="h-3.5 w-3.5"/>1 File</span><span className="flex items-center gap-1"><Link2 className="h-3.5 w-3.5"/>1 Link</span></div>
        <section className="rounded-md border border-slate-200 p-4"><h3 className="text-xs font-bold">Report Summary</h3><dl className="mt-4 grid grid-cols-[1fr_auto] gap-y-3 text-[11px] text-slate-600"><dt>Total Reports</dt><dd>{report.reports}</dd><dt>First Reported</dt><dd>Mar 11, 2026&nbsp; • &nbsp;08:15 AM</dd><dt>Latest Report</dt><dd>{report.reportedAt}</dd><dt>Status</dt><dd><span className="rounded bg-orange-50 px-2 py-1 text-orange-700">{report.status}</span></dd></dl></section>
        <section className="rounded-md border border-slate-200 p-4"><h3 className="text-xs font-bold">Top Reasons</h3><div className="mt-4 space-y-3 text-[11px] text-slate-600">{[["Harassment",40,"bg-red-500","2 (40%)"],["Spam",20,"bg-orange-500","1 (20%)"],["Offensive content",20,"bg-amber-500","1 (20%)"],["Hate Speech",20,"bg-violet-600","1 (20%)"]].map(([label,width,color,count])=><div key={String(label)} className="grid grid-cols-[90px_1fr_58px] items-center gap-2"><span>{label}</span><div className="h-1 rounded bg-slate-100"><div className={`h-1 rounded ${color}`} style={{width:`${width}%`}} /></div><span>{count}</span></div>)}</div></section>
        <section className="rounded-md border border-slate-200 p-3"><h3 className="mb-3 text-xs font-bold">Actions</h3><div className="space-y-2"><button className="h-9 w-full rounded bg-slate-100 text-xs font-medium hover:bg-slate-200">Dismiss Report</button><button className="h-9 w-full rounded bg-red-600 text-xs font-semibold text-white hover:bg-red-700">Delete {report.kind === "USER" ? "User" : "Post"}</button><button className="h-9 w-full rounded border border-blue-600 text-xs font-medium text-blue-600 hover:bg-blue-50">View Original {report.kind === "USER" ? "Profile" : "Post"}</button></div></section>
      </div>
    </aside>
  );
}

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState("All Reports");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Report | null>(reports[0]);
  const [checked, setChecked] = useState<number[]>([]);
  const filtered = useMemo(() => reports.filter((report) => `${report.title} ${report.author} ${report.reasons.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const toggle = (id: number) => setChecked((value) => value.includes(id) ? value.filter((item) => item !== id) : [...value, id]);

  return (
    <div className="reports-workspace flex h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden px-5 py-5 lg:px-7 2xl:px-8">
        <header className="flex items-start justify-between gap-4"><div><h1 className="text-2xl font-bold tracking-tight">Reports &amp; Moderation</h1><p className="mt-1 text-xs text-slate-500">Review and take action on reported content and users.</p></div><div className="flex items-center gap-4"><button title="Notifications" className="relative rounded-full p-2 text-slate-700 hover:bg-white"><Bell className="h-5 w-5"/><span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-red-600 text-[9px] font-bold text-white">6</span></button><div className="hidden h-7 w-px bg-slate-200 sm:block"/><button className="hidden items-center gap-2 text-xs font-medium sm:flex"><span className="text-xl">🇬🇧</span> English <ChevronDown className="h-3.5 w-3.5"/></button><div className="hidden h-7 w-px bg-slate-200 md:block"/><button className="hidden items-center gap-2 md:flex"><span className="grid h-9 w-9 place-items-center rounded-full bg-slate-200"><CircleUserRound className="h-6 w-6"/></span><span className="text-left"><strong className="block text-xs">Moni Roy</strong><span className="text-[10px] text-slate-500">Admin</span></span><ChevronDown className="h-3.5 w-3.5"/></button></div></header>

        <section className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 2xl:grid-cols-5">{metrics.map(({label,value,note,icon:Icon,tone})=><article key={label} className="flex min-h-24 items-center gap-3 rounded-md border border-slate-200 bg-white p-3 shadow-[0_2px_10px_rgba(15,23,42,.025)]"><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-${tone}-50 text-${tone}-600`} style={{backgroundColor:({orange:"#fff4e6",red:"#fff0f1",purple:"#f3f0ff",green:"#edf9f0",blue:"#eef5ff"} as Record<string,string>)[tone],color:({orange:"#f97316",red:"#ef4444",purple:"#5b45ff",green:"#16a34a",blue:"#1677ff"} as Record<string,string>)[tone]}}><Icon className="h-6 w-6"/></span><div><p className="text-[11px] font-semibold text-slate-700">{label}</p><p className="mt-1 text-xl font-bold">{value}</p><p className="mt-1 text-[10px] text-slate-500">{note}</p></div></article>)}</section>

        <div className="mt-6 flex gap-2 border-b border-slate-200 pb-2">{[["All Reports",165],["Posts",102],["Users",63]].map(([tab,count])=><button key={tab} onClick={()=>setActiveTab(String(tab))} className={`rounded-md px-4 py-2 text-xs font-semibold ${activeTab === tab ? "border border-blue-600 bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-700"}`}>{tab} ({count})</button>)}</div>

        <div className="mt-5 flex flex-wrap gap-2"><label className="flex h-10 min-w-64 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-3"><Search className="h-4 w-4 text-slate-500"/><input value={query} onChange={(event)=>setQuery(event.target.value)} className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400" placeholder="Search reports by title, username, or content..."/></label><SelectButton>Status: All</SelectButton><SelectButton>Reason: All</SelectButton><SelectButton>Reporter: All</SelectButton><SelectButton>Newest First</SelectButton><button className="flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-xs font-medium"><Filter className="h-4 w-4"/> Filters</button></div>

        <div className="mt-5 overflow-hidden rounded-md border border-slate-200 bg-white"><div className="overflow-x-auto"><table className="w-full min-w-[900px] border-collapse text-left text-[11px]"><thead className="bg-slate-50/80 text-slate-600"><tr><th className="w-12 px-4 py-3"><input type="checkbox" aria-label="Select all" checked={checked.length === reports.length} onChange={(event)=>setChecked(event.target.checked ? reports.map(({id})=>id) : [])}/></th><th className="px-2 py-3">Content</th><th className="px-2 py-3">Type</th><th className="px-2 py-3">Reasons</th><th className="px-2 py-3">Reports</th><th className="px-2 py-3">Status</th><th className="px-2 py-3">Reported At</th><th className="px-3 py-3 text-center">Actions</th></tr></thead><tbody>{filtered.map((report)=><tr key={report.id} onClick={()=>setSelected(report)} className={`cursor-pointer border-t border-slate-200 hover:bg-blue-50/30 ${selected?.id===report.id ? "bg-blue-50/20" : ""}`}><td className="px-4 py-3" onClick={(event)=>event.stopPropagation()}><input type="checkbox" aria-label={`Select ${report.title}`} checked={checked.includes(report.id)} onChange={()=>toggle(report.id)}/></td><td className="px-2 py-3"><div className="flex items-center gap-3"><Thumb type={report.visual}/><div className="max-w-52"><p className="font-semibold leading-4 text-slate-900">{report.title}</p>{report.subtitle && <p className="mt-1 text-slate-500">{report.subtitle}</p>}{report.author && <p className="mt-1 font-medium">by {report.author}</p>}<p className="mt-1 text-[10px] text-slate-500">{report.date}</p></div></div></td><td className="px-2 py-3"><span className="rounded bg-violet-50 px-2 py-1 text-[9px] font-semibold text-violet-600">{report.kind}</span></td><td className="px-2 py-3"><div className="flex max-w-48 flex-wrap gap-1">{report.reasons.map((reason,index)=><span key={reason} className={`rounded px-2 py-1 text-[9px] ${reason === "+1" ? "bg-slate-100 text-slate-600" : index === 0 ? "bg-red-50 text-red-600" : "bg-orange-50 text-orange-600"}`}>{reason}</span>)}</div></td><td className="px-2 py-3 text-center">{report.reports}</td><td className="px-2 py-3"><span className={`rounded px-2.5 py-1 text-[9px] font-medium ${report.status === "Pending" ? "bg-orange-50 text-orange-700" : "bg-blue-50 text-blue-600"}`}>{report.status}</span></td><td className="whitespace-nowrap px-2 py-3 text-slate-600">{report.reportedAt}</td><td className="px-3 py-3 text-center"><button title="Report actions" onClick={(event)=>event.stopPropagation()} className="rounded p-1 hover:bg-slate-100"><EllipsisVertical className="h-4 w-4"/></button></td></tr>)}</tbody></table></div>{filtered.length===0 && <div className="grid h-32 place-items-center text-sm text-slate-500">No reports match your search.</div>}</div>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4"><div/><div className="flex items-center gap-1"><button className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white"><ChevronLeft className="h-4 w-4"/></button>{[1,2,3,4,5].map((page)=><button key={page} className={`h-9 w-9 rounded border text-xs ${page===1 ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white"}`}>{page}</button>)}<span className="px-2">...</span><button className="h-9 w-9 rounded border border-slate-200 bg-white text-xs">17</button><button className="grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white"><ChevronRight className="h-4 w-4"/></button></div><div className="flex items-center gap-3 text-xs text-slate-600">Show <SelectButton>10</SelectButton> per page</div></footer>
      </div>
      {selected && <DetailPanel report={selected} onClose={()=>setSelected(null)}/>}
    </div>
  );
}
