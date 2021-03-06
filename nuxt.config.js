
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover' },
      { name:'apple-mobile-web-app-capable', content: 'yes'},
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
      { name: 'format-detection', content: 'telephone=no'},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', href: '//sslstatic.xiaoyusan.com/pc/images/fav.ico?t=136' }
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
    { src: '@/assets/css/common/common.scss', lang: 'scss'},
    { src: 'swiper/dist/css/swiper.css'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  build:{
    vendor: ['axios']
  },
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
