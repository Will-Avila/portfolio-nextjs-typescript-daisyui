import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {          
          "primary": "#3d3e42",         
          "secondary": "#31333b",         
          "accent": "#eba54b",         
          "neutral": "#000000",         
          "base-100": "#31333b",         
          "info": "#D2D2D4",         
          "success": "#299e00",         
          "warning": "#ffaa00",         
          "error": "#ff5c69",
          },
        },
      ],
  },
} satisfies Config;
