"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Briefcase, MessageSquare, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function MobileTabBar() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Services",
      href: "/services/",
      icon: Sparkles,
    },
    {
      label: "Inquire",
      href: "/contact/",
      icon: Send,
      isSpecial: true,
    },
    {
      label: "Portfolio",
      href: "/portfolio/",
      icon: Briefcase,
    },
    {
      label: "WhatsApp",
      href: getWhatsAppUrl("👋 *Hi Nadir!* I am reaching out from the *Digizier* mobile bottom navigation bar to discuss a project."),
      icon: MessageSquare,
      isExternal: true,
    },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 pt-2 pb-2 safe-area-pb"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || (tab.href !== "/" && pathname?.startsWith(tab.href));
          const Icon = tab.icon;

          if (tab.isSpecial) {
            return (
              <Link
                key={tab.label}
                href={tab.href}
                prefetch={false}
                className="flex flex-col items-center justify-center -mt-5 group focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 group-active:scale-95 ${
                    isActive
                      ? "bg-neutral-900 text-white ring-4 ring-orange-100"
                      : "bg-orange-500 text-white hover:bg-orange-600 ring-4 ring-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] font-semibold mt-1 tracking-tight ${
                    isActive ? "text-neutral-900" : "text-neutral-600"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          }

          if (tab.isExternal) {
            return (
              <a
                key={tab.label}
                href={tab.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-neutral-500 hover:text-emerald-700 transition-all duration-150 active:scale-95"
              >
                <Icon className="w-5 h-5 text-emerald-600" />
                <span className="text-[10px] mt-1 tracking-tight text-neutral-600 font-medium">
                  {tab.label}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              prefetch={false}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 active:scale-95 ${
                isActive ? "text-orange-600 font-semibold" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-2"}`} />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-orange-500" />
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
