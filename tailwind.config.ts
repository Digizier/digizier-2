import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",
          "orange-soft": "#FFF1E8",
          "orange-light": "#FFEDD5",
          "orange-dark": "#EA580C",
          black: "#171717",
          "black-secondary": "#262626",
          white: "#FFFFFF",
          warm: "#FAF9F6",
          gray: "#F3F4F6",
          border: "#E5E7EB",
          muted: "#666666",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(23, 23, 23, 0.05), 0 2px 6px -1px rgba(23, 23, 23, 0.03)",
        "card-hover": "0 12px 32px -4px rgba(249, 115, 22, 0.12), 0 4px 12px -2px rgba(23, 23, 23, 0.04)",
        soft: "0 2px 10px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
} satisfies Config;
