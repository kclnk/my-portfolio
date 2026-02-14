import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          coral: "#EE4540",
          crimson: "#C72C41",
          wine: "#801336",
          plum: "#510A32",
          dark: "#2D142C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
