import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BRAND_NAME, FOUNDER_NAME, EMAIL_CONTACT } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms of service and engagement terms for ${BRAND_NAME} and founder ${FOUNDER_NAME}.`,
  alternates: {
    canonical: "https://www.digizier.com/terms/",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          Last Updated: October 2026 • Effective Date: October 2026
        </p>
      </div>

      <div className="rounded-3xl bg-white border border-gray-200/80 shadow-soft p-6 sm:p-10 space-y-6 text-sm text-neutral-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing <strong>https://www.digizier.com/</strong>, booking a discovery consultation, or engaging {BRAND_NAME} for AI automation or web development services, you agree to comply with these terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">2. Professional Services & Scoping</h2>
          <p>
            All professional engagements (such as autonomous AI agent development, n8n workflow pipelines, custom websites, and consulting) are governed by specific project statements of work (SOW) agreed between the client and {FOUNDER_NAME}. We provide realistic estimates and do not guarantee arbitrary revenue increases or viral outcomes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">3. Intellectual Property Rights</h2>
          <p>
            Upon full payment for completed custom software and automation scripts, clients receive complete ownership of custom workflows, code repositories, and configurations engineered specifically for their business. Open-source libraries and standard framework tooling remain under their respective licenses.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">4. Responsible AI Usage</h2>
          <p>
            We adhere to ethical AI guidelines. We will not engineer autonomous systems designed for deceptive spamming, illegal automated scraping, phishing, or harmful content generation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">5. Inquiries & Legal Notices</h2>
          <p>
            For legal inquiries or questions regarding contractual terms, please contact:
          </p>
          <p className="font-semibold text-neutral-900 inline-flex items-center gap-1">
            <span>Email:</span>
            <a
              href="mailto:info%40digizier.com"
              className="text-orange-600 hover:underline inline-flex items-center"
              aria-label="Legal Inquiries Email"
            >
              <span>info</span>
              <span className="text-orange-500 font-semibold">&#64;</span>
              <span>digizier.com</span>
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
