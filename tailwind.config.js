/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#1C0041',
        primaryTeal: '#41B883',
      },
    },
  },
  plugins: [],
};
