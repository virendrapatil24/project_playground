/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#2290fc",
          900: "#002c59",
        },

        green: {
          300: "#4cdcd0",
          700: "#369aaf",
        },
      },
    },
  },
  plugins: [],
};
