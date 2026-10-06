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
        // AiGNITE Software (Sri Lanka) palette, from the AiGNITE Design System "aignite-lk" theme
        lk: {
          maroon: '#8D153A',
          'maroon-deep': '#5E0E27',
          'maroon-soft': '#B8475F',
          saffron: '#EB7400',
          gold: '#FFBE29',
          teal: '#00534E',
          'teal-soft': '#2E7A73',
          paper: '#FBF7F0',
          sand: '#F3EBDD',
          'sand-2': '#E8DCC6',
          ink: '#1F1517',
          'ink-2': '#4A3C3E',
          'ink-3': '#7A6A68',
        },
        // DrapeStudio product accents, from the DrapeStudio Design System (tokens/colors.css)
        ds: {
          emerald: '#164E2D',
          'emerald-deep': '#123F26',
          'emerald-night': '#082516',
          'emerald-mid': '#2A7D49',
          'emerald-soft': '#EFF6F1',
          gold: '#C29A34',
          'gold-light': '#DCC27A',
          'gold-pale': '#F3E9CC',
          'gold-soft': '#FBF6E9',
          cream: '#FAF7F0',
          ink: '#1A202C',
        },
        // MirrorMe product accents, from the MirrorMe design system (MirrorMe/src/index.css)
        mm: {
          primary: '#FF2E88',
          'primary-deep': '#D11E6B',
          'primary-soft': '#FF7EB3',
          accent: '#D8FF57',
          'accent-deep': '#A8CC2E',
          night: '#0B0910',
          surface: '#15121C',
          'surface-2': '#201B2B',
          elevated: '#2A2436',
          text: '#F6F3FA',
          'text-2': '#B7B1C4',
        },
        // GoviHub accents, from the GoviHub Design System (tokens/colors.css, sector "spices" layer + slate neutrals)
        gh: {
          field: '#2D6A2E',
          leaf: '#1B5E20',
          gold: '#E8A838',
          pepper: '#B91C1C',
          sky: '#2563EB',
          'sky-tint': '#EFF6FF',
          'green-tint': '#F0FDF4',
          'gold-tint': '#FFFBEB',
          'pepper-tint': '#FEF2F2',
          ink: '#0F172A',
          slate: '#475569',
          page: '#F8FAFC',
          line: '#E2E8F0',
        },
        // ScanPass accents, from the ScanPass Design System (tokens/colors.css) and live scanpasslk.com CSS.
        // Contrast rule: aqua, apricot and hold never carry text on white.
        sp: {
          teal: '#0E7490',
          'teal-deep': '#0C6077',
          night: '#083344',
          'teal-soft': '#CCF2F8',
          'teal-pale': '#EDFCFE',
          terra: '#B45309',
          'terra-deep': '#92400E',
          'terra-soft': '#FEF3C7',
          aqua: '#5EEAD4',
          apricot: '#FDBA74',
          ink: '#1F2937',
          go: '#16A34A',
          stop: '#DC2626',
          hold: '#F59E0B',
        },
        // Kalika, from the Kalika Logo Kit color-tokens.json (cosmic-nexus storefront brand, V6 Tridevi).
        // Gold carries rules, borders and large text on night. On cream, small text uses night or crimson-deep.
        kk: {
          night: '#0A0A20',
          medallion: '#060614',
          crimson: '#A6364C',
          'crimson-deep': '#8B2C3E',
          rose: '#7A3348',
          pink: '#F2B8C6',
          gold: '#D4AF37',
          'gold-hi': '#F5D76E',
          'gold-warm': '#E8C871',
          bronze: '#B8903C',
          cream: '#F5F0E8',
          glow: '#FFFAE8',
        },
        // PrimePath HR accents, from the PrimePath HR Design System (tokens/colors.css, navy and gold scales).
        // Gold is a fill and accent colour. Gold text on light backgrounds uses accent-deep.
        pp: {
          primary: '#011941',
          night: '#001432',
          'navy-700': '#0A2655',
          'navy-600': '#16356E',
          'navy-500': '#254888',
          'navy-100': '#D0E0F2',
          'navy-50': '#EAF3FB',
          accent: '#E7B041',
          'accent-light': '#EFD056',
          'accent-deep': '#936318',
          'accent-soft': '#FCF4D8',
          cream: '#F5EDD8',
        },
        bg: {
          DEFAULT: '#FBF7F0',
          alt: '#F3EBDD',
          surface: '#FFFFFF',
        },
        text: {
          primary: '#1F1517',
          muted: '#4A3C3E',
          dim: '#7A6A68',
        },
        border: {
          DEFAULT: 'rgba(31,21,23,0.08)',
          light: 'rgba(31,21,23,0.16)',
        },
      },
      backgroundImage: {
        stripe:
          'linear-gradient(90deg, #8D153A 0 25%, #FFBE29 25% 50%, #EB7400 50% 75%, #00534E 75% 100%)',
      },
      boxShadow: {
        'lk-1': '0 1px 2px rgba(94,14,39,0.06)',
        'lk-2': '0 6px 20px rgba(94,14,39,0.08)',
        'lk-3': '0 18px 44px rgba(94,14,39,0.14)',
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        body: ['var(--font-noto-sans)', 'sans-serif'],
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
