import { useInfiniteQuery } from '@tanstack/react-query'
// query key
import { productKeys } from '@config/queryKey'
// api
import { getProducts } from '@apis/product.api'

export const useProductQuery = (searchQuery: string) => {
  return useInfiniteQuery({
    queryKey: productKeys.productWithQuery(searchQuery),
    queryFn: ({ pageParam = { page: 0, search: searchQuery } }) => getProducts(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.total > lastPage.skip ? { page: allPage.length, search: searchQuery } : undefined
    },
  })
}
