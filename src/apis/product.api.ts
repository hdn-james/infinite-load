import http from '@utils/http'
import { IProductsApiProps, TProductResponse } from '@/types/product'

export const getProducts = async ({ page = 0, search = '' }: IProductsApiProps) => {
  try {
    const skip: number = page * 20
    const res = await http.get(`/product/search?q=${search}&limit=20&skip=${skip}`)

    return res.data as TProductResponse
  } catch (error) {
    throw error
  }
}
