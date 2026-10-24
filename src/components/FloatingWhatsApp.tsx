"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_DISPLAY, FOUNDER_NAME } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl(
    "👋 *Hi Nadir!* I'm reaching out from the *Digizier* website to discuss a digital marketing or AI automation project for my business."
  );

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2"
    >
      {/* Interactive Tooltip Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-neutral-800 text-xs py-2 px-3.5 rounded-2xl shadow-lg border border-gray-100 animate-in fade-in slide-in-from-right-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat directly with <strong>{FOUNDER_NAME}</strong></span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-600 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label={`Chat with Nadir Habib on WhatsApp at ${WHATSAPP_DISPLAY}`}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        {/* Pulsing online badge */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-emerald-500" />
        </span>
      </a>
    </aside>
  );
}
