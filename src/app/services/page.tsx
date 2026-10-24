import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Bot,
  Workflow,
  Cpu,
  Code2,
  TrendingUp,
  Compass,
  CheckCircle2,
  Sparkles,
  Calendar,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES } from "@/data/siteData";
import { BRAND_NAME, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Digital Marketing & AI Automation Services | ${BRAND_NAME}`,
  description:
    "Explore Digizier's core services: performance Meta and Google ad campaigns, autonomous AI customer agents, n8n workflow automation, and zero-load web development.",
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-6 h-6 text-orange-500" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-orange-500" />,
    Workflow: <Workflow className="w-6 h-6 text-orange-500" />,
    Code2: <Code2 className="w-6 h-6 text-orange-500" />,
    Cpu: <Cpu className="w-6 h-6 text-orange-500" />,
    Compass: <Compass className="w-6 h-6 text-orange-500" />,
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Spectrum Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          Digital Marketing & AI Automation Services.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          We combine customer acquisition engines with automated backend workflows to help businesses scale revenue without adding headcount.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="space-y-10">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-3xl bg-white border border-gray-200/80 shadow-soft p-6 sm:p-10 scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100/70 border border-orange-200/50 flex items-center justify-center">
                    {iconMap[service.iconName] || <Bot className="w-6 h-6 text-orange-500" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-orange-500">
                    SERVICE #{index + 1}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-orange-600">
                  {service.tagline}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  <Link
                    href={`/appointment-booking/?service=${encodeURIComponent(service.title)}`}
                    prefetch={false}
                    className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs shadow-sm transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book for this Service</span>
                  </Link>

                  <a
                    href={getWhatsAppUrl(`👋 *Hi Nadir!* I'm interested in discussing your *${service.title}* service for my business.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 text-neutral-700 font-medium text-xs transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Use Cases & Deliverables */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50/70 p-6 rounded-2xl border border-gray-100">
                {/* Use cases */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    Real-World Applications
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    {service.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">
                    What You Receive
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    {service.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Step Engineering Process */}
      <section className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-10 space-y-8">
        <SectionHeading
          badge="Execution Framework"
          title="How We Execute &"
          highlight="Deliver."
          description="A clear, predictable roadmap from initial audit to scaling and maintenance."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
          {[
            {
              step: "01",
              title: "Audit & Strategy",
              desc: "We analyze your customer funnel, ad account numbers, and manual bottlenecks to determine the highest-ROI actions.",
            },
            {
              step: "02",
              title: "Architecture & Setup",
              desc: "We configure server-side CAPI tracking, build n8n webhook schemas, and design custom conversion funnels.",
            },
            {
              step: "03",
              title: "Launch & Optimization",
              desc: "We launch targeted campaigns and train autonomous AI bots with strict guardrails, monitoring daily metrics.",
            },
            {
              step: "04",
              title: "Scale & Automated Handshake",
              desc: "We scale winning ad angles and maintain automated reporting pipelines, keeping your operations seamless.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100 flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="font-mono text-xl font-black text-orange-500 block mb-1">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 text-center space-y-5">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          Ready to review your digital marketing and automation stack?
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
          Schedule a direct 30-minute discovery session with Nadir Habib to identify which growth levers will move the needle fastest.
        </p>
        <div className="pt-2">
          <Link
            href="/appointment-booking/"
            prefetch={false}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Discovery Session</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
