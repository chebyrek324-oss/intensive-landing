import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        ink2: '#131316',
        ink3: '#1A1A1E',
        card: '#141417',
        paper: '#FAFAF7',
        mute: '#8A867C',
        hair: '#222226',
        gold: '#FFD166',
        gold2: '#FFB020',
        lime: '#C8FF44',
        success: '#4ADE80',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'grid-move': 'grid-move 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
