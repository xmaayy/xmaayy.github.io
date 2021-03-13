const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // https://coolors.co/04080f-507dbc-a1c6ea-bbd1ea-f3f6f7
        darkest: "#04080F", // Rich black FOGRA
        dark: "#507DBC", // Glacious
        medium: "#A1C6EA", // Baby Blue Eyes
        light: "#BBD1EA", // Beau Blue
        lightest: "#F3F6F7" // Cultured
      }
    }
  }
}