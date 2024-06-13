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
        'flex flex-col justify-between': product.productIcon,
        'text-white': product.textColor === 'white',
        'text-dark-blue': product.textColor === 'black'
    })}>
        {
            product.productIcon &&
            <div className=''>
                <Image 
                    src={product.productIcon}
                    height={230}
                    width={230}
                    alt={product.name+'_icon'}
                    unoptimized
                    className='max-w-full object-contain h-[230px] w-[230px]'
                />
            </div>
        }
        <div className='mt-10'>
            <Title color={product.textColor == 'white' ? 'white' : 'black'} size='2xl' display='h5'>
                {product.name}
            </Title>
            <p className='mt-4 mb-7 font-normal'>
                {product.description}
            </p>
        </div>
        <div className='flex flex-wrap gap-4 justify-between'>
            {
                product.qrCode &&
                <div className='flex items-center gap-4'>
                    <Image 
                        src={product.qrCode}
                        height={110}
                        width={110}
                        alt={product.name+'_google_play_qr'}
                        unoptimized
                        className='max-w-full object-contain h-28 w-28 rounded-md'
                    />
                    <Title>
                        Наведите камеру,<br/>
                        чтобы скачать
                    </Title>
                </div>
            }
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
        </div>
    </div>
  )
}

export default ProductCard