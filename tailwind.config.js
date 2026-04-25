/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#9980fa',
          DEFAULT: '#0652dd',
          dark: '#1B1464',
        },
        accent: {
          light: '#d980fa',
          DEFAULT: '#17c0eb',
          dark: '#006266',
        },
        dark: {
          bg: '#08102e',
          card: '#0f1940',
          border: '#1e3065',
          text: '#e6edf7',
        },
      },
    },
  },
  plugins: [],
};
