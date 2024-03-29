import React from 'react'
import { IFaqCardProps } from './lib/types/IFaqCardTypes'
import Title from '../../Title/Title'
import TextButton from '../../Buttons/TextButton'
import { HiArrowLongRight } from 'react-icons/hi2'
import Image from 'next/image'



const FaqCard = ({faq,iconHeight=120,iconWidth=120}:IFaqCardProps) => {
  return (
    <div className='flex flex-col justify-between t__card__secondary h-full'>
        <div>
            <Title size='xl'>
                {faq.title}
            </Title>
            <p className='mt-4 text-secondary'>
                {faq.descroption}
            </p>
        </div>
        <div className='flex justify-between items-end'>
            <TextButton extraClass='flex items-center gap-x-2' hideHover size='none'>
                Подробнее
                <HiArrowLongRight />
            </TextButton>
            {
                faq.icon &&
                <Image 
                    src={faq.icon}
                    height={iconHeight}
                    width={iconWidth}
                    alt={faq.title}
                    unoptimized
                    className='max-w-full'
                />
            }
        </div>
    </div>
  )
}

export default FaqCard