/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['DM Serif Display', 'sans-serif'],
        'karla': ['Karla', 'sans-serif']
      },
      colors: {
        'dark-violet': 'hsl(256, 26%, 20%)',
        'grayish-blue': 'hsl(216, 30%, 68%)',
        'very-dark-violet': 'hsl(270, 9%, 17%)',
        'dark-grayish-violet': 'hsl(273, 4%, 51%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      },
      backgroundImage: {
        'nav-pattern-mobile': 'url("/src/assets/images/bg-pattern-mobile-nav.svg")'
      }
    },
  },
  plugins: [],
}

