/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens: {
      'mobile': "280px",
      'tablet': '740px',
      'laptop': '1024px',
      'desktop': '1280px',
    },},
  },
  plugins: [],
}

