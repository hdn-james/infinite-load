import { TProduct } from '@/types/product'
import { formatter } from '@/utils/formatter'
import React from 'react'

const Product: React.FC<TProduct> = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) => {
  return (
    <div
      data-testid='product'
      className='overflow-auto rounded-xl border border-black p-4'
    >
      <div className='flex gap-4'>
        <div className='w-12/24'>
          <p>
            ID: {id}{' '}
            <span className='ml-4 w-max rounded-full bg-yellow-200 px-2 text-center font-semibold'>{category}</span>
          </p>
          <p className='mt-4 text-xl font-bold'>
            {title} <span className='text-lg font-medium'>- {brand}</span>
          </p>
          <p className='italic text-gray-600'>{description}</p>
          <p className='mt-4 text-lg font-bold'>
            {formatter.format(Number(price))}{' '}
            <span className='text-base font-medium italic'>discount {discountPercentage}%</span>
          </p>

          <p className='mt-4'>Rating: {rating}</p>
          <p>Stock: {stock}</p>
        </div>
        <div className='12/24'>
          <img
            loading='lazy'
            src={thumbnail}
            className='h-80 w-auto'
            alt={title}
          />
        </div>
      </div>
      <h3 className='mt-4 font-semibold'>Images</h3>
      <div className='mt-4 flex w-max gap-4  border'>
        {images?.map((image, idx) => (
          <img
            key={idx}
            loading='lazy'
            src={image}
            className='h-40 w-auto'
            alt={title}
          />
        ))}
      </div>
    </div>
  )
}

export default Product
