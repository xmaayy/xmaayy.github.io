const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // https://coolors.co/04080f-507dbc-a1c6ea-bbd1ea-f3f6f7
        darkest: "#04080F", // Rich black FOGRA
        dark: "#507DBC", // Glacious
        medium: "#A1C6EA", // Baby Blue Eyes
        light: "#BBD1EA", // Beau Blue
        lightest: "#F7F7F7" // Cultured
      }
    },
    container: {
      center: true,
    },
  }
}