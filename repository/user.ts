export interface LoginSuccess {
  token: string
  user: User
}

export const userRepo = () => {
  const api = useAxiosInstance()
  return {
    login: (email: string, password: string) =>
      api.post<LoginSuccess>('/login', { email, password }),
    fetchUser: () => api.get<User>('/profile'),
    forgotPassword: (email: string, url: string) =>
      api.post<BaseDataResponse>('/forgot-password', { email, url }),
    resetPassword: (
      new_password: string,
      confirm_password: string,
      token: string
    ) =>
      api.post<User>(`/reset-password/${token}`, {
        new_password,
        confirm_password
      }),
    changePassword: (
      old_password: string,
      new_password: string,
      confirm_password: string
    ) =>
      api.post<User>('/change-password', {
        old_password,
        new_password,
        confirm_password
      })
  }
}
