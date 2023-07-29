/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      // define font families
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif']
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}