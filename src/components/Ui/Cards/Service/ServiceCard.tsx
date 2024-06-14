import React from 'react'
import Image from 'next/image'
import Title from '../../Title/Title'
import { IServiceCardProps } from './lib/types/IServiceCardTypes'
import Link from 'next/link'


const ServiceCard = ({service}:IServiceCardProps) => {
  return (
    <article className='t__card__secondary relative flex flex-col justify-between min-h-[290px]'>
       <div>
            <Title size='2xl' display='h5'>
                {service.name}
            </Title>
            <p className='text-secondary mt-5'>
                {service.desctiption}
            </p>
       </div>
        {
            service.img &&
            <div className='flex justify-end items-end'>
                <Image 
                src={service.img}
                height={332}
                width={138}
                alt={service.name}
                unoptimized
                className='max-w-full'
                />
            </div>
        }
        {
            service.url &&
            <Link className="absolute left-0 top-0 w-full h-full" href={service.url} />
        }
    </article>
  )
}

export default ServiceCard