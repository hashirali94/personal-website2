// tailwind.config.js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#4C1D95',
        accent: '#7C3AED',
        background: '#F3F4F6',
      },
    },
  },
  plugins: [],
}

export default config
