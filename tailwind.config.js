// Tailwind config. As cores vêm dos tokens de src/index.css (paleta oficial) e aceitam
// transparência (ex.: border-soft/15, bg-link/15), o que `[var(--x)]/15` não permite.
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

const withAlpha = (token) => `color-mix(in srgb, var(${token}) calc(<alpha-value> * 100%), transparent)`

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
      colors: {
        ink: withAlpha('--ink'),
        mineral: withAlpha('--mineral'),
        action: withAlpha('--action'),
        alert: withAlpha('--alert'),
        link: withAlpha('--link'),
        soft: withAlpha('--muted'),
        surface: withAlpha('--panel')
      },
      // Borda padrão (quando só `border` é usado): sem o cinza claro do Tailwind.
      borderColor: {
        DEFAULT: withAlpha('--muted')
      },
      fontFamily: {

        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },

  plugins: [typography, forms]
}
