/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'light-bg': '#F9FAFB',
        'dark-bg': '#0F172A',
        'primary-light': '#2563EB',
        'primary-dark': '#3B82F6',
        'accent-light': '#14B8A6',
        'accent-dark': '#2DD4BF',
        'text-primary-light': '#1E293B',
        'text-primary-dark': '#E2E8F0',
        'text-secondary-light': '#64748B',
        'text-secondary-dark': '#94A3B8',
      },
    },
  },
  plugins: [],
};
