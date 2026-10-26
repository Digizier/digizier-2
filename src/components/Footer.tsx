import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, MapPin, Mail } from "lucide-react";
import {
  BRAND_NAME,
  FOUNDER_NAME,
  FOUNDER_LOCATION,
  WHATSAPP_DISPLAY,
  EMAIL_CONTACT,
  getWhatsAppUrl,
} from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80 pt-12 pb-16 sm:pt-16 sm:pb-12 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-gray-100">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Digizier Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-neutral-900 tracking-tight">
                  {BRAND_NAME}
                </span>
                <span className="text-[10px] font-semibold text-orange-600 uppercase tracking-wide">
                  Digital Marketer & AI Automation
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              Digital marketing and AI automation agency founded and operated by <strong>{FOUNDER_NAME}</strong>. 
              We help ambitious businesses scale customer acquisition with high-ROAS ad funnels and automate everyday operations with intelligent AI agents.
            </p>

            {/* Semantic Postal Address for Local SEO */}
            <address
              className="not-italic flex flex-col gap-1.5 text-xs text-neutral-500 pt-1"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span>
                  <span itemProp="streetAddress">Karachi</span>,{" "}
                  <span itemProp="addressLocality">Karachi</span>,{" "}
                  <span itemProp="addressRegion">Sindh</span>,{" "}
                  <span itemProp="postalCode">75500</span>,{" "}
                  <span itemProp="addressCountry">Pakistan</span> • Available Worldwide
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info%40digizier.com"
                  className="hover:text-neutral-900 transition-colors font-medium inline-flex items-center"
                  itemProp="email"
                  aria-label="Email Digizier"
                >
                  <span>info</span>
                  <span className="text-orange-500 font-semibold">&#64;</span>
                  <span>digizier.com</span>
                </a>
              </div>
            </address>

            {/* Social Media Channels (Fulfilling SEOptimer Social Checks) */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/nadir-habib"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-orange-500 hover:text-white text-neutral-600 flex items-center justify-center transition-all"
                aria-label="Digizier LinkedIn Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-orange-500 hover:text-white text-neutral-600 flex items-center justify-center transition-all"
                aria-label="Digizier Facebook Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-orange-500 hover:text-white text-neutral-600 flex items-center justify-center transition-all"
                aria-label="Digizier Instagram Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://x.com/digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-orange-500 hover:text-white text-neutral-600 flex items-center justify-center transition-all"
                aria-label="Digizier X (Twitter) Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@digizier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-orange-500 hover:text-white text-neutral-600 flex items-center justify-center transition-all"
                aria-label="Digizier YouTube Channel"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Direct Connect WhatsApp Button */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={getWhatsAppUrl("👋 *Hello Nadir!* Contacting you from the Digizier footer to discuss a digital marketing or AI automation project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-emerald-800 text-xs font-bold transition-all shadow-sm active:scale-95"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Links: Semantic <p> column headings to strictly preserve document heading outline */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Services Col */}
            <div>
              <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Services
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li>
                  <Link href="/services/#digital-marketing" className="hover:text-orange-600 transition-colors">
                    Performance Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/#ai-agents" className="hover:text-orange-600 transition-colors">
                    AI Agents & Bots
                  </Link>
                </li>
                <li>
                  <Link href="/services/#n8n-automation" className="hover:text-orange-600 transition-colors">
                    n8n Workflows
                  </Link>
                </li>
                <li>
                  <Link href="/services/#web-development" className="hover:text-orange-600 transition-colors">
                    Web & E-Commerce
                  </Link>
                </li>
                <li>
                  <Link href="/services/#process-automation" className="hover:text-orange-600 transition-colors">
                    Process Automation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Col */}
            <div>
              <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Explore
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li>
                  <Link href="/about/" className="hover:text-orange-600 transition-colors">
                    About Nadir
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/" className="hover:text-orange-600 transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/blog/" className="hover:text-orange-600 transition-colors">
                    Articles & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/image-generator/" className="hover:text-orange-600 transition-colors">
                    AI Studio
                  </Link>
                </li>
                <li>
                  <Link href="/contact/" className="hover:text-orange-600 transition-colors">
                    Consultation Request
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact Col */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Direct Contact
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li>
                  <a
                    href={getWhatsAppUrl("Hi Nadir! I would like to consult on a marketing or automation project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-medium hover:text-emerald-800"
                  >
                    <span>Instant WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <Link href="/contact/" className="hover:text-orange-600 transition-colors">
                    Project Inquiry Form
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:info%40digizier.com"
                    className="hover:text-orange-600 transition-colors text-xs inline-flex items-center"
                    aria-label="Direct Email"
                  >
                    <span>info</span>
                    <span className="text-orange-500 font-semibold">&#64;</span>
                    <span>digizier.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. Engineered by {FOUNDER_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy/" className="hover:text-neutral-800 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms/" className="hover:text-neutral-800 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
