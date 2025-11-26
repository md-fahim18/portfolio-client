/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin Sans FB Demi", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "important-text": {
          DEFAULT: "#2563eb", // Blue-600 for light mode
          dark: "#ffa600", // Amber-500 for dark mode
        },
      },
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563eb",   // Blue-600 → fresh strong blue
          "base-content": "#000000",
          secondary: "#14b8a6",
          accent: "#f59e0b",
          neutral: "#374151",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "--animation-btn": "0.25s",
          "--btn-text-case": "uppercase",
          "--rounded-btn": "0.2rem",
        },
        dark: {
          primary: "#ffa600",   // Amber-500 (same as before)
          "base-content": "#ffffff",
          secondary: "#14b8a6",
          accent: "#4f46e5",
          neutral: "#1f2937",
          "base-100": "#1f2937",
          "base-200": "#374151",
          "base-300": "#4b5563",
          "--animation-btn": "0.25s",
          "--btn-text-case": "uppercase",
          "--rounded-btn": "0.2rem",
        },
      },

      // Optional extra daisyUI themes
      "synthwave",
      "retro",
    ],
  },
};
