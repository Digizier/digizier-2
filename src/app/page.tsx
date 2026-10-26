"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Workflow,
  Cpu,
  Code2,
  TrendingUp,
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ChevronRight,
  Send,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import {
  CAPABILITIES,
  SERVICES,
  PROJECTS,
  FOUNDER_STORY,
} from "@/data/siteData";
import {
  FOUNDER_NAME,
  FOUNDER_LOCATION,
  FOUNDER_TITLE,
  FOUNDER_ROLE,
  BRAND_NAME,
  getWhatsAppUrl,
} from "@/lib/utils";

export default function HomePage() {
  const [activeCapability, setActiveCapability] = useState<string>("01");

  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-orange-500" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-orange-500" />,
    Workflow: <Workflow className="w-5 h-5 text-orange-500" />,
    Code2: <Code2 className="w-5 h-5 text-orange-500" />,
    Cpu: <Cpu className="w-5 h-5 text-orange-500" />,
    Compass: <Compass className="w-5 h-5 text-orange-500" />,
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* ========================================================
          1. HERO SECTION: FOUNDER & AGENCY INTRODUCTION
          ======================================================== */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 hero-glow overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Text & Positioning */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge & Agency Framing */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Digital Marketer & AI Automation Agency</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.12]">
                Digital Marketing & AI Automation Made{" "}
                <span className="text-orange-500 underline decoration-orange-200 underline-offset-4">
                  Practical.
                </span>
              </h1>

              {/* Supporting Copy (Humanized & Benefit-Driven) */}
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                We help ambitious businesses scale customer acquisition with high-ROAS ad campaigns and eliminate repetitive operational work with custom autonomous AI agents.
              </p>

              {/* Action Buttons (Book a Call removed per user request) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/contact/"
                  prefetch={false}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Let&apos;s Work Together</span>
                </Link>

                <Link
                  href="/portfolio/"
                  prefetch={false}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 active:scale-[0.98] text-neutral-800 font-semibold text-sm border border-gray-200/90 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                </Link>

                <a
                  href={getWhatsAppUrl("👋 *Hi Nadir!* I want to discuss a digital marketing or AI automation project for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Two-Column Mobile / 3-Column Desktop Mini Stats */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left border-t border-gray-200/60">
                <div className="p-3 rounded-2xl bg-white/70 border border-gray-200/60 shadow-soft">
                  <span className="text-xs font-semibold text-neutral-500 block uppercase tracking-wide">
                    Core Focus
                  </span>
                  <span className="text-sm font-bold text-neutral-900 mt-0.5 block">
                    Ads & AI Agents
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/70 border border-gray-200/60 shadow-soft">
                  <span className="text-xs font-semibold text-neutral-500 block uppercase tracking-wide">
                    Architecture
                  </span>
                  <span className="text-sm font-bold text-orange-600 mt-0.5 block">
                    Zero-Load Speed
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/70 border border-gray-200/60 shadow-soft">
                  <span className="text-xs font-semibold text-neutral-500 block uppercase tracking-wide">
                    Leadership
                  </span>
                  <span className="text-sm font-bold text-neutral-900 mt-0.5 block">
                    {FOUNDER_NAME}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Portrait of Founder Nadir Habib with overlay inside bottom */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Top Label: Our Founder & Leader of Digizier */}
                <div className="text-center mb-2.5">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-orange-600 bg-orange-100/90 px-3.5 py-1 rounded-full border border-orange-200 shadow-sm">
                    Our Founder & Leader of Digizier
                  </span>
                </div>

                {/* Organic backdrop ring */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-orange-400/20 via-orange-200/30 to-amber-100/40 blur-2xl -z-10 transform scale-95" />

                <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border border-orange-200/70 portrait-glow">
                  {/* Photo Container with overlay inside bottom */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-orange-50">
                    <Image
                      src="/images/nadir-habib.jpg"
                      alt="Nadir Habib — CEO & Founder of Digizier"
                      width={800}
                      height={1000}
                      priority
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      unoptimized
                    />

                    {/* Translucent overlay inside bottom of photo as requested */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-white/15 text-white shadow-xl space-y-0.5">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{FOUNDER_NAME}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-orange-500 text-white font-bold uppercase tracking-wider">
                          FOUNDER & CEO
                        </span>
                      </div>
                      <div className="text-xs text-orange-200 font-semibold leading-tight">
                        Digital Marketer & AI Automation Specialist
                      </div>
                      <div className="text-[10px] text-neutral-300">
                        CEO & Founder of Digizier • {FOUNDER_LOCATION}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TRUST & EXPERTISE STRIP (DIGITAL MARKETING & AI CONTEXT)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/70 shadow-soft">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-2 sm:p-3 rounded-xl bg-orange-50/50 flex flex-col items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-500 mb-1" />
              <span className="text-xs sm:text-sm font-bold text-neutral-900">Performance Ads</span>
              <span className="text-[10px] text-neutral-500">Meta & Google ROAS</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-orange-50/50 flex flex-col items-center justify-center">
              <Bot className="w-5 h-5 text-orange-500 mb-1" />
              <span className="text-xs sm:text-sm font-bold text-neutral-900">AI WhatsApp Bots</span>
              <span className="text-[10px] text-neutral-500">24/7 Sales & Support</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-orange-50/50 flex flex-col items-center justify-center">
              <Workflow className="w-5 h-5 text-orange-500 mb-1" />
              <span className="text-xs sm:text-sm font-bold text-neutral-900">n8n Automation</span>
              <span className="text-[10px] text-neutral-500">Connected Tools & CRM</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-orange-50/50 flex flex-col items-center justify-center">
              <Code2 className="w-5 h-5 text-orange-500 mb-1" />
              <span className="text-xs sm:text-sm font-bold text-neutral-900">High-Speed Web</span>
              <span className="text-[10px] text-neutral-500">Sub-Second Conversions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. "WHAT WE BUILD & SCALE" (CAPABILITIES - REFERENCE CARD)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Digital Marketing & AI Automation Systems We Build & Scale
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Combining high-converting advertising channels with intelligent automation pipelines to solve real operational bottlenecks.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/"
                  prefetch={false}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 group"
                >
                  <span>Explore all service specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Verified Tech Strip */}
              <div className="pt-6 border-t border-gray-100">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2.5">
                  Production Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Meta Ads Manager", "Google Ads", "Meta CAPI Tracking", "Next.js 15", "n8n Pipelines", "Supabase RLS", "Claude & OpenAI API", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 text-neutral-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Structured Capabilities List */}
            <div className="lg:col-span-7 space-y-3">
              {CAPABILITIES.map((cap) => {
                const isSelected = activeCapability === cap.number;
                return (
                  <div
                    key={cap.number}
                    onClick={() => setActiveCapability(cap.number)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-orange-50/60 border-orange-300 shadow-sm"
                        : "bg-white hover:bg-gray-50 border-gray-200/70"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs font-bold text-orange-500 pt-0.5">
                          {cap.number}
                        </span>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                            {cap.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white border border-gray-200 text-neutral-600 flex-shrink-0">
                        {cap.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SERVICES: PRACTICAL DIGITAL MARKETING & AI SOLUTIONS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge="Services & Solutions"
            title="Practical Solutions for"
            highlight="Real Business Growth."
            description="Clear deliverables, measurable customer acquisition, and reliable automation. No theoretical fluff."
          />
          <Link
            href="/services/"
            prefetch={false}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 self-start sm:self-auto"
          >
            <span>View All 6 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Grid: 2-Column on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-soft hover:shadow-card hover:border-orange-200 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-100/70 border border-orange-200/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {iconMap[service.iconName] || <Bot className="w-5 h-5 text-orange-500" />}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-0.5">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Use Case Bullet */}
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide block mb-1.5">
                    Primary Use Case:
                  </span>
                  <div className="text-xs text-neutral-700 flex items-start gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{service.useCases[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href={`/services/#${service.id}`}
                  prefetch={false}
                  className="w-full py-2.5 rounded-xl bg-gray-50 hover:bg-orange-50 hover:text-orange-600 text-neutral-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Explore Deliverables</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. SELECTED WORK / PORTFOLIO PREVIEW
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge="Verified Projects"
            title="Selected"
            highlight="Work."
            description="Real campaigns, automated systems, and high-performance websites engineered by Digizier."
          />
          <Link
            href="/portfolio/"
            prefetch={false}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 self-start sm:self-auto"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Mobile & Tablet / 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white border border-gray-200/80 shadow-soft hover:shadow-card hover:border-orange-200 transition-all p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {project.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {project.results && (
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900 font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{project.results}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-neutral-600 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/portfolio/"
                  prefetch={false}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-orange-600 transition-colors"
                >
                  <span>Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. TEAM & FOUNDER COLLABORATION (REPLACING BOOK SECTION)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-neutral-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Real AI-Generated Collaborative Team & Founder Picture */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-neutral-700">
                <Image
                  src="/images/digizier-team.jpg"
                  alt="Nadir Habib and the Digizier Digital Marketing & AI Automation Team"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span>Nadir Habib & Core Agency Team</span>
                  <span className="text-orange-400 font-mono text-[10px]">Karachi Studio</span>
                </div>
              </div>
            </div>

            {/* Right: Team Capabilities & High-Conversion Copy */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>The Minds Behind Digizier</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Digital Marketers & AI Engineers Working as One.
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                At Digizier, our team combines senior media buyers running data-driven Meta and Google ad campaigns with technical AI automation engineers. We make sure every dollar of ad spend is backed by instant automated customer engagement and friction-free checkout.
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-200 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Dedicated Media Buying:</strong> High-ROAS Meta & Google ad funnels tailored for e-commerce and B2B services.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Full-Stack n8n & Bot Developers:</strong> Custom WhatsApp AI agents that answer questions and confirm orders 24/7.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero-Cost Web Systems:</strong> Lightning-fast static architectures with zero monthly hosting fees.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contact/"
                  prefetch={false}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Project With Us</span>
                </Link>

                <a
                  href={getWhatsAppUrl("👋 *Hi Nadir & Digizier Team!* I want to consult with you on scaling our ad funnels and automated systems.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. ABOUT THE FOUNDER & LEADER (CLEAN & PROFESSIONAL)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/70 text-orange-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Founder Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                {FOUNDER_STORY.quote}
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {FOUNDER_STORY.paragraph1}
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {FOUNDER_STORY.paragraph2}
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {FOUNDER_STORY.paragraph3}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/about/"
                  prefetch={false}
                  className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Read Full About Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getWhatsAppUrl("👋 *Hi Nadir!* I would like to consult with you directly on a digital marketing or AI automation project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Founder Leadership Card */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200/70 space-y-3">
                <span className="text-xs font-bold text-orange-800 uppercase tracking-wide block">
                  Agency Leadership & Experience
                </span>
                
                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>CEO & Founder of Digizier</strong>
                      <div className="text-xs text-neutral-600">Leading performance marketing and autonomous AI engineering</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Digital Marketer & AI Specialist</strong>
                      <div className="text-xs text-neutral-600">Meta CAPI tracking, WhatsApp bots, and automated order pipelines</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Verified Zero-Load Web Systems</strong>
                      <div className="text-xs text-neutral-600">Next.js Static Export + Cloudflare with \$0 serverless expenses</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2-Column Mobile Mini Grid for Values */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80 text-center">
                  <span className="text-lg font-black text-neutral-900 block">100%</span>
                  <span className="text-[11px] text-neutral-500">Measurable ROI</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-gray-200/80 text-center">
                  <span className="text-lg font-black text-orange-600 block">0ms</span>
                  <span className="text-[11px] text-neutral-500">Zero Serverless Waste</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. FINAL CALL TO ACTION (EDITORIAL SOFT-ORANGE)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-orange-50 border border-orange-200/80 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-soft">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Ready to Grow Your Business?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Scale Digital Marketing or Deploy AI Agents?
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 max-w-xl mx-auto leading-relaxed">
            Let&apos;s discuss your business, look at your numbers, and explore how our digital marketing funnels and AI automations can increase your bottom line.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <Link
              href="/contact/"
              prefetch={false}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Project Inquiry</span>
            </Link>

            <a
              href={getWhatsAppUrl("👋 *Hi Nadir!* I have a project inquiry and would like to discuss our marketing funnels & automation directly.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 active:scale-[0.98] text-neutral-800 font-semibold text-sm border border-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <p className="text-xs text-neutral-500 pt-2">
            Direct communication with Nadir Habib. 100% focused on technical feasibility and direct business value.
          </p>
        </div>
      </section>
    </div>
  );
}
