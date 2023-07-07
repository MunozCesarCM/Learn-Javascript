/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#1A1B26',
          grey: '#313855',
          red: '#FF5370',
          yellow: '#FFCB6B',
          green: '#C3E88D',
          blue: '#89DDFF',
          purple: '#C792EA',
          white: '#C0CAF5',
        }
      }
    },
  },
  plugins: [],
}

