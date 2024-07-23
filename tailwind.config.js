/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'sky-blue': {  DEFAULT: '#456BCE',  50: '#D6DEF4',  100: '#C6D2F0',  200: '#A6B8E8',  300: '#869EDF',  400: '#6585D7',  500: '#456BCE',  600: '#345DC5',  700: '#2F53B1',  800: '#294A9D',  900: '#244189',  950: '#213C7F'},
      },
    },

  },
  plugins: [
    addDynamicIconSelectors()
  ],
}

