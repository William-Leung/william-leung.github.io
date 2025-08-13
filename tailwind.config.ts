import type { Config } from 'tailwindcss';

const config: Config = {
  // Tells Tailwind where to look for your class names
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // This enables dark mode based on a class (e.g., <html class="dark">)
  darkMode: 'class',
  // Where you extend or override Tailwind's default design system
  theme: {
    extend: {
      spacing: {
        "sidebar": "288px",
      }
    },
  },
  // Where you can add official or third-party plugins
  plugins: [],
};
export default config;