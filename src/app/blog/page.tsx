"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/data/siteData";
import { BRAND_NAME, getWhatsAppUrl } from "@/lib/utils";

export default function BlogPage() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(BLOG_POSTS[0]?.slug || null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Blog Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Articles & Case Studies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          Digital Marketing & AI Automation Insights.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Actionable frameworks on scaling Meta ads, deploying WhatsApp AI bots, and building zero-cost web systems written by Nadir Habib.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {BLOG_POSTS.map((post) => {
          const isExpanded = expandedSlug === post.slug;

          return (
            <article
              key={post.slug}
              className={`rounded-3xl bg-white border transition-all ${
                isExpanded
                  ? "border-orange-300 shadow-card p-6 sm:p-8"
                  : "border-gray-200/80 shadow-soft hover:border-gray-300 p-6"
              }`}
            >
              {/* Header info */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishedDate}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h2
                  onClick={() => toggleExpand(post.slug)}
                  className="text-xl sm:text-2xl font-bold text-neutral-900 hover:text-orange-600 cursor-pointer transition-colors leading-snug"
                >
                  {post.title}
                </h2>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 text-neutral-600 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed animate-in fade-in duration-200">
                  {post.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  <div className="pt-4 flex items-center justify-between text-xs text-neutral-500 border-t border-gray-100">
                    <span>Published by Nadir Habib • {BRAND_NAME}</span>
                    <a
                      href={getWhatsAppUrl(`Hi Nadir! I read your article "${post.title}" and would like to discuss implementing this for my business.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Discuss on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Expand / Collapse Button */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleExpand(post.slug)}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 focus:outline-none"
                >
                  <span>{isExpanded ? "Collapse Article" : "Read Full Article"}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Consultation Banner */}
      <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-xl sm:text-3xl font-extrabold text-white">
          Want a Custom Audit for Your Business?
        </h2>
        <p className="text-sm text-neutral-300 max-w-lg mx-auto">
          We review your existing ad accounts, conversion rates, and operational spreadsheets to show you where revenue is being left on the table.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/appointment-booking/"
            prefetch={false}
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            Schedule 30-Min Discovery Call
          </Link>
          <a
            href={getWhatsAppUrl("👋 *Hi Nadir!* I want to request a digital marketing & automation audit for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
