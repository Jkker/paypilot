import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e6f4ff',
          '100': '#d2eaff',
          '200': '#afd7ff',
          '300': '#7fbcff',
          '400': '#4c8fff',
          '500': '#2462ff',
          '600': '#0030ff',
          '700': '#0035ff',
          '800': '#002dd6',
          '900': '#092ba6',
          '950': '#071c74',
          DEFAULT: '#071c74',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
