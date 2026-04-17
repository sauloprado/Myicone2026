/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#2dd4bf',
          DEFAULT: '#0f766e',
          dark: '#134e4a',
        },
        accent: {
          light: '#99f6e4',
          DEFAULT: '#14b8a6',
          dark: '#0f766e',
        },
        dark: {
          bg: '#0b1220',
          card: '#111c2d',
          border: '#263548',
          text: '#e6edf7',
        },
      },
    },
  },
  plugins: [],
};
