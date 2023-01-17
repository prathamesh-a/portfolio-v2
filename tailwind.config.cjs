/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0b0011",
        secondary: "#A159FF",
        dimWhite: "rgba(255,255,255,0.75)",
        boldWhite: "rgba(230,241,255,0.87)",
        dimBlue: "#1a0c2a",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
        inter: ["Inter", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};