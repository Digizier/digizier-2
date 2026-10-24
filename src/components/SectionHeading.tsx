import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200/60 text-orange-700 text-xs font-semibold tracking-wide uppercase ${align === "center" ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-[1.2]">
        {title}{" "}
        {highlight && (
          <span className="text-orange-500 font-extrabold">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
