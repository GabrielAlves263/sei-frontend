import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        "text-contrast": "var(--color-text-contrast)",
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        gold: "var(--color-gold)",
        paper: "var(--color-paper)",
        orange: "var(--color-orange)",
        sidebar: "var(--color-sidebar)",
      },
    },
  },
  plugins: [],
};
export default config;
