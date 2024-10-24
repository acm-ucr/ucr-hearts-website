/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hearts: {
          white: "#FFFFFF",
          beige: "#F8F2EE",
          brown: "#665045",
          blue: "#6D99AF",
          "light-blue": "#E8F2FB",
          "light-brown": "#8A7166",
        },
      },
      fontFamily: {
        hearts: "var(--signika-font)",
        title: "var(--cg-font)",
      },
    },
  },
  plugins: [],
};
