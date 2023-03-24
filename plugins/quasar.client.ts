import 'quasar/dist/quasar.prod.css'
import '@quasar/extras/material-icons/material-icons.css'
import * as components from 'quasar'

export default defineNuxtPlugin((nuxtApp) => {
  const quasarUserOptions = {
    components,
    plugins: {}
  }
  nuxtApp.vueApp.use(components.Quasar, quasarUserOptions)
})