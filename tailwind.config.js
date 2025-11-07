// Tailwind config: improved content paths, dark mode and small theme extensions
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

export default {
  content: [
    './index.html',
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}'
  ],
  // Use class-based dark mode so you can control it via a top-level class
  darkMode: 'class',
  theme: {
    extend: {
      // Example brand color scale for MLabs — adjust to your design tokens
      colors: {
        mlabs: {
          50: '#f5f7ff',
          100: '#e6edff',
          200: '#c7d6ff',
          300: '#98b6ff',
          400: '#5f86ff',
          500: '#2a5cff',
          600: '#234ed6',
          700: '#183bb0',
          800: '#112a80',
          900: '#081a4d'
        }
      },
      fontFamily: {

        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },

  plugins: [typography, forms]
}