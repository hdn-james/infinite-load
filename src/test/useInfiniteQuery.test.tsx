import { renderHook } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { page1, page2 } from './mock'
import { useProductQuery } from '@/hooks/useProductQuery'
import axios from 'axios'

const mock = new MockAdapter(axios)

// mock env
jest.mock('@config/constants', () => ({
  BACKEND: 'https://dummyjson.com',
}))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

// wrapper for react query
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useUsersQuery', () => {
  test('fetches the users list page 1', async () => {
    mock.onGet(`/product/search?q=${''}&limit=20&skip=${0}`).reply(200, page1)

    const { result, waitFor } = renderHook(() => useProductQuery(''), { wrapper })

    await waitFor(() => result.current.isSuccess, { timeout: 10000 })
    expect(result.current.data?.pages[0]).toStrictEqual(page1)
  })

  test('fetches the users list page 1 & 2', async () => {
    mock.onGet(`/product/search?q=${''}&limit=20&skip=${0}`).reply(200, page1)

    const { result, waitFor } = renderHook(() => useProductQuery(''), { wrapper })

    await waitFor(() => result.current.isSuccess, { timeout: 10000 })
    expect(result.current.data?.pages[0]).toStrictEqual(page1)

    mock.onGet(`/product/search?q=${''}&limit=20&skip=${20}`).reply(200, page2)

    result.current.fetchNextPage()
    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(result.current.data?.pages).toStrictEqual([page1, page2])
  })
})
