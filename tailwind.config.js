/** @type {import('tailwindcss').Config} */
export default {
  files: [
    "./app/**/*.{ts,tsx,jsx,js}",
    "./components/**/*.{ts,tsx,jsx,js}",
    "./styles/**/*.{css,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#12457B",
        "primary-light": "#1DE9FF",
        accent: "#1AA6A1",
        "neutral-dark": "#1F1F24",
        "neutral-mid": "#B0B7C3",
        "neutral-light": "#F5F7FA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
