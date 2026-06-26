"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ANNOUNCEMENTS_PAGE_PATH, COMMUNITY_PAGE_PATH, MAIN_PAGE_PATH, REPORTS_PAGE_PATH, USER_MANAGEMENT_PAGE_PATH, USER_VERIFICATION_PAGE_PATH } from "@/constants";

const navItems = [
  { label: "Dashboard", href: MAIN_PAGE_PATH },
  { label: "User Management", href: USER_MANAGEMENT_PAGE_PATH },
  { label: "User Verification", href: USER_VERIFICATION_PAGE_PATH},
  { label: "Reports", href: REPORTS_PAGE_PATH},
  { label: "Community", href: COMMUNITY_PAGE_PATH},
  { label: "Announcements", href: ANNOUNCEMENTS_PAGE_PATH},
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex h-screen w-80 flex-col bg-white border-r border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
      <Image
        src={"/au-connect-logo.png"}
        alt={'au-connect-logo'}
        width={36}
        height={36}
        className="rounded-full object-cover"
      />

        <span className="text-lg font-semibold text-gray-900 tracking-tight">AU Connect</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
        <p className="px-3 pb-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
          Menu
        </p>
        {navItems.map((item) => {
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

      {/* Bottom */}
      {/* <div className="border-t border-gray-100 px-3 py-4">
        <button className="w-full flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all duration-150">
          Logout
        </button>
      </div> */}
    </aside>
  );
}