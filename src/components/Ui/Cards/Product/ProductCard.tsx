import React from 'react'
import { IProductCardProps } from './lib/types/IProductCardTypes'
import Title from '../../Title/Title'
import Image from 'next/image'


const ProductCard = ({product}:IProductCardProps) => {
  return (
    <div className='t__card__secondary'>
        <Title size='2xl' display='h5'>
            {product.name}
        </Title>
        <p className='mt-4 mb-7'>
            {product.description}
        </p>
        <ul className='flex flex-col gap-3'>
            <li>
                <Image 
                src={`/images/google_play.svg`}
                height={60}
                width={60}
                alt={`google_play_${product.name}`}
                unoptimized
                className='max-w-full'
                />
            </li>
            <li>
                <Image 
                src={`/images/app_store.svg`}
                height={60}
                width={60}
                alt={`app_store_${product.name}`}
                unoptimized
                className='max-w-full'
                />
            </li>
        </ul>

    </div>
  )
}

export default ProductCard