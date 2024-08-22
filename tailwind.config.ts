import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      regular: ["Inter", "sans-serif"],
      special: ["Space Grotesk", "sans-serif"],
      super_special: ["Archivo", "monospace"],
    },
    colors: {
      text_white_primary: "#fffffff2",
      text_white_secondary: "#ffffff7f",
      text_white_tertiary: "#ffffff66",
      text_black_primary: "#231F20",
      text_black_secondary: "#231f20b3",
      primary_main: "#25AAE1",
      background_light: "#e6e6e6",
      border_dark: "#575757",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
    },
  },
  plugins: [],
};
export default config;
