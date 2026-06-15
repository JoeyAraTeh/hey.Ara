import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#1a0a0d',
          900: '#2C0F12',
          800: '#3d1519',
          700: '#561C24',
          600: '#6B1E23',
          500: '#6D2932',
          400: '#9a7b6e',
          300: '#C7B7A3',
          200: '#E8D8C4',
          100: '#f5ece0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;