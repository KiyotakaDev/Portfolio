/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leveled: {
          50: "#e3b5b5",
          100: "#dcacba",
          200: "#d28eae",
          300: "#c261a1",
          400: "#9d3f8d",
          500: "#6f2f6f",
          600: "#4b1e52",
          700: "#2d1537",
          800: "#1a0f24",
          900: "#110b18",
          950: "#040308",
        },
        iced: {
          50: "#f3fcf8",
          100: "#cff7ed",
          200: "#9ff9f3",
          300: "#59daee",
          400: "#289dd7",
          500: "#1063bc",
          600: "#0a3299",
          700: "#0c1979",
          800: "#150f61",
          900: "#1f1150",
          950: "#170330",
        },
        neon: "#00fff0",
      },
    },
  },
  plugins: [],
};