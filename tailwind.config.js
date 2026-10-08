/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lacivert: "#1F2A5C",
        kirmizi: "#D7262E",
        kraft: "#C8A273",
        "kraft-acik": "#F3EADC",
        kayisi: "#E8892B",
        zemin: "#E9EEF5",
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
