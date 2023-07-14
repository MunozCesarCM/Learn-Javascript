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
          foreground: 'var(--color-foreground)',
          background: 'var(--color-background)',
          alt: 'var(--color-aside)',
          header: 'var(--color-bold)',
          red: 'var(--color-red)',
          yellow: 'var(--color-yellow)',
          green: 'var(--color-green)',
          blue: 'var(--color-blue)',
          purple: 'var(--color-purple)',
        },
      }
    },
  },
  plugins: [],
}

