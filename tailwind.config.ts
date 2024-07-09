import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        gold: "var(--color-gold)",
        paper: "var(--color-paper)",
        orange: "var(--color-orange)",
      },
    },
  },
  plugins: [],
};
export default config;
