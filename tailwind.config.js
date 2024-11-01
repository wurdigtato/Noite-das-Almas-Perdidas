/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background-hero': '#efba6a'
      },
      fontFamily: {
        henny: ['Henny Penny', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/spiderweb.png')",
      },
      dropShadow: {
        '3xl': '1px 1px 5px rgba(0, 0, 0, 0.4)',
      },
      fontSize: {
        'descricao': '10rem'
      }
    },
  },
  plugins: [],
}