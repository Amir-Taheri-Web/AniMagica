import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        "color-1": "#191919",
        "color-2": "#750E21",
        "color-3": "#E3651D",
        "color-4": "#BED754",
        "color-5": "#262626",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('/hero.png')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
