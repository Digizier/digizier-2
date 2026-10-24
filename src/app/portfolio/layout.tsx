import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Selected Work",
  description:
    "Review real client case studies: high-ROAS Meta ad funnels, WhatsApp AI bots, automated order systems, and sub-second e-commerce web architectures.",
  alternates: {
    canonical: "https://www.digizier.com/portfolio/",
  },
  openGraph: {
    title: "Client Case Studies & Selected Work | Digizier",
    description:
      "Review real client case studies: high-ROAS Meta ad funnels, WhatsApp AI bots, automated order systems, and sub-second web architectures.",
    url: "https://www.digizier.com/portfolio/",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
