import React from 'react'
import { IProductCardProps } from './lib/types/IProductCardTypes'
import Title from '../../Title/Title'
import Image from 'next/image'
import clsx from 'clsx'


const ProductCard = ({product}:IProductCardProps) => {
  return (
    <div 
    style={{
        backgroundColor: product.backgroundColor ? product.backgroundColor : 'transparent'
    }}
    className={clsx('t__card__secondary relative overflow-hidden',{
        'h-96 flex flex-col justify-between': product.productIcon,
        'text-white': product.textColor === 'white',
        'text-dark-blue': product.textColor === 'black'
    })}>
        <div>
            <Title color={product.textColor == 'white' ? 'white' : 'black'} size='2xl' display='h5'>
                {product.name}
            </Title>
            <p className='mt-4 mb-7'>
                {product.description}
            </p>
        </div>
        <ul className='flex flex-col gap-3 z-20'>
            <li>
                <a href={product.androidLink} target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={`/images/google_store.svg`}
                        height={47}
                        width={152}
                        alt={`google_play_${product.name}`}
                        unoptimized
                        className='max-w-full'
                    />
                </a>
            </li>
            <li>
                <a href={product.iosLink} target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={`/images/apple_store.svg`}
                        height={47}
                        width={152}
                        alt={`app_store_${product.name}`}
                        unoptimized
                        className='max-w-full'
                    />
                </a>
            </li>
        </ul>
        {
            product.productIcon &&
            <Image 
                src={product.productIcon}
                height={270}
                width={296}
                alt={product.name+'_icon'}
                unoptimized
                className='max-w-full object-cover absolute right-0 bottom-0 z-10'
            />
        }
    </div>
  )
}

export default ProductCard