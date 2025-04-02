/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Ativa o modo escuro baseado em classes
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#0369a1",
        dark: "#0f172a",
        light: "#f8fafc",
      },
    },
  },
  plugins: [],
}