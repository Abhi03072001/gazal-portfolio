/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101828',
          dark: '#0B101D',
          charcoal: '#202938',
          card: '#162033',
        },
        lavender: {
          DEFAULT: '#A5A6F6',
          light: '#EEF0FF',
          tint: '#F4F5FF',
          dark: '#7E80E8',
          deep: '#6062D6',
        },
        coolGrey: {
          DEFAULT: '#DCE3EC',
          light: '#F1F4F9',
          border: '#DCE3EC',
          dark: '#94A3B8',
        },
        softWhite: '#F8FAFC',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
