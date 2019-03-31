const pkg = require('./package')
// const routesList = require('data/routeList.json')

require('dotenv').config();
const { CLIENT_ID, SCRIPT_ID } = process.env;

module.exports = {
  mode: 'spa',

  generate: {
    generate: {
      routes: [
        'success',
        'error'
      ]
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

  oneSignal: {
    init: {
      appId: '設定したappId',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    CLIENT_ID,
    SCRIPT_ID
  }
}
