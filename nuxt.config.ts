import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  vite: {
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.varibles.sass'
      })
    ]
  }
})
