import { storeToRefs } from 'pinia'
import { useUserStore } from '~~/stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  const { isAuthenticated } = storeToRefs(userStore)
  if (!isAuthenticated.value) return navigateTo('/login')
})
