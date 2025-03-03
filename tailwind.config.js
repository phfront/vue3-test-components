/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary-color), 100%)',
        secondary: 'rgba(var(--secondary-color), 100%)',
        danger: 'rgba(var(--danger-color), 100%)',
        background: 'var(--background-color)'
      }
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
