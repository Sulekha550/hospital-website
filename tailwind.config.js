/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pulse: {
          pearl: '#FAFCFE',
          lavender: '#EDE9FE',
          'lavender-soft': '#F5F3FF',
          'lavender-base': '#FAF7FD',
          violet: '#7C3AED',
          'violet-royal': '#6D28D9',
          'violet-deep': '#4C1D95',
          'violet-midnight': '#180E2E',
          aqua: '#06B6D4',
          'aqua-electric': '#22D3EE',
          'aqua-soft': '#E0F7FA',
          coral: '#F43F5E',
          'coral-soft': '#FFE4E6',
          'rose-pulse': '#FB7185',
          champagne: '#FEF3C7',
          'champagne-gold': '#F59E0B',
          midnight: '#0D061A',
          slate: '#334155',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['Plus Jakarta Sans', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(109, 40, 217, 0.06)',
        'glass-hover': '0 16px 40px 0 rgba(109, 40, 217, 0.12)',
        'glow-violet': '0 0 35px -5px rgba(124, 58, 237, 0.35)',
        'glow-aqua': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-coral': '0 0 30px -5px rgba(244, 63, 94, 0.35)',
        'luxury': '0 25px 60px -15px rgba(24, 14, 46, 0.07)',
      },
      letterSpacing: {
        'widest-xl': '0.22em',
        'widest-2xl': '0.3em',
      }
    },
  },
  plugins: [],
}
