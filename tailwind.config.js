/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05050A',
        surface: '#0C0C14',
        surface2: '#12121C',
        line: '#1E1E2E',
        violet: {
          DEFAULT: '#7C3AED',
          bright: '#9D6EF8',
          soft: '#B99EFB',
          deep: '#5B21B6',
        },
        ink: '#EEEEF2',
        muted: '#8888A0',
        faint: '#525268',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.15), transparent)',
        'mesh': `
          radial-gradient(at 20% 20%, rgba(124,58,237,0.08) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(93,33,187,0.06) 0px, transparent 50%),
          radial-gradient(at 50% 50%, rgba(124,58,237,0.04) 0px, transparent 60%)
        `,
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}
