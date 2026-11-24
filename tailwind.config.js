/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECDD3',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        pine: {
          DEFAULT: '#991B1B',
          deep: '#450A0A',
          light: '#B91C1C',
          forest: '#7F1D1D',
        },
        burgundy: {
          DEFAULT: '#991B1B',
          deep: '#450A0A',
          light: '#B91C1C',
          wine: '#7F1D1D',
        },
        champagne: {
          DEFAULT: '#FECDD3',
          light: '#FEF2F2',
          warm: '#FFF5F5',
          gold: '#0284C7',
          deep: '#B91C1C',
        },
        rosequartz: {
          DEFAULT: '#FECDD3',
          soft: '#FEF2F2',
          blush: '#FFF5F5',
          deep: '#991B1B',
          rose: '#B91C1C',
        },
        pulse: {
          pearl: '#FAFCFE',
          lavender: '#FEF2F2',
          'lavender-soft': '#FFF5F5',
          'lavender-base': '#FAFBFD',
          violet: '#991B1B', // primary cardiac red (matches PULSE in logo)
          'violet-royal': '#B91C1C',
          'violet-deep': '#7F1D1D',
          'violet-midnight': '#450A0A',
          aqua: '#0284C7', // medical cyan (matches HEART CENTRE in logo)
          'aqua-electric': '#38BDF8',
          'aqua-soft': '#F0F9FF',
          coral: '#DC2626',
          'coral-soft': '#FEF2F2',
          'rose-pulse': '#EF4444',
          champagne: '#FECDD3',
          'champagne-gold': '#0284C7',
          midnight: '#450A0A',
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
        'glass': '0 8px 32px 0 rgba(153, 27, 27, 0.06)',
        'glass-hover': '0 16px 40px 0 rgba(153, 27, 27, 0.12)',
        'glow-violet': '0 0 35px -5px rgba(153, 27, 27, 0.35)',
        'glow-aqua': '0 0 35px -5px rgba(2, 132, 199, 0.35)',
        'glow-coral': '0 0 30px -5px rgba(220, 38, 38, 0.35)',
        'luxury': '0 25px 60px -15px rgba(69, 10, 10, 0.08)',
      },
      letterSpacing: {
        'widest-xl': '0.22em',
        'widest-2xl': '0.3em',
      }
    },
  },
  plugins: [],
}
