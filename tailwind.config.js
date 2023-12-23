/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#808080",
        textColor:"#8B4513"
      },
    },
    fontFamily: {
      Roboto: ["Montserrat", "sans-serif"],
      "Raleway-regular": ["Raleway-regular", "sans-serif"],
      "Raleway-light": ["Raleway-light", "sans-serif"],
    },
  },
  plugins: [],
}

