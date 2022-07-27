/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        topSecret: ["Top Secret", "sans-serif"],
      },
      colors: {
        vintage: {
          "green": '#A9BC70',
          "blue": '#4BA499',
          "orange": '#D15725',
          "yellow": '#F0BC43',
          "red": '#A73E2D',
        },
        default: {
          DEFAULT: '#F6F6F4',
          100: '#EDEDE9',
          200: '#E3E3DD',
          300: '#DADAD2',
        },
        content: '#3D3A2C',
        primary: {
          DEFAULT: '#D15725',
          'darken': '#bd4e22',
        },
        secondary: '#4BA499',
      },
      backgroundImage: {
        "noise": "url('/assets/noise.png')",
        "hero": "url('/assets/hero.jpg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
