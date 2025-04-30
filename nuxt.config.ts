// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/app/style/index.scss'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  imports: {
    dirs: [
      'shared/*',
    ],
  },
  dir: {
    pages: 'app/routes',
    layouts: 'app/layouts'
  },
  components: [
    {
      path: '~/shared',
      pathPrefix: false,
    },
    {
      path: '~/entities',
      pathPrefix: false
    },
    {
      path: '~/widgets',
      pathPrefix: false,
    },
  ],
  icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './app/icons'
      },
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/'
    }
  }
})