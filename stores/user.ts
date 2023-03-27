import { LocalStorage } from 'quasar'

export const useUserStore = defineStore('user', {
  state: (): { token: string | null; user: User | null } => {
    const runtimeConfig = useRuntimeConfig()
    return {
      token: LocalStorage.getItem(`${runtimeConfig.APP_NAME}_token`) || null,
      user: null
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})
