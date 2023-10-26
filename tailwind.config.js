/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      dark: '#000000',
      green: '#1DE9B6',
      darklight: '191919',
      white: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

