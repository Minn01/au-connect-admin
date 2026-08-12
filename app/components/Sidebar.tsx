"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { LogOut, ShieldCheck } from "lucide-react";
import {
  ADMIN_LOGOUT_API_PATH,
  ANNOUNCEMENTS_PAGE_PATH,
  ADMINISTRATORS_PAGE_PATH,
  COMMUNITY_PAGE_PATH,
  MAIN_PAGE_PATH,
  REPORTS_PAGE_PATH,
  USER_MANAGEMENT_PAGE_PATH,
  USER_VERIFICATION_PAGE_PATH,
  LOGIN_PAGE_PATH,
} from "@/constants";

type CurrentAdmin = {
  id: string;
  email: string;
  name: string | null;
  role: "SUPER_ADMIN" | "ADMIN" | "MODERATOR";
};

const roleLabels: Record<CurrentAdmin["role"], string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  MODERATOR: "Moderator",
};

const navItems = [
  { label: "Dashboard", href: MAIN_PAGE_PATH },
  { label: "User Management", href: USER_MANAGEMENT_PAGE_PATH },
  { label: "User Verification", href: USER_VERIFICATION_PAGE_PATH },
  { label: "Reports", href: REPORTS_PAGE_PATH },
  { label: "Community", href: COMMUNITY_PAGE_PATH },
  { label: "Announcements", href: ANNOUNCEMENTS_PAGE_PATH },
  { label: "Administrators", href: ADMINISTRATORS_PAGE_PATH },
];

export default function Sidebar({ admin }: { admin: CurrentAdmin | null }) {
  const pathname = usePathname();

  if (pathname === LOGIN_PAGE_PATH) return null;

  return (
    <aside className="flex h-screen w-69 flex-col border-r border-gray-100 bg-white">
      <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-5">
        <Image
          src="/au-connect-logo.png"
          alt="au-connect-logo"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <span className="text-lg font-semibold tracking-tight text-gray-900">
          AU Connect
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
        <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-wider text-gray-400">
          Menu
        </p>
        {navItems.filter((item) =>
          item.href !== ADMINISTRATORS_PAGE_PATH || admin?.role === "SUPER_ADMIN"
        ).map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 ${
                active
                  ? "bg-red-50 text-red-600"
                  : "text-gray-500 hover:bg-red-50 hover:text-red-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-100 p-3">
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold uppercase text-red-700">
            {admin?.name?.charAt(0) ?? admin?.email.charAt(0) ?? "A"}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-900">
              {admin?.name ?? "AU Administrator"}
            </p>
            <p className="truncate text-xs text-gray-500">
              {admin?.email ?? "Account unavailable"}
            </p>
            {admin && (
              <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-red-600">
                <ShieldCheck size={11} /> {roleLabels[admin.role]}
              </p>
            )}
          </div>

          <form action={ADMIN_LOGOUT_API_PATH} method="post">
            <button
              type="submit"
              aria-label="Sign out"
              title="Sign out"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-red-100 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
            >
              <LogOut size={18} />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
