/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        surface: '#131313',
        'surface-elevated': '#171717',
        'surface-muted': '#1f1f1f',
        'surface-soft': '#262626',
        gold: '#d4af37',
        'gold-soft': '#f0d68a',
        text: '#f5f5f4',
        'text-muted': '#b6b1a8',
        'text-dim': '#8a847b',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(212, 175, 55, 0.12)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
