import { userRepo } from '~~/repository/user'

export const useUserStore = defineStore('user', {
  state: (): { token: string | null; user: User | null } => {
    const runtimeConfig = useRuntimeConfig()
    const cookie = useCookie(`${runtimeConfig.public.APP_NAME}_token`)
    return {
      token: cookie.value || null,
      user: null
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    setUser(user: User) {
      this.user = user
    },
    setToken(token: string | null) {
      const runtimeConfig = useRuntimeConfig()
      const cookie = useCookie(`${runtimeConfig.public.APP_NAME}_token`)
      this.token = token
      if (token) {
        cookie.value = token?.toString()
      }
    },
    removeUser() {
      const runtimeConfig = useRuntimeConfig()
      const cookie = useCookie(`${runtimeConfig.public.APP_NAME}_token`)
      cookie.value = null
      this.token = null
      this.user = null
    },
    async fetchUser() {
      const { data } = await userRepo().fetchUser()
      this.user = data
    }
  }
})
