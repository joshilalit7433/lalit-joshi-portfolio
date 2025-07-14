/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#262626',
        lightgray: '#f5f5f5',
      },
    },
    fontFamily:{
      logo:["Londrina Shadow"],
      heading:["IM Fell English SC"],
      contact:["Montserrat"]
    }
  },

  plugins: [],
}

