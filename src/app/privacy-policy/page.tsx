import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { BRAND_NAME, FOUNDER_NAME, EMAIL_CONTACT } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data protection practices for ${BRAND_NAME} and founder ${FOUNDER_NAME}.`,
  alternates: {
    canonical: "https://www.digizier.com/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          Last Updated: October 2026 • Effective Date: October 2026
        </p>
      </div>

      <div className="rounded-3xl bg-white border border-gray-200/80 shadow-soft p-6 sm:p-10 space-y-6 text-sm text-neutral-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">1. Overview</h2>
          <p>
            {BRAND_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), founded and operated by {FOUNDER_NAME} in Karachi, Pakistan, is committed to respecting and protecting the privacy of our visitors, clients, and community members. This Privacy Policy details how we collect, store, and process information across <strong>https://www.digizier.com/</strong>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Inquiry & Contact Data:</strong> When you complete our contact or booking form, we collect your name, email address, optional phone/WhatsApp number, requested service, and project notes.</li>
            <li><strong>Local Storage Data:</strong> We store draft contact and booking information in your browser&apos;s localStorage as an offline resilience mechanism. This stays strictly on your personal device.</li>
            <li><strong>Analytics & Server Logs:</strong> Standard edge CDN logs (such as Cloudflare and Vercel) which collect IP addresses and user agents purely for DDoS mitigation and performance audits.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">3. Zero Data Sale Guarantee</h2>
          <p>
            We strictly never sell, rent, monetize, or trade your personal information or business inquiry data with third-party advertisers, data brokers, or marketing networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">4. Third-Party Integrations</h2>
          <p>
            Our website utilizes trusted, privacy-aligned cloud providers:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Supabase:</strong> For secure database storage protected by PostgreSQL Row-Level Security (RLS).</li>
            <li><strong>Cloudflare & Vercel:</strong> For global static asset distribution and edge CDN caching.</li>
            <li><strong>WhatsApp:</strong> When you choose to click WhatsApp chat links, interaction occurs directly within WhatsApp according to Meta&apos;s privacy policies.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900">5. Contact Information</h2>
          <p>
            If you have questions regarding this policy or wish to request the deletion of any inquiry data, please contact {FOUNDER_NAME} directly at:
          </p>
          <p className="font-semibold text-neutral-900 inline-flex items-center gap-1">
            <span>Email:</span>
            <a
              href="mailto:info%40digizier.com"
              className="text-orange-600 hover:underline inline-flex items-center"
              aria-label="Contact Email"
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
