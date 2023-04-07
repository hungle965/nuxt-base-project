interface APIRespError {
  data: {
    errors: any
  }
  message: string
  status: string
  status_code: number
}

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

declare interface ILoginInput {
  email: string
  password: string
}

declare interface ILoginResponse {
  status: string
  status_code: number
  message: string
  developer_message: string
  data: string | null
}

declare interface Options {
  search?: string
}

declare interface Product {
  id: number
  name: string
  product_code: string
  is_active: number
  price: number
  is_wishlist: boolean
}

declare interface Pagination {
  current_page: number
  from: number
  to: number
  last_page: number
  per_page: number
  total: number
  path: string
}

declare interface BaseResponse {
  status: 'success'
  status_code: 200
  message: 'OK'
  developer_message: ''
}

declare interface ProductResponse extends BaseResponse {
  data: { items: Product[]; pagination: Pagination }
}

declare interface ProductDetailResponse extends BaseResponse {
  data: Product
}
