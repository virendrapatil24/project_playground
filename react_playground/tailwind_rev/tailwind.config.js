/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          300: "#8095ad",
          500: "#3e5c8c",
          700: "#18406a",
          900: "#082c5c",
        },
        green: {
          400: "#54cacc",
        },
      },
    },
  },
  plugins: [],
};
