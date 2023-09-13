/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      // 'header-image': 'url(https://placekitten.com/1400)'
      'header-image': 'url(../../src/assets/header-BG.png)'
    },

    screens: {
      'smaller': '350px',
      // formerly 450

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'midlaptop': '740px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      notbold: '620',
      almostbold: '650',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}