import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F05252",
        secondary: '#ecc94b',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      boxShadow: {
        container: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
        table: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'
      },
      minHeight: {
        'inherit': 'inherit',
      }
    },
  },
  plugins: [],
};
export default config;
