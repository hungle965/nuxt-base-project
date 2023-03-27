declare interface User {
  email: string
  id: number
  name: string
  phone: string
  role: {
    id: number
    name: string
  }
}

declare interface ErrorItems {
  [key: string]: string[] | undefined
}

declare interface BaseDataResponse {
  status: string
  status_code: number
  message: string
  developer_message: string
  data: string | null
}
