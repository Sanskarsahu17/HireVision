import { theme } from "./src/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        background: theme.colors.background,
        status: theme.colors.status,
      },
      borderColor: {
        DEFAULT: theme.colors.border.DEFAULT,
      },
      borderRadius: theme.rounded,
      spacing: theme.spacing,
      boxShadow: theme.shadows,
      transitionDuration: theme.animation.transition,
    },
  },
  plugins: [],
};
