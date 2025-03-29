/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple': {
          100: '#f3e8ff',
          600: '#9333ea',
          700: '#7e22ce',
        },
        'blue': {
          300: '#93c5fd',
          500: '#3b82f6',
          600: '#2563eb',
          800: '#1e40af',
        },
      },
    },
  },
  plugins: [],
};