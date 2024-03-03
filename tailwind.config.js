/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "bgNavbar":"#2e2c4b",
        "bgMain":"#202036"
      },
      colors:{
        "orangeText":"#FFA84C"
      }
    },
  },
  plugins: [],
}

