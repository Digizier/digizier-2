import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a 30-Min Strategy Call",
  description:
    "Schedule a 1-on-1 strategy call with Nadir Habib to audit your ad spend, fix conversion bottlenecks, and automate manual operations for your business.",
  alternates: {
    canonical: "https://www.digizier.com/appointment-booking/",
  },
  openGraph: {
    title: "Book a 30-Min Strategy Call | Digizier",
    description:
      "Schedule a 1-on-1 strategy call with Nadir Habib to audit your ad spend, fix conversion bottlenecks, and automate manual operations.",
    url: "https://www.digizier.com/appointment-booking/",
  },
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
