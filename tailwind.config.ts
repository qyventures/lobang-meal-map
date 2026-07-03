import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kopi: '#4B2E2A',
        kaya: '#F6D365',
        pandan: '#2F8F46',
        chilli: '#D9381E'
      },
      boxShadow: { card: '0 12px 30px rgba(75, 46, 42, 0.08)' }
    }
  },
  plugins: []
};
export default config;
