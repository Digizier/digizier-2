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

            <div className="flex flex-col gap-1.5 text-xs text-neutral-500 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <span>{FOUNDER_LOCATION} • Available for Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-neutral-900 transition-colors font-medium">
                  {EMAIL_CONTACT}
                </a>
              </div>
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

          {/* Links: 2 Columns on Mobile, Balanced Columns on Desktop */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Services Col */}
            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Services
              </h4>
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
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Explore
              </h4>
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
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">
                Direct Contact
              </h4>
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
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-orange-600 transition-colors text-xs"
                  >
                    {EMAIL_CONTACT}
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
