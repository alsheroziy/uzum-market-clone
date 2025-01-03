/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "12px",
      screens: {
        xl: "1240px",
      },
    },
    animation: {
      expandWidth: "expandWidth 300ms",
    },
    keyframes: {
      expandWidth: {
        "0%": { width: "0%" },
        "100%": { width: "100%" },
      },
    },
    extend: {
      colors: {
        primary: "#7000ff",
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
