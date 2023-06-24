import React from 'react'
import Product from './Product'
// type
import { TProductList } from '@/types/product'

const ProductList: React.FC<TProductList> = ({ data }) => {
  return (
    <div className='flex flex-col gap-4'>
      {data?.pages.map((page) =>
        page.products.map((product) => {
          return (
            <div key={product.id}>
              <Product
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
                category={product.category}
                thumbnail={product.thumbnail}
                images={product.images}
              />
            </div>
          )
        })
      )}
    </div>
  )
}

export default ProductList
