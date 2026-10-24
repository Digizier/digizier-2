import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry",
  description:
    "Reach out to Digizier in Karachi. Inquire about performance ads, WhatsApp AI bots, or workflow automation with direct WhatsApp support from Nadir Habib.",
  alternates: {
    canonical: "https://www.digizier.com/contact/",
  },
  openGraph: {
    title: "Contact Digizier — Send Project Inquiry",
    description:
      "Reach out to Digizier in Karachi. Inquire about performance ads, WhatsApp AI bots, or workflow automation with direct WhatsApp support.",
    url: "https://www.digizier.com/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
