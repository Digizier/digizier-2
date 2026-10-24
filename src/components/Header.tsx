"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { BRAND_NAME, getWhatsAppUrl } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Services", href: "/services/" },
  { name: "Portfolio", href: "/portfolio/" },
  { name: "Blog", href: "/blog/" },
  { name: "AI Studio", href: "/image-generator/" },
  { name: "Contact", href: "/contact/" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with explicit "Digital Marketer & AI Automation" */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Digizier Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                unoptimized
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-neutral-900 tracking-tight leading-none group-hover:text-orange-600 transition-colors">
                {BRAND_NAME}
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-orange-600 tracking-wide uppercase mt-0.5">
                Digital Marketer & AI Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-white/85 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200/80 shadow-soft">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-150 ${
                    isActive
                      ? "bg-neutral-900 text-white font-semibold"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Clean Contact Button (Book a Call removed per user request) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact/"
              prefetch={false}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white text-xs lg:text-sm font-semibold shadow-sm transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact/"
              prefetch={false}
              className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold shadow-sm flex items-center gap-1"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-50 text-orange-600 font-semibold"
                      : "text-neutral-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/contact/"
                prefetch={false}
                className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-center text-sm shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Send Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl("👋 *Hi Nadir!* I am contacting you from the *Digizier* website mobile menu to discuss working together.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-center text-sm border border-emerald-200 flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
