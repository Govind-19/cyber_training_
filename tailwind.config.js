/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tech': ['"Share Tech Mono"', 'monospace'],
      },
      colors: {
        'neon-green': '#39ff14',
        'neon-cyan': '#00cfff',
      },
      animation: {
        'glitch': 'glitch 1.5s linear infinite',
        'typing': 'typing 3.5s steps(33, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'none', opacity: '1' },
          '25%': { transform: 'skew(-0.5deg, -0.5deg)', opacity: '0.75' },
          '50%': { transform: 'skew(0.5deg, 0.5deg)', opacity: '1' },
          '75%': { transform: 'skew(-0.5deg, 0.5deg)', opacity: '0.75' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#39ff14' },
        }
      }
    },
  },
  plugins: [],
}