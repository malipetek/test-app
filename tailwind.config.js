/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'elephant': {
          '50': '#f0f8fb',
          '100': '#d9edf4',
          '200': '#b8dce9',
          '300': '#87c2d9',
          '400': '#4f9fc1',
          '500': '#3383a7',
          '600': '#2d6a8d',
          '700': '#2a5874',
          '800': '#2a4a60',
          '900': '#23394a',
          '950': '#152737',
        },      
      }
    },
  },
  plugins: [],
}

