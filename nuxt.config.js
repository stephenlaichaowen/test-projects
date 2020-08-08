
export default {
  mode: 'universal',

  // Headers of the page
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" }
    ]
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [
    '~assets/scss/main.scss'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Plugins to load before mounting the App
  plugins: [
    '~plugins/footer.js'
  ],

  // Nuxt.js dev-modules
  buildModules: [
  ],

  env: {    
    // baseURL: (process.env.NODE_ENV === 'production' ? 'https://my-awesome-portfolio-nuxt-app.netlify.app' : 'http://localhost:3000'),
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://my-awesome-portfolio-nuxt-app.herokuapp.com' : 'http://localhost:3000')
  },

  // Nuxt.js modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // 'nuxt-vuex-localstorage',
    // ['nuxt-vuex-localstorage', {
    //   localStorage: ['foo']
    // }]
  ],  
  
  axios: {
    // baseURL: (process.env.NODE_ENV === 'production' ? 'https://my-awesome-portfolio-nuxt-app.netlify.app' : 'http://localhost:3000'),
    baseURL: (process.env.NODE_ENV === 'production' ? 'https://my-awesome-portfolio-nuxt-app.herokuapp.com' : 'http://localhost:3000')
  },

  // Build configuration
  build: {
    extend (config, ctx) {
    }
  }
}
