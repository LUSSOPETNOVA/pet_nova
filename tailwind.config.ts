import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E5EFF",
          "blue-light": "#E8F2FF",
          red: "#E53935",
          "red-dark": "#C62828",
          green: "#2ECC71",
          dark: "#1F2A37",
          gray: "#F8FAFC",
          "gray-mid": "#6B7280",
          "gray-border": "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 8px 40px rgba(30, 94, 255, 0.08), 0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 16px 56px rgba(30, 94, 255, 0.14), 0 4px 16px rgba(0,0,0,0.08)",
        btn: "0 4px 14px rgba(229, 57, 53, 0.35)",
        dog: "0 20px 60px rgba(0,0,0,0.18)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-up-delay-1": "fadeInUp 0.6s 0.15s ease-out both",
        "fade-in-up-delay-2": "fadeInUp 0.6s 0.3s ease-out both",
        "fade-in-up-delay-3": "fadeInUp 0.6s 0.45s ease-out both",
        "fade-in-right": "fadeInRight 0.7s 0.2s ease-out both",
        "scale-in": "scaleIn 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
