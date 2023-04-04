export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  runtimeConfig: {
    public: {
      ENDPOINT: process.env.NUXT_ENDPOINT,
      APP_NAME: process.env.NUXT_APP_NAME,
      BASE_URL: process.env.NUXT_BASE_URL
    }
  }
})
