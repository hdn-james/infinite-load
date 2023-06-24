export const productKeys = {
  product: ['product'] as const,
  productWithQuery: (query: string) => [...productKeys.product, query],
}
