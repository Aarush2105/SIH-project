/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#242424",
        bodyBlue: "#F8FAFC",
        // bodyBlue: "#E9EEF2",
        searchGreen: "#4E8353",
      },

      fontFamily: {
       poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

