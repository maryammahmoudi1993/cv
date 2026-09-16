/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#160608',
        'bg-soft': '#1a0a0c',
        'bg-footer': '#120507',
        card: '#1c0a0c',
        brand: {
          DEFAULT: '#b51f28',
          light: '#d94a51',
          glow: '#6d1a20',
        },
        ink: {
          DEFAULT: '#ffffff',
          secondary: '#d2b3b6',
          muted: '#b18d91',
          tag: '#e8d5d6',
          eyebrow: '#e0868a',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      screens: {
        nav: '1080px',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};
