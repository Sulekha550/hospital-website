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
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        pine: {
          DEFAULT: '#064E3B',
          deep: '#022C22',
          light: '#047857',
          forest: '#065F46',
        },
        burgundy: {
          DEFAULT: '#064E3B',
          deep: '#022C22',
          light: '#047857',
          wine: '#065F46',
        },
        champagne: {
          DEFAULT: '#A7F3D0',
          light: '#F0FDF4',
          warm: '#ECFDF5',
          gold: '#059669',
          deep: '#047857',
        },
        rosequartz: {
          DEFAULT: '#D1FAE5',
          soft: '#F0FDF4',
          blush: '#ECFDF5',
          deep: '#059669',
          rose: '#047857',
        },
        pulse: {
          pearl: '#FAFCFE',
          lavender: '#ECFDF5',
          'lavender-soft': '#F0FDF4',
          'lavender-base': '#FAFBF9',
          violet: '#064E3B', // deep emerald forest
          'violet-royal': '#047857',
          'violet-deep': '#022C22',
          'violet-midnight': '#011C15',
          aqua: '#059669', // vibrant medical emerald
          'aqua-electric': '#10B981',
          'aqua-soft': '#ECFDF5',
          coral: '#0D9488', // medical teal accent
          'coral-soft': '#F0FDFA',
          'rose-pulse': '#34D399',
          champagne: '#A7F3D0',
          'champagne-gold': '#059669',
          midnight: '#022C22',
          slate: '#334155',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Sora', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        editorial: ['Cinzel', 'Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['Plus Jakarta Sans', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 78, 59, 0.06)',
        'glass-hover': '0 16px 40px 0 rgba(6, 78, 59, 0.12)',
        'glow-violet': '0 0 35px -5px rgba(6, 78, 59, 0.35)',
        'glow-aqua': '0 0 35px -5px rgba(5, 150, 105, 0.35)',
        'glow-coral': '0 0 30px -5px rgba(13, 148, 136, 0.35)',
        'luxury': '0 25px 60px -15px rgba(2, 44, 34, 0.08)',
      },
      letterSpacing: {
        'widest-xl': '0.22em',
        'widest-2xl': '0.3em',
      }
    },
  },
  plugins: [],
}
