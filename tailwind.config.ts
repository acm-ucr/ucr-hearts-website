/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      hearts: {
        beige: "#F8F2EE",
        brown: "#665045",
        blue: "#6D99AF",
        "light-blue": "#E8F2FB",
        lightBrown: "#897165",
      },
    },
    fontFamily: {
      hearts: "var(--poppins-font)",
      title: "var(--cg-font)",
    },
  },
  plugins: [],
};
