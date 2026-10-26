import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Terminal,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { FOUNDER_STORY } from "@/data/siteData";
import {
  FOUNDER_NAME,
  FOUNDER_LOCATION,
  FOUNDER_TITLE,
  FOUNDER_ROLE,
  BRAND_NAME,
  WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from "@/lib/utils";

export const metadata: Metadata = {
  title: `About ${FOUNDER_NAME} — Founder & CEO`,
  description:
    "Meet Nadir Habib, CEO of Digizier in Karachi. Expert in high-ROAS Meta & Google ad funnels, WhatsApp AI chatbots, and automated n8n workflow systems.",
  alternates: {
    canonical: "https://www.digizier.com/about/",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Leadership & Agency Vision</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.15]">
            Hi, I&apos;m {FOUNDER_NAME}. <br />
            <span className="text-orange-500">I Scale Traffic & Automate Operations.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            As the CEO & Founder of {BRAND_NAME} based in {FOUNDER_LOCATION}, I specialize in bridging high-converting digital marketing with autonomous AI agents and n8n workflow systems. I help businesses turn ad traffic into real sales and eliminate manual operational bottlenecks.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/appointment-booking/"
              prefetch={false}
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 30-Min Strategy Call</span>
            </Link>

            <a
              href={getWhatsAppUrl("👋 *Hi Nadir!* I am contacting you from the *About* page to discuss working together on marketing & automation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Founder Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="text-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-0.5 rounded-full">
                Our Founder & Leader of Digizier
              </span>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 border border-orange-200/80 portrait-glow">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-orange-50">
                <Image
                  src="/images/nadir-habib.jpg"
                  alt={`${FOUNDER_NAME} — CEO & Founder of Digizier`}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  unoptimized
                  priority
                />

                {/* Translucent overlay badge inside bottom */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-white/15 text-white shadow-xl space-y-0.5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{FOUNDER_NAME}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-orange-500 text-white font-mono text-[9px] font-bold uppercase tracking-wider">
                      CEO & FOUNDER
                    </span>
                  </div>
                  <div className="text-xs text-orange-200 font-semibold leading-tight">{FOUNDER_ROLE}</div>
                  <div className="text-[10px] text-neutral-300">CEO & Founder of Digizier • {FOUNDER_LOCATION}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story & Philosophy */}
      <section className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-10 lg:p-12 space-y-8">
        <SectionHeading
          badge="Agency Philosophy"
          title="Why We Build &"
          highlight="How We Work."
          description="A founder-led perspective on honest marketing, engineering discipline, and measurable client results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-neutral-700 leading-relaxed">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              Turning Marketing Into Predictable Customer Revenue
            </h3>
            <p>{FOUNDER_STORY.paragraph1}</p>
            <p>
              Many businesses treat digital marketing and software development as completely separate worlds. Marketers run ads to slow websites that lose half their traffic before the page even loads, while developers build complex applications without thinking about conversion rates.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              The Digizier Advantage
            </h3>
            <p>{FOUNDER_STORY.paragraph2}</p>
            <p>{FOUNDER_STORY.paragraph3}</p>
          </div>
        </div>
      </section>

      {/* Pillars of Execution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-soft space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900">
            Performance Marketing Standards
          </h3>
          <ul className="space-y-3 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>Server-Side CAPI Tracking:</strong> 100% accurate conversion data sent to Meta and Google to combat iOS tracking loss.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>Creative Testing Frameworks:</strong> Systematic angle and hook testing to find sustainable, scalable ROAS.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>Low-Friction Funnels:</strong> Direct WhatsApp checkout and rapid one-step landing pages for maximum conversion.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-soft space-y-4">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
            <Workflow className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900">
            Automation & Engineering Standards
          </h3>
          <ul className="space-y-3 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>Zero Infrastructure Waste:</strong> Static exports on Cloudflare and Vercel for \$0 monthly serverless fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>Practical Guardrails:</strong> AI bots equipped with strict schemas, accurate tool calls, and human escalations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span><strong>Full Client Ownership:</strong> You own 100% of your workflows, code repositories, and ad accounts.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Box */}
      <section className="rounded-3xl bg-orange-50 border border-orange-200/80 p-8 sm:p-12 text-center space-y-5">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">
          Want to discuss scaling your ads or automating operations?
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 max-w-xl mx-auto">
          Whether you need a full ad funnel audit, a WhatsApp AI sales agent, or a custom web build, let&apos;s connect directly.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/appointment-booking/"
            prefetch={false}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Book 30-Min Strategy Call
          </Link>
          <Link
            href="/contact/"
            prefetch={false}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-neutral-800 font-semibold text-xs sm:text-sm transition-all"
          >
            Send Inquiry Form
          </Link>
        </div>
      </section>
    </div>
  );
}
