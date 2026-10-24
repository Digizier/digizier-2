# Digizier — Digital Marketing & AI Automation Agency
> **CEO & Founder:** Nadir Habib  
> **Location:** Karachi, Pakistan  
> **Official Website:** [digizier.com](https://www.digizier.com/)  
> **Direct WhatsApp:** [+92 322 2685688](https://wa.me/92322268568)  

---

## ⚡ Overview

**Digizier** is a founder-led digital marketing and AI automation agency by **Nadir Habib**. Digizier specializes in:
1. **Performance Digital Marketing:** High-ROAS Meta (Facebook & Instagram) and Google ad campaigns with server-side Meta Conversions API (CAPI) tracking.
2. **Autonomous AI Agents & WhatsApp Bots:** 24/7 bilingual sales and customer support bots in English & Urdu that qualify leads and take orders.
3. **n8n Workflow Automation:** Automated webhook pipelines connecting CRMs, payment alerts, couriers, and Google Sheets.
4. **High-Speed Web & E-Commerce Development:** Sub-second, zero-load web architectures built with Next.js 15+ and Tailwind CSS.
5. **Business Process Automation:** Eliminating manual operational bottlenecks through structured workflow integrations.

---

## 🎨 Visual Identity & Founder Branding

- **Brand Position:** Digital Marketing & AI Automation Agency
- **Founder:** Nadir Habib — CEO & Founder of Digizier
- **Palette:** Soft Orange (`#F97316`, `#FFF1E8`), Deep Black (`#171717`), Pure White, and Warm Off-White (`#FAF9F6`).
- **Clean Structure:** Subtle vertical line grid in pure CSS (`bg-texture-lines`), restrained editorial card shadows, and natural portrait presentation with warm glow.
- **Mobile-First UX:**
  - Dedicated **Mobile Bottom Navigation Bar (Tab Bar)** for fast thumb-reach navigation on `< 768px` devices.
  - 2-Column Mobile Grids for compact badges and trust indicators.
  - Touch targets strictly $\ge 44\text{px} \times 44\text{px}$.
  - Zero horizontal overflow across all viewports (`320px` to `1440px+`).

---

## 🏗️ Zero-Load Free-Tier Architecture Standards

- **Next.js 15+ App Router** with Static Site Generation (`output: 'export'`).
- **0ms Serverless Execution** for static page browsing.
- **0 ISR Reads & 0 ISR Writes**.
- **Images:** `images: { unoptimized: true }` streaming directly without consuming transformation quotas.
- **Supabase Integration:** Client-side database connectivity with PostgreSQL Row-Level Security (RLS) and automatic localStorage offline persistence.
- **Single Consolidated CTA:** 1 purposeful hero action + 1 non-intrusive floating WhatsApp action.

---

## 🚀 Navigation & Page Structure

- `/` — **Homepage** (Hero with Founder Portrait, Trust Strip, Capabilities, Services, Selected Work, Unified Growth Engine, Story, Final CTA)
- `/about/` — **About Nadir Habib** (CEO & Founder leadership, agency philosophy, performance marketing & automation standards)
- `/services/` — **Detailed Services** (All 6 core services with use cases and deliverables)
- `/portfolio/` — **Selected Work** (Case studies: Dana Groups Dubai, Nivasa Builds Canada, ekglobal Capital, Imani's Collection, ElectricPartsOnline, New Taj Palace)
- `/blog/` — **Articles & Guides** (In-depth practical articles with collapsible interactive reading)
- `/contact/` — **Contact Page** (Validated interactive inquiry form + WhatsApp + Email + Location)
- `/appointment-booking/` — **Appointment Booking** (30-min discovery call scheduler with slot & timezone picker, confetti celebration)
- `/image-generator/` — **AI Prompt Studio** (Interactive prompt engineering tool with aspect ratio preview)
- `/privacy-policy/` — **Privacy Policy**
- `/terms/` — **Terms & Conditions**
- `/robots.txt` & `/sitemap.xml` — **Search Engine Readiness**

---

## 💻 Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Compile static export (generates ./out)
npm run build
```

---

## ☁️ Deployment

### Cloudflare Pages
```bash
npx wrangler pages deploy ./out --project-name digizier
```

### Vercel
Deploy the repository directly on Vercel with framework preset **Next.js**; output will automatically be served as pure static assets from the global Vercel Edge CDN with zero serverless invocations and zero free-tier limit risks.

---

© 2026 Digizier. Founded and built by Nadir Habib. All rights reserved.
