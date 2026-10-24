"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { submitBookingAppointment } from "@/lib/supabase";
import {
  FOUNDER_NAME,
  BRAND_NAME,
  getWhatsAppUrl,
  formatBookingWhatsAppMessage,
} from "@/lib/utils";

const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "07:30 PM",
  "09:00 PM",
];

const TIMEZONES = [
  "Asia/Karachi (PKT, UTC+5)",
  "Asia/Dubai (GST, UTC+4)",
  "Europe/London (GMT/BST, UTC+0)",
  "America/New_York (EST/EDT, UTC-5)",
  "America/Los_Angeles (PST/PDT, UTC-8)",
];

const TOPICS = [
  "Meta & Google Ads Funnel Scaling (High-ROAS)",
  "24/7 WhatsApp AI Customer & Sales Bot",
  "n8n Workflow Automation Architecture",
  "High-Speed Web & E-Commerce Store Build",
  "Business Process Bottleneck Audit",
];

export default function AppointmentBookingPage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });

  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [selectedTimezone, setSelectedTimezone] = useState(TIMEZONES[0]);
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }

    setLoading(true);

    const formattedMsg = formatBookingWhatsAppMessage({
      name: name.trim(),
      email: email.trim(),
      topic: selectedTopic,
      date: selectedDate,
      timeSlot: selectedTime,
      timezone: selectedTimezone,
      notes: notes.trim(),
    });
    const waUrl = getWhatsAppUrl(formattedMsg);
    setGeneratedWhatsAppUrl(waUrl);

    try {
      // Non-blocking storage backup
      await submitBookingAppointment({
        name: name.trim(),
        email: email.trim(),
        topic: selectedTopic,
        date: selectedDate,
        timeSlot: selectedTime,
        timezone: selectedTimezone,
        notes: notes.trim(),
      });
    } catch (err) {
      console.warn("Storage backup notice:", err);
    } finally {
      // Immediate redirect to WhatsApp with pre-filled details
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
      setConfirmed(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // ignore
      }
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
          <CalendarIcon className="w-3.5 h-3.5" />
          <span>One-on-One Strategy Call</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          Book a 30-Min Strategy Call.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Pick a time that fits your schedule to speak directly with Nadir Habib about scaling your marketing or automating business operations.
        </p>
      </div>

      {confirmed ? (
        <div className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
              Strategy Session Confirmed!
            </h2>
            <p className="text-neutral-600 text-sm max-w-md mx-auto">
              Your 30-minute consultation with <strong>{FOUNDER_NAME}</strong> has been logged in our system.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm text-neutral-800">
            <div className="flex items-center justify-between border-b border-orange-200/60 pb-2">
              <span className="text-neutral-500">Attendee:</span>
              <strong>{name} ({email})</strong>
            </div>
            <div className="flex items-center justify-between border-b border-orange-200/60 pb-2">
              <span className="text-neutral-500">Date & Slot:</span>
              <strong>{selectedDate} at {selectedTime}</strong>
            </div>
            <div className="flex items-center justify-between border-b border-orange-200/60 pb-2">
              <span className="text-neutral-500">Timezone:</span>
              <span>{selectedTimezone.split(" ")[0]}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-neutral-500">Topic:</span>
              <strong className="text-orange-700">{selectedTopic}</strong>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generatedWhatsAppUrl || getWhatsAppUrl(formatBookingWhatsAppMessage({ name, email, topic: selectedTopic, date: selectedDate, timeSlot: selectedTime, timezone: selectedTimezone, notes }))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Open Chat on WhatsApp Now</span>
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-neutral-800 font-semibold text-xs sm:text-sm transition-all text-center"
            >
              Return to Homepage
            </Link>
          </div>

          <p className="text-[11px] text-neutral-500 max-w-sm mx-auto">
            If WhatsApp did not open automatically, tap the green button above to deliver your strategy request directly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleBooking}
          className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-10 space-y-8"
        >
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* 1. Topic Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
              1. Select Discussion Topic
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {TOPICS.map((topic) => (
                <button
                  type="button"
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-3 rounded-2xl text-xs sm:text-sm font-medium text-left border transition-all ${
                    selectedTopic === topic
                      ? "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-sm"
                      : "bg-white hover:bg-gray-50 border-gray-200 text-neutral-700"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Date & Timezone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                2. Choose Date
              </label>
              <input
                type="date"
                required
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Your Timezone
              </label>
              <select
                value={selectedTimezone}
                onChange={(e) => setSelectedTimezone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                {TIMEZONES.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Slot Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
              3. Available Time Slots (30 mins)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {TIME_SLOTS.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                    selectedTime === slot
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                      : "bg-white hover:bg-gray-50 border-gray-200 text-neutral-700"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Attendee Info */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
              4. Your Details
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-neutral-700 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asad Khan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-700 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="asad@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-neutral-700 block mb-1">
                Project Notes / Current Numbers (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your ad spend, current daily orders, or the bottleneck you want to solve..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-[0.99] disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <span>Formatting Details & Opening WhatsApp...</span>
              ) : (
                <>
                  <CalendarIcon className="w-4 h-4" />
                  <span>Confirm Strategy Call with {FOUNDER_NAME}</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-neutral-500 text-center mt-2">
              Free 30-minute discovery call via Google Meet or Phone. Zero sales pressure.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
