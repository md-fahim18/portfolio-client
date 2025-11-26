import daisyui from 'daisyui'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Prompt', ...defaultTheme.fontFamily.sans],
        body: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#14b8a6',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#1e40af', 
          "base-content": "#000000",
          secondary: "#14b8a6",
          accent: "#f59e0b",
          neutral: "#374151",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
        },
        dark: {
          primary: '#ffa600', 
          "base-content": "#ffffff",
          secondary: "#14b8a6",
          accent: "#4f46e5",
          neutral: "#1f2937",
          "base-100": "#1f2937",
          "base-200": "#374151",
          "base-300": "#4b5563",
        },
      }
    ],
  },
}
