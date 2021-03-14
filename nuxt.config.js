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
    ],
    link: [
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      }
    ]
  },
  target: 'static'
}
