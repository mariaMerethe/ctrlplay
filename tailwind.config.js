/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#00FFD1',
        secondary: '#8A2BE2',
        glow: '#FF3CAC',
        text: '#E0E0E0',
        subtext: '#B0B0B0',
        alert: '#FF5555',
      },
      fontFamily: {
        heading: ['"Audiowide"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

