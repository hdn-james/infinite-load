import React, { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
// api
import { getProducts } from '@apis/product.api'
// query key
import { productKeys } from '@config/queryKey'
// component
import ProductList from '@components/ProductList'
import Search from '@components/Search'

const App: React.FC = () => {
  const { ref, inView } = useInView()
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { isLoading, data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: productKeys.productWithQuery(searchQuery),
    queryFn: ({ pageParam = { page: 0, search: searchQuery } }) => getProducts(pageParam),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.total > lastPage.skip ? { page: allPage.length, search: searchQuery } : undefined
    },
  })

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView])

  return (
    <div className='container p-8'>
      <h1 className='text-xl font-bold'>Product List</h1>

      <Search onSearchQueryChange={setSearchQuery} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Product List */}
          <ProductList data={data} />

          {/* fetchNextPage state */}
          <div ref={ref}>{isFetchingNextPage ? 'Loading more...' : hasNextPage ? null : 'Nothing more to load'}</div>

          {/* Background update state */}
          <div>{isFetching && !isFetchingNextPage ? 'Background Updating...' : null}</div>
        </>
      )}
    </div>
  )
}

export default App
