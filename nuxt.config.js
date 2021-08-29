export default {
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/vuetify'],
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
      {"data-domain":"whoelsebut.me", src:"https://server.whoelsebut.me/js/plausible.js", async: true, defer:true}
    ],
    link: [
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap"
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
      }
    ]
  },
  target: 'static'
}
