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
          red: '#F7768E',
          yellow: '#FFCB6B',
          green: '#9ECF6A',
          blue: '#7AA2F7',
          purple: '#C792EA',
          white: '#C0CAF5',
        }
      }
    },
  },
  plugins: [],
}

