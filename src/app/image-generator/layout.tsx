import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Studio & Image Generator",
  description:
    "Experiment with Digizier's AI Studio prompt generator and visual composer for marketing campaigns and creative concept generation.",
  alternates: {
    canonical: "https://www.digizier.com/image-generator/",
  },
  openGraph: {
    title: "AI Studio & Image Generator | Digizier",
    description:
      "Experiment with Digizier's AI Studio prompt generator and visual composer for marketing campaigns and creative concept generation.",
    url: "https://www.digizier.com/image-generator/",
  },
};

export default function ImageGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
