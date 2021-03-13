export default {
  buildModules: ['@nuxtjs/tailwindcss'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blackish: "#04080F",
      darkblue: "#507DBC"
    }
  },
  head: {
    title: 'A Random Blog', // Other meta information
    script: [
      { "data-domain": "whoelsebut.me", src: "https://plausible.io/js/plausible.js", defer: true}
    ]
  }
}
