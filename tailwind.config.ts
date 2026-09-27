
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          steel: '#2C2C2C',
          gold: '#C9A84C',
          'gold-light': '#E2C47A',
          'gold-dark': '#A07830',
          cream: '#F5F0E8',
          'off-white': '#FAFAF7',
          muted: '#6B6B6B',
          brown: '#3B200A',
          'brown-light': '#5C3317',
          'warm-cream': '#F5EFE6',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
};

export default config;
