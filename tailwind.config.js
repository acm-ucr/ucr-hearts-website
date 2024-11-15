/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss-animated";

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hearts: {
          beige: "#F8F2EE",
          brown: "#665045",
          blue: "#6D99AF",
          "light-blue": "#E8F2FB",
          "light-brown": "#8A7166",
          "light-brown-100": "#A6958E",
        },
      },
      fontFamily: {
        hearts: "var(--signika-font)",
        title: "var(--cg-font)",
      },
      boxShadow: {
        hearts: "-1vw 1vw 0.4vw rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [plugin],
};