import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#06080D',
        glass: '#0E131F',
        line: '#1E293B',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        cyan: {
          DEFAULT: '#06B6D4',
          soft: '#22D3EE',
          dim: 'rgba(6, 182, 212, 0.15)',
        },
        gold: {
          DEFAULT: '#F59E0B',
          soft: '#FBBF24',
          dim: 'rgba(245, 158, 11, 0.15)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(6, 182, 212, 0.18)',
        'glow-gold': '0 0 40px rgba(245, 158, 11, 0.18)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(30, 41, 59, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.35) 1px, transparent 1px)',
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(6, 182, 212, 0.18), transparent 55%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(245, 158, 11, 0.12), transparent 50%)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
