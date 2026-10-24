import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles & Automation Insights",
  description:
    "Actionable guides and strategies on Meta Conversions API (CAPI), autonomous WhatsApp AI agents, n8n automation, and zero-load web architecture.",
  alternates: {
    canonical: "https://www.digizier.com/blog/",
  },
  openGraph: {
    title: "Articles & Automation Insights | Digizier",
    description:
      "Actionable guides and strategies on Meta Conversions API (CAPI), autonomous WhatsApp AI agents, n8n automation, and zero-load web architecture.",
    url: "https://www.digizier.com/blog/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
