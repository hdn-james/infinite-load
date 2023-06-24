import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
// hook
import { useProductQuery } from './hooks/useProductQuery'
// component
import ProductList from '@components/ProductList'
import Search from '@components/Search'

const App: React.FC = () => {
  const { ref, inView } = useInView()
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { isLoading, data, status, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useProductQuery(searchQuery)

  console.log(status)

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView])

  return (
    <div
      data-testid='app'
      className='container p-8'
    >
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
