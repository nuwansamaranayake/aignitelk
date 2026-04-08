import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2ecc71',
          'green-dark': '#1a9c54',
          'green-deep': '#0d7c3e',
          red: '#e74c3c',
          'red-dark': '#c0392b',
          gold: '#D4A843',
          'gold-light': '#E8C560',
          'gold-dark': '#B8892A',
        },
        bg: {
          DEFAULT: '#0a0f0d',
          alt: '#0f1714',
          surface: '#141e19',
          'surface-hover': '#1a2b23',
        },
        text: {
          primary: '#e8f0ec',
          muted: '#8fa89b',
          dim: '#5c7a6a',
        },
        border: {
          DEFAULT: '#1e3329',
          light: '#2a4a3a',
        },
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
