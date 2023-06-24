import { InfiniteData } from '@tanstack/react-query'

export interface IProductsApiProps {
  page: number
  search: string
}

export type TProduct = {
  id?: number
  title?: string
  description?: string
  price?: number
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  category?: string
  thumbnail?: string
  images?: string[]
}

export type TProductResponse = {
  limit: number
  skip: number
  total: number
  products: TProduct[]
}

export type TProductList = {
  data?: InfiniteData<TProductResponse>
}
