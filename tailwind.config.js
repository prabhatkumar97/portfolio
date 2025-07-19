/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0eefe",
          200: "#c0ddfd",
          300: "#92c5fa",
          400: "#5ea5f5",
          500: "#3b82f6",
          600: "#2565eb",
          700: "#1d51d8",
          800: "#1e42af",
          900: "#1e388b",
          950: "#172554",
        },
        secondary: {
          50: "#f2fbfc",
          100: "#e2f7f8",
          200: "#bbedf1",
          300: "#83dfe7",
          400: "#43c9d7",
          500: "#22adbf",
          600: "#188ca1",
          700: "#197185",
          800: "#1c5c6d",
          900: "#194d5d",
          950: "#0a3340",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        dark: {
          100: "#1E293B",
          200: "#1A1F2E",
          300: "#151926",
          400: "#111420",
          500: "#0D0F1A",
          600: "#090B14",
          700: "#05070E",
          800: "#020408",
          900: "#000002",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
