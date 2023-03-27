import '~/assets/styles/quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'
import * as components from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(components.Quasar, {
    plugins: [components.Loading, components.Notify, components.Dialog]
  } as Partial<components.QuasarPluginOptions>)
})
