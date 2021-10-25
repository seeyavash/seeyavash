export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sass-nuxt',
    htmlAttrs: {
      lang: 'en',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/scss/_main.scss",
    "~assets/scss/_modal.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  proxy: {
    '/api': {
      
      target: 'https://api-v1.arzp.ir/',
      // target: 'http://127.0.0.1:8080/',
      secure: false,
      cookieDomainRewrite: '',
      changeOrigin: true
    }
  },

  // devServer: {
  //   proxy: 'https://api-v1.arzp.ir/',
  //   secure: false,
  //   cookieDomainRewrite: '',
  //   changeOrigin: true
  // },

  axios: {
    retry: {
      retries: 0
    },
    headers: {
      'Accept': 'application/json',
    },
    baseURL: '/api',
    proxyHeaders: false,
    credentials: false,
    proxy: true
  },

  env: {
    BASE_URL: '/api'
  }
}
