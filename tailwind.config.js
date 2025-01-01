/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    animation: {
      expandWidth: "expandWidth 300ms ease-in-out",
    },
    keyframes:{
      expandWidth: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      }
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}