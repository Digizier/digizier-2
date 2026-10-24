export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  useCases: string[];
  deliverables: string[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: "Digital Marketing" | "AI Automation" | "Web Development" | "E-Commerce";
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "Autonomous AI Agents",
    description: "Building 24/7 intelligent WhatsApp and web bots that qualify leads, answer customer questions, and take orders automatically.",
    badge: "AI Agents",
  },
  {
    number: "02",
    title: "Performance Digital Marketing",
    description: "Running data-driven Meta and Google ad campaigns optimized for high ROAS, reliable customer acquisition, and low CPA.",
    badge: "Growth Ads",
  },
  {
    number: "03",
    title: "n8n Workflow Automation",
    description: "Connecting CRMs, spreadsheets, couriers, and payment alerts so your team never wastes time on repetitive manual work.",
    badge: "Automation",
  },
  {
    number: "04",
    title: "High-Speed Web Development",
    description: "Developing modern, mobile-first websites and e-commerce stores that load in under 1 second with zero serverless costs.",
    badge: "Web Systems",
  },
  {
    number: "05",
    title: "Operations & Conversion Optimization",
    description: "Auditing business funnels, fixing checkout friction, and deploying automated post-purchase communication workflows.",
    badge: "Conversion",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-agents",
    title: "AI Agent Development",
    tagline: "Autonomous customer assistants that work for your business around the clock.",
    description: "We build dedicated AI agents powered by modern LLMs and tool-calling capabilities. From bilingual WhatsApp sales bots in Urdu and English to internal knowledge retrieval assistants, our bots handle concrete operational tasks without hallucinating.",
    iconName: "Bot",
    useCases: [
      "24/7 WhatsApp sales and customer support in English & Urdu",
      "Automated lead qualification and instant CRM record creation",
      "Product catalog search and order placement via messaging",
    ],
    deliverables: [
      "Custom system prompt with business guardrails & knowledge base",
      "Direct WhatsApp Cloud API / Webhook integration",
      "Conversation history logging and human handover trigger",
    ],
  },
  {
    id: "digital-marketing",
    title: "Performance Digital Marketing",
    tagline: "Targeted advertising funnels designed to deliver real customer revenue.",
    description: "We plan, launch, and manage high-converting Meta (Facebook & Instagram) and Google Ad campaigns. We configure full server-side tracking (Meta Conversions API) to ensure accurate attribution and scale winning creative angles profitably.",
    iconName: "TrendingUp",
    useCases: [
      "E-commerce product scaling with high return on ad spend (ROAS)",
      "B2B lead generation funnels for service businesses and agencies",
      "Dynamic retargeting campaigns for abandoned cart recovery",
    ],
    deliverables: [
      "Full ad account audit and competitive market research",
      "Server-side Meta CAPI and Google Tag Manager tracking setup",
      "High-converting ad copy, visual creative briefs, and weekly reporting",
    ],
  },
  {
    id: "n8n-automation",
    title: "n8n Workflow Automation",
    tagline: "Connect your software tools into automated, reliable pipelines.",
    description: "We build and manage production-grade n8n automation pipelines on self-hosted servers or cloud infrastructure. We connect your web forms, CRM, payment gateways, Google Sheets, and messaging tools into unified automatic triggers.",
    iconName: "Workflow",
    useCases: [
      "E-commerce order sync to courier and dispatch APIs",
      "Instant PDF invoice generation and automated WhatsApp delivery",
      "Multi-channel lead alerts sent directly to team group chats",
    ],
    deliverables: [
      "Self-hosted or cloud n8n JSON workflow architecture",
      "Webhook security, data deduplication, and error retry handlers",
      "Complete operational documentation and handoff walkthrough",
    ],
  },
  {
    id: "web-development",
    title: "AI-Powered Web & E-Commerce Development",
    tagline: "Ultra-fast, mobile-first websites engineered for high conversion rates.",
    description: "We build custom websites and online storefronts using Next.js and Tailwind CSS. Built on zero-load static architecture, our websites load instantly across local Pakistani 4G networks and international connections, driving higher checkout completion.",
    iconName: "Code2",
    useCases: [
      "Modern brand websites and corporate company portals",
      "Fast e-commerce storefronts with Cash on Delivery (COD) and local payments",
      "Lead generation landing pages optimized for paid ad traffic",
    ],
    deliverables: [
      "100% Mobile-first responsive UI with sub-second load times",
      "Supabase database integration with Row-Level Security (RLS)",
      "Zero-load static deployment for Vercel and Cloudflare Pages",
    ],
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    tagline: "Eliminate operational bottlenecks and manual data entry.",
    description: "Before applying any software, we map your day-to-day operations step by step. We identify where team members waste hours on repetitive copy-pasting, digitize outdated paper or spreadsheet processes, and introduce automated workflows.",
    iconName: "Cpu",
    useCases: [
      "Automated daily sales reconciliation and reporting",
      "Inventory threshold alerts and automated supplier purchase orders",
      "Staff onboarding checklists and automated document collection",
    ],
    deliverables: [
      "Process flow analysis and workflow optimization diagram",
      "Automated data extraction and sync scripts",
      "System reliability monitoring and uptime safeguards",
    ],
  },
  {
    id: "growth-consulting",
    title: "Growth & Automation Consulting",
    tagline: "Practical strategy sessions focused on profit, not buzzwords.",
    description: "Not sure whether you should invest in paid ads, an AI chatbot, or a workflow rebuild first? We conduct focused strategic consultations to assess your numbers, identify your biggest bottlenecks, and map out a practical 90-day implementation plan.",
    iconName: "Compass",
    useCases: [
      "Marketing funnel audit and ad spend efficiency review",
      "Technology stack review: choosing between Zapier, Make, and n8n",
      "AI customer support feasibility and cost-benefit analysis",
    ],
    deliverables: [
      "Actionable 90-day growth and automation blueprint",
      "Tool recommendations with honest pricing comparisons",
      "Direct 1-on-1 strategy call with founder Nadir Habib",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "dana-groups",
    title: "Dana Groups",
    client: "Dana Groups Dubai",
    location: "Dubai, UAE",
    category: "AI Automation",
    description: "Architected digital web infrastructure and automated inquiry triage pipelines for a prominent commercial business group in the UAE.",
    challenge: "Handling high volumes of international buyer inquiries across time zones without keeping a 24/7 manual desk team.",
    solution: "Built an automated inquiry qualification pipeline that verifies commercial intent and routes high-priority deals directly to senior managers.",
    techStack: ["Next.js", "n8n Automation", "REST APIs", "Tailwind CSS"],
    results: "Inquiry response time reduced to under 3 minutes with structured CRM capture.",
  },
  {
    id: "nivasa-builds",
    title: "Nivasa Builds",
    client: "Nivasa Builds",
    location: "Canada",
    category: "Digital Marketing",
    description: "Engineered a high-conversion property development portal and targeted digital acquisition funnel for modern residential developments.",
    challenge: "Showcasing high-value architectural builds cleanly on mobile while capturing qualified project inquiries.",
    solution: "Deployed a mobile-first digital platform paired with structured inquiry capture forms and automated email confirmation sequences.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Meta CAPI Tracking"],
    results: "Sub-second load times on North American mobile networks with consistent consultation bookings.",
  },
  {
    id: "ekglobal-capital",
    title: "Ehtesham / ekglobal Capital",
    client: "ekglobal Capital",
    location: "Pakistan",
    category: "Digital Marketing",
    description: "Developed capital advisory landing infrastructure and automated consultation booking workflows for private wealth advisory.",
    challenge: "High net-worth clients required an intuitive, discrete booking system without overlapping slots or manual back-and-forth.",
    solution: "Built a clean booking portal with automated calendar sync, WhatsApp confirmation alerts, and CRM contact tagging.",
    techStack: ["React", "Supabase", "n8n", "Tailwind CSS"],
    results: "100% elimination of double-booked advisory slots and zero calendar confusion.",
  },
  {
    id: "imanis-collection",
    title: "Imani's Collection",
    client: "Imani's Fashion",
    location: "Pakistan",
    category: "E-Commerce",
    description: "Custom-coded, high-speed fashion e-commerce storefront with integrated Cash on Delivery (COD) and automated WhatsApp order confirmations.",
    challenge: "Standard WooCommerce store was taking 5+ seconds to load on local mobile connections, hurting ad conversion rates.",
    solution: "Rebuilt the store on a zero-load static Next.js architecture with client-side Supabase cart and direct WhatsApp instant order routing.",
    techStack: ["Next.js", "Tailwind CSS", "Supabase RLS", "WhatsApp API"],
    results: "Page speed improved to 0.6 seconds; conversion rate on Meta ad traffic jumped noticeably.",
  },
  {
    id: "electricpartsonline",
    title: "ElectricPartsOnline.com",
    client: "ElectricPartsOnline",
    location: "Pakistan & Middle East",
    category: "Web Development",
    description: "Industrial B2B electrical parts catalog with instant SKU search, technical specification sheets, and a fast request-for-quote engine.",
    challenge: "Managing thousands of electrical components without paying high monthly database fees for simple search queries.",
    solution: "Created an indexed static catalog with instant client-side search, eliminating database egress costs while delivering instant results.",
    techStack: ["Next.js", "TypeScript", "Indexed Search", "Cloudflare Pages"],
    results: "Zero database bills with instant search across over 2,000 industrial components.",
  },
  {
    id: "new-taj-palace",
    title: "New Taj Palace",
    client: "New Taj Palace",
    location: "Pakistan",
    category: "Digital Marketing",
    description: "Hospitality and banquet hall showcase with an interactive guest calculator and direct banquet manager booking pipeline.",
    challenge: "Prospective banquet clients needed transparent hall views, menu packages, and quick date availability checks.",
    solution: "Developed an interactive event quote estimator connected directly to sales reps on WhatsApp.",
    techStack: ["React", "Tailwind CSS", "Interactive Estimator", "Vercel"],
    results: "Significantly shortened the inquiry-to-hall-visit sales cycle.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "scaling-ecommerce-with-meta-ads-whatsapp-automation",
    title: "How to Scale E-Commerce Sales in Pakistan with Meta Ads and WhatsApp AI Bots",
    excerpt: "Why pairing high-converting Meta ads with an automated 24/7 WhatsApp sales assistant drops customer acquisition cost and cuts order cancellation rates.",
    category: "Digital Marketing",
    publishedDate: "October 20, 2026",
    readTime: "6 min read",
    tags: ["Meta Ads", "WhatsApp AI", "E-Commerce", "ROAS"],
    content: [
      "In Pakistan's e-commerce market, sending ad traffic directly to a traditional website often faces high drop-off rates due to slow mobile internet and hesitation around Cash on Delivery. When shoppers have a question about sizing or delivery timing, any delay causes them to abandon their cart.",
      "By connecting Meta Click-to-WhatsApp ads to an autonomous AI agent, you engage shoppers the exact second they express interest. The bot answers common questions in natural Urdu or English, shares product photos, confirms delivery addresses, and routes the final order directly into your dispatch sheet.",
      "This hybrid setup consistently lowers cost per acquisition while boosting delivery confirmation rates, because customers verify their phone numbers and orders in real time.",
    ],
  },
  {
    slug: "zero-cost-web-architecture-guide",
    title: "The Zero-Load Web Architecture: Running Fast Production Sites at $0 Hosting Cost",
    excerpt: "How we configure Next.js static exports, Cloudflare Pages, and Supabase client-side RLS to support high traffic with zero serverless bills.",
    category: "Web Architecture",
    publishedDate: "October 14, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "Cloudflare", "Supabase", "Zero-Load"],
    content: [
      "When running paid ads or expanding an agency, monthly hosting bills can sneak up on you. Traditional SSR architectures spin up serverless functions on every single page view, charging you for compute even when displaying basic static information.",
      "By configuring Next.js in pure static export mode (`output: 'export'`) and pairing it with Cloudflare Pages, every page is served directly from edge CDN cache for free. When visitors submit contact forms or book appointments, the browser connects directly to Supabase via secure Row-Level Security.",
      "The result is a website that achieves a 100/100 Lighthouse performance score, easily handles ad traffic spikes, and incurs strictly $0 in monthly compute expenses.",
    ],
  },
  {
    slug: "building-practical-ai-agents-with-n8n",
    title: "Building Practical AI Customer Agents with n8n and Modern LLMs",
    excerpt: "A step-by-step breakdown of how to build reliable business automation agents that perform real work instead of just generating chatbot text.",
    category: "AI Automation",
    publishedDate: "October 05, 2026",
    readTime: "7 min read",
    tags: ["AI Agents", "n8n", "Workflow Design", "Automation"],
    content: [
      "Too many businesses waste time experimenting with generic AI chat interfaces that provide no real operational value. A practical AI agent must have clear constraints: an exact business objective, access to verified product data, and the ability to trigger real business actions.",
      "In this guide, we walk through how an n8n workflow receives incoming customer messages, queries an inventory database, calculates shipping fees, and records customer information without needing human intervention for standard inquiries.",
      "By implementing strict tool-calling schemas and fallback conditions, you ensure the AI never makes promises your team cannot keep.",
    ],
  },
  {
    slug: "why-businesses-are-switching-to-self-hosted-n8n",
    title: "Why Businesses Are Switching from Zapier to Self-Hosted n8n Automation",
    excerpt: "Cost comparisons, data privacy, and unlimited workflow flexibility: why n8n is the smarter choice for growing companies.",
    category: "Business Automation",
    publishedDate: "September 24, 2026",
    readTime: "5 min read",
    tags: ["n8n", "Zapier Alternative", "Cost Optimization", "Automation"],
    content: [
      "For companies processing thousands of orders or leads every month, third-party automation tools like Zapier become painfully expensive. Per-task pricing models punish you for growing, eating directly into your profit margins.",
      "Self-hosted n8n gives you unlimited workflow runs on a simple, inexpensive server. It also allows direct database queries, custom scripts, and low-latency integrations with local payment gateways and SMS/WhatsApp providers.",
      "For business owners who care about predictable overhead and data privacy, switching to n8n is one of the highest-ROI infrastructure upgrades you can make.",
    ],
  },
];

export const FOUNDER_STORY = {
  quote: "We don't build tech for the sake of hype. We build systems that generate revenue and save hours.",
  paragraph1:
    "I am Nadir Habib, CEO & Founder of Digizier. Based in Karachi, Pakistan, I work with businesses locally and internationally to solve two fundamental problems: how to acquire customers reliably with performance digital marketing, and how to automate everyday operations so your business can scale without endless manual overhead.",
  paragraph2:
    "Over years of testing ad funnels and building software, I saw countless businesses waste money on sluggish websites that drive ad visitors away, or spend dozens of manual hours answering the exact same WhatsApp messages every single day. Digizier was built to solve both challenges under one roof.",
  paragraph3:
    "Whether we are launching high-ROAS Meta ad campaigns, deploying a 24/7 autonomous WhatsApp sales assistant, or engineering an ultra-fast web application, our focus is always the same: clean execution, transparent communication, and measurable business growth.",
};
