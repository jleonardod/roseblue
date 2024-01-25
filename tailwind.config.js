/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "dodgerblue",
        secondary: "#0b1529",
        third: "#0e1f42",
        fourth: "#ffc801"
      }
    },
  },
  plugins: [],
}