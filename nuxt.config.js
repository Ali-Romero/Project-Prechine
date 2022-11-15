const BASE_URL = '/project/prichina-new/'

const BREAKPOINTS = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500,
}

export default {
  target: 'static',

  head: {
    title: 'Франшиза удалённого бизнеса на маркетплейсах PriChina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'description', content: 'Франшиза удалённого бизнеса на маркетплейсах PriChina' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  loading: {
    color: '#0080ff',
    height: '5px',
  },

  styleResources: {
    sass: ['@/assets/styles/variables.sass', '@/assets/styles/mixins.sass'],
  },

  css: [
    '@/assets/styles/reset.sass',
    '@/assets/styles/fonts.sass',
    '@/assets/styles/helpers.sass',
    '@/assets/styles/app.sass',
  ],

  plugins: [
    '@/plugins/validation.js',
    '@/plugins/scrollto.js',
    '@/plugins/feedback.js',
    { src: '@/plugins/ymaps.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  image: {
    dir: 'assets/images',
    screens: Object.fromEntries(
      Object.entries(BREAKPOINTS).map(([key, value]) => [key, value - 1])
    ),
  },

  axios: {
    baseURL: BASE_URL,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    transpile: [
      'vee-validate',
      'vue-pro-modal',
      'swiper',
      'dom7',
      'ssr-window',
      'gsap',
      'gsap/ScrollTrigger',
    ],
  },

  server: {
    host: '0.0.0.0',
  },

  static: {
    prefix: false,
  },

  router: {
    base: BASE_URL,
  },
}
