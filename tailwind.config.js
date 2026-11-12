/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./theme/hugo-minimal-black/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
      },
      maxWidth: {
        "3xl": "48rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
