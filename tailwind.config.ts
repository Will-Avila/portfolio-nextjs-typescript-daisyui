import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #a855f7 120deg, #00d7c0 240deg, #6366f1 360deg)',
        'aurora': 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(0, 215, 192, 0.15) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(99, 102, 241, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(168, 85, 247, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0, 215, 192, 0.2) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.4)',
        'glow-md': '0 0 25px -5px rgba(99, 102, 241, 0.5)',
        'glow-lg': '0 0 40px -10px rgba(99, 102, 241, 0.6)',
        'glow-xl': '0 0 60px -15px rgba(99, 102, 241, 0.7)',
        'glow-accent': '0 0 25px -5px rgba(0, 215, 192, 0.5)',
        'glow-secondary': '0 0 25px -5px rgba(168, 85, 247, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(99, 102, 241, 0.2)',
      },
      blur: {
        '4xl': '100px',
        '5xl': '150px',
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#6366f1", // Indigo 500
          "primary-content": "#ffffff",
          "secondary": "#a855f7", // Purple 500
          "secondary-content": "#ffffff",
          "accent": "#00d7c0", // Teal/Cyan
          "accent-content": "#002b3d",
          "neutral": "#2a323c",
          "neutral-content": "#a6adbb",
          "base-100": "#0a0f1a", // Darker for more contrast
          "base-200": "#111827", // Slate 900
          "base-300": "#060910", // Deep dark for contrast
          "base-content": "#f8fafc",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} satisfies Config;
