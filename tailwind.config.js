/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#101720',
        card: '#161e2a',
        border: '#253040',
        gold: '#e8b84b',
        sage: '#7ec89f',
        sky: '#6aadcf',
        rose: '#d9787c',
        laven: '#a48ad4',
        dim: '#7a8494',
        bright: '#eaecf0',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
        },
        floatUp: {
          '0%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(-60px)' },
        },
        pulse2: {
          '0%': { opacity: '0.7', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1.02)' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease',
        floatUp: 'floatUp 1.2s ease-out forwards',
        pulse2: 'pulse2 0.6s infinite alternate',
      },
    },
  },
  plugins: [],
};
