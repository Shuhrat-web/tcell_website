import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')


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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'secondary': '#666666',
      'secondary-200': '#D9D9D9',
      'secondary-300': '#F2F3F7',
      'primary': '#821EBE',
      'primary-50': '#6366F126',
      'primary-200': '#0E1E32',
      'primary-300': '#EDF4FD',
      'success': '#D9D9D9',
      'warning': '#FF8100',
      'danger': '#C31815',
      'dark-blue': '#374151'
    },
  },
  plugins: [],
};
export default config;
