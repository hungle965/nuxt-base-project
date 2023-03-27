import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { LocalStorage } from 'quasar'

export const useAxiosInstance = () => {
  interface APIRespError {
    data: {
      errors: any
    }
    message: string
    status: string
    status_code: number
  }

  const deleteEmptyValue = (data: Record<string, unknown>) => {
    Object.keys(data).map((k) => {
      data[k] == void 0 && delete data[k]
    })
    return data
  }

  const runtimeConfig = useRuntimeConfig()

  const api = axios.create({ baseURL: runtimeConfig.public.ENDPOINT })

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = LocalStorage.getItem(`${runtimeConfig.public.APP_NAME}_token`)
    if (token) {
      config.headers.Authorization = `Bearer ${token.toString()}`
    }
    config.data && (config.data = deleteEmptyValue(config.data))
    config.params && (config.params = deleteEmptyValue(config.params))
    return config
  })

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data.status === 'success') return response.data
      if (response.data.status_code === 401) {
        LocalStorage.remove(`${runtimeConfig.public.APP_NAME}_token`)
        location.reload()
      }
      return Promise.reject<APIRespError>(response.data)
    },
    (error: AxiosError) => {
      return Promise.reject(error.response?.data || 'Network Error')
    }
  )
  return api
}
