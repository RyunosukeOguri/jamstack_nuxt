const environment = process.env.ENV || 'local'
const envPath = `./.env.${environment}`
require('dotenv').config({ path: envPath })

const client = require('./plugins/contentful')

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'jamstack_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/application.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/foundation/_variables.scss',
      '@/assets/scss/foundation/_mixins.scss',
      '@/assets/scss/foundation/_functions.scss',
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  router: {
    base: '/jamstack_nuxt/',
  },

  generate: {
    fallback: true,
    routes() {
      return client
        .getEntries({ content_type: process.env.CTF_POST_TYPE_ID })
        .then((entries) => {
          return entries.items.map((entry) => {
            return {
              route: '/posts/' + entry.fields.slug,
              payload: entry,
            }
          })
        })
    },
  },

  dotenv: {
    filename: envPath,
  },
}
