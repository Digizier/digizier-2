import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  BRAND_NAME,
  FOUNDER_NAME,
  FOUNDER_LOCATION,
  FOUNDER_TITLE,
  EMAIL_CONTACT,
  WHATSAPP_DISPLAY,
} from "@/lib/utils";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F97316",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digizier.com"),
  title: {
    default: `${BRAND_NAME} — Digital Marketing & AI Automation Agency`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Scale revenue with high-ROAS Meta & Google ads and automate operations with custom AI WhatsApp bots and n8n pipelines by Nadir Habib in Karachi, Pakistan.",
  alternates: {
    canonical: "https://www.digizier.com/",
  },
  keywords: [
    "Digital Marketing Agency",
    "Digital Marketing Agency Karachi",
    "AI Automation",
    "AI Agents Pakistan",
    "Meta Ads Pakistan",
    "Google Ads Scaling",
    "n8n Automation",
    "WhatsApp AI Chatbots",
    "Nadir Habib",
    "Digizier",
    "Karachi Pakistan",
  ],
  authors: [{ name: FOUNDER_NAME, url: "https://www.digizier.com" }],
  creator: FOUNDER_NAME,
  publisher: BRAND_NAME,
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.digizier.com/",
    title: `${BRAND_NAME} — Digital Marketing & AI Automation Agency`,
    description:
      "Scale revenue with high-ROAS Meta & Google ads and automate operations with custom AI WhatsApp bots and n8n pipelines by Nadir Habib in Karachi, Pakistan.",
    siteName: BRAND_NAME,
    images: [
      {
        url: "/images/nadir-habib.jpg",
        width: 1024,
        height: 1024,
        alt: `${FOUNDER_NAME} - ${FOUNDER_TITLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} — Digital Marketing & AI Automation`,
    description:
      "High-ROAS advertising campaigns and autonomous AI agent workflows by Nadir Habib in Karachi.",
    images: ["/images/nadir-habib.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.digizier.com/#organization",
        name: BRAND_NAME,
        url: "https://www.digizier.com",
        logo: "https://www.digizier.com/logo.png",
        image: "https://www.digizier.com/images/nadir-habib.jpg",
        description:
          "Digital marketing and AI automation agency specializing in performance Meta/Google ads, bilingual WhatsApp AI bots, and n8n workflow systems.",
        email: EMAIL_CONTACT,
        telephone: WHATSAPP_DISPLAY,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        areaServed: [
          "Pakistan",
          "United States",
          "United Kingdom",
          "United Arab Emirates",
          "Worldwide",
        ],
        knowsAbout: [
          "Digital Marketing",
          "Performance Advertising",
          "Meta Ads",
          "Google Ads",
          "AI Agents",
          "n8n Workflow Automation",
          "WhatsApp Chatbots",
          "Next.js Web Development",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: WHATSAPP_DISPLAY,
          contactType: "customer service",
          email: EMAIL_CONTACT,
          availableLanguage: ["English", "Urdu"],
        },
        founder: {
          "@type": "Person",
          name: FOUNDER_NAME,
          jobTitle: FOUNDER_TITLE,
        },
        priceRange: "$$",
      },
      {
        "@type": "Person",
        "@id": "https://www.digizier.com/#founder",
        name: FOUNDER_NAME,
        jobTitle: FOUNDER_TITLE,
        worksFor: {
          "@id": "https://www.digizier.com/#organization",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        url: "https://www.digizier.com",
        sameAs: ["https://www.digizier.com"],
      },
      {
        "@type": "ItemList",
        "@id": "https://www.digizier.com/#sitelinks",
        name: "Digizier Navigation Links",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Services",
            description: "Performance Meta/Google ads, AI WhatsApp bots, and n8n workflows",
            url: "https://www.digizier.com/services/",
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "About Us",
            description: "About Nadir Habib, CEO & Founder of Digizier in Karachi",
            url: "https://www.digizier.com/about/",
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Contact Us",
            description: "Direct WhatsApp consultation and project inquiry form",
            url: "https://www.digizier.com/contact/",
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Selected Work",
            description: "Client case studies, ad results, and automation pipelines",
            url: "https://www.digizier.com/portfolio/",
          },
          {
            "@type": "SiteNavigationElement",
            position: 5,
            name: "Book Strategy Call",
            description: "Book a 30-minute discovery call with Nadir Habib",
            url: "https://www.digizier.com/appointment-booking/",
          },
          {
            "@type": "SiteNavigationElement",
            position: 6,
            name: "Articles & Insights",
            description: "Practical guides on marketing funnels and autonomous AI agents",
            url: "https://www.digizier.com/blog/",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-texture-lines min-h-screen flex flex-col text-neutral-900 antialiased has-bottom-bar">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileTabBar />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
