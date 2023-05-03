/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['DM Serif Display', 'sans-serif'],
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        'dark-violet': 'hsl(256, 26%, 20%)',
        'grayish-blue': 'hsl(216, 30%, 68%)',
        'very-dark-violet': 'hsl(270, 9%, 17%)',
        'dark-grayish-violet': 'hsl(273, 4%, 51%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      },
      backgroundImage: {
        'nav-pattern-mobile': 'url("/src/assets/images/bg-pattern-mobile-nav.svg")',
        'image-intro-mobile': 'url("/image-intro-mobile.jpg")',
        'image-intro-desktop': 'url("/image-intro-desktop.jpg")',
        'pattern-intro-left-mobile': 'url("/src/assets/images/bg-pattern-intro-left-mobile.svg")',
        'pattern-intro-left-desktop': 'url("/src/assets/images/bg-pattern-intro-left-desktop.svg")',
        'pattern-intro-right-mobile': 'url("/src/assets/images/bg-pattern-intro-right-mobile.svg")',
        'pattern-intro-right-desktop': 'url("/src/assets/images/bg-pattern-intro-right-desktop.svg")',
        'pattern-how-we-work-desktop': 'url("/src/assets/images/bg-pattern-how-we-work-desktop.svg")',
        'pattern-how-we-work-mobile': 'url("/src/assets/images/bg-pattern-how-we-work-mobile.svg")',
        'pattern-footer-mobile': 'url("/src/assets/images/bg-pattern-footer-mobile.svg")',
        'pattern-footer-desktop': 'url("/src/assets/images/bg-pattern-footer-desktop.svg")'
      }
    },
  },
  plugins: [],
}

