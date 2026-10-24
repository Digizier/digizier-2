"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { submitContactInquiry } from "@/lib/supabase";
import {
  FOUNDER_NAME,
  FOUNDER_LOCATION,
  WHATSAPP_DISPLAY,
  EMAIL_CONTACT,
  getWhatsAppUrl,
  formatContactWhatsAppMessage,
} from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Performance Digital Marketing & Ads",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and project message.");
      return;
    }

    setLoading(true);

    const formattedMsg = formatContactWhatsAppMessage(formData);
    const waUrl = getWhatsAppUrl(formattedMsg);
    setGeneratedWhatsAppUrl(waUrl);

    try {
      // Non-blocking database/local storage backup
      await submitContactInquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
      });
    } catch (err) {
      console.warn("Storage backup notice:", err);
    } finally {
      // Immediate redirect to WhatsApp with pre-filled details
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          Let&apos;s Build Something Intelligent.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Have an advertising campaign to scale, a WhatsApp bot to build, or manual workflows to automate? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-white border border-gray-200/80 shadow-soft p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-neutral-900">
              Direct Contact Channels
            </h2>

            <div className="space-y-4 text-sm">
              {/* WhatsApp direct */}
              <a
                href={getWhatsAppUrl("👋 *Hi Nadir!* I am reaching out to discuss a digital marketing or AI automation project directly.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold block">
                      Direct WhatsApp Chat
                    </span>
                    <strong className="text-neutral-900 font-bold block text-sm">
                      {WHATSAPP_DISPLAY}
                    </strong>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-medium block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="text-neutral-900 font-bold hover:text-orange-600 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-medium block">
                    Headquarters
                  </span>
                  <strong className="text-neutral-900 font-bold">
                    {FOUNDER_LOCATION}
                  </strong>
                  <span className="text-xs text-neutral-500 block">
                    Serving clients locally in Pakistan and globally
                  </span>
                </div>
              </div>
            </div>

            {/* Quick appointment booking CTA */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/appointment-booking/"
                prefetch={false}
                className="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>Prefer a Strategy Call? Book a 30-Min Slot</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-10">
            {submitted ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-black text-neutral-900">
                    Inquiry Formatted & Sent to WhatsApp!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your project details have been formatted and prepared for instant transmission to <strong>{FOUNDER_NAME}</strong> on WhatsApp.
                  </p>
                </div>

                {/* Formatted Message Preview Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto text-neutral-800 shadow-sm">
                  <div className="flex items-center justify-between border-b border-orange-200/60 pb-2">
                    <span className="text-neutral-500">Client Name:</span>
                    <strong className="text-neutral-900">{formData.name}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-orange-200/60 pb-2">
                    <span className="text-neutral-500">Email Address:</span>
                    <span className="font-medium text-neutral-900">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div className="flex items-center justify-between border-b border-orange-200/60 pb-2">
                      <span className="text-neutral-500">Phone / WhatsApp:</span>
                      <span className="font-medium text-neutral-900">{formData.phone}</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between border-b border-orange-200/60 pb-2 gap-2">
                    <span className="text-neutral-500 flex-shrink-0">Service:</span>
                    <strong className="text-orange-700 text-right">{formData.service}</strong>
                  </div>
                  <div className="pt-1">
                    <span className="text-neutral-500 block mb-0.5">Project Scope:</span>
                    <p className="text-xs text-neutral-700 italic bg-white/70 p-2 rounded-lg border border-orange-200/50">
                      &quot;{formData.message}&quot;
                    </p>
                  </div>
                </div>

                {/* WhatsApp Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generatedWhatsAppUrl || getWhatsAppUrl(formatContactWhatsAppMessage(formData))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open Chat on WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Performance Digital Marketing & Ads",
                        message: "",
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-800 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>

                <p className="text-[11px] text-neutral-500 max-w-sm mx-auto">
                  If WhatsApp did not open automatically, tap the green button above to deliver your message directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-900 mb-2">
                  Send Project Inquiry
                </h2>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                      WhatsApp / Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                    >
                      <option value="Performance Digital Marketing & Ads">Performance Digital Marketing & Ads</option>
                      <option value="AI Agent & WhatsApp Bot Development">AI Agent & WhatsApp Bot Development</option>
                      <option value="n8n Workflow Automation">n8n Workflow Automation</option>
                      <option value="AI-Powered Web & E-Commerce Development">AI-Powered Web & E-Commerce Development</option>
                      <option value="Business Process Automation">Business Process Automation</option>
                      <option value="Growth & Automation Consulting">Growth & Automation Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you want to achieve or the current challenge you face..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  {loading ? (
                    <span>Formatting Details & Opening WhatsApp...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-neutral-500 text-center pt-1">
                  Protected with zero data sharing. Backed up locally in browser for offline safety.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
