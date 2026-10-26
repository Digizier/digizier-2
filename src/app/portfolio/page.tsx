"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MapPin,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PROJECTS } from "@/data/siteData";
import { BRAND_NAME, getWhatsAppUrl } from "@/lib/utils";

const CATEGORIES = ["All", "Digital Marketing", "AI Automation", "Web Development", "E-Commerce"] as const;

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Portfolio Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Case Studies & Implementations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          Selected Client Work.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Real campaigns, automated systems, and custom web builds engineered by Digizier for Pakistani and international clients.
        </p>

        {/* Filter Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                selectedCategory === category
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-3xl bg-white border border-gray-200/80 shadow-soft hover:shadow-card hover:border-orange-200 transition-all p-6 sm:p-7 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Category & Location */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  {project.category}
                </span>
                <span className="text-neutral-500 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-500" />
                  <span>{project.location}</span>
                </span>
              </div>

              {/* Title & Client */}
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  {project.title}
                </h2>
                <span className="text-xs text-neutral-500 font-medium">
                  Client: {project.client}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {project.description}
              </p>

              {/* Challenge / Solution breakdown */}
              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2 text-xs">
                <div>
                  <strong className="text-neutral-900 block font-semibold">Challenge:</strong>
                  <span className="text-neutral-600">{project.challenge}</span>
                </div>
                <div>
                  <strong className="text-neutral-900 block font-semibold">Engineered Solution:</strong>
                  <span className="text-neutral-600">{project.solution}</span>
                </div>
              </div>

              {/* Verified Results Badge */}
              {project.results && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium flex items-start gap-2 border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{project.results}</span>
                </div>
              )}
            </div>

            {/* Bottom Tech & CTA */}
            <div className="pt-5 mt-4 border-t border-gray-100 space-y-3">
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded bg-gray-100 text-neutral-600 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(`👋 *Hi Nadir!* I saw your case study on *${project.title}* and want to discuss a similar project for my business.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="rounded-3xl bg-orange-50 border border-orange-200/80 p-8 sm:p-12 text-center space-y-5">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">
          Have an advertising funnel or automation in mind?
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 max-w-xl mx-auto">
          We take on a focused number of client projects each month to ensure dedicated strategic attention.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/appointment-booking/"
            prefetch={false}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Schedule Discovery Session
          </Link>
          <Link
            href="/contact/"
            prefetch={false}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-neutral-800 font-semibold text-xs sm:text-sm transition-all"
          >
            Inquire via Contact Form
          </Link>
        </div>
      </div>
    </div>
  );
}
