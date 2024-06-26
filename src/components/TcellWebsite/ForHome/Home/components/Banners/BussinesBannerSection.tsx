import React from 'react'
import Image from 'next/image'
import Title from '@/components/Ui/Title/Title'
import ContainButton from '@/components/Ui/Buttons/ContainButton'
import { IBusinessBannerSectionProps } from '../../lib/types/IHomeBusinessTypes'


const BussinesBannerSection = ({bgColor,title,description,url,img,textColor='black',className}:IBusinessBannerSectionProps) => {
  return (
    <div
    style={{
        backgroundColor: bgColor
    }}
    className={`${className} flex justify-between rounded-3xl px-12`}
    >
        <div className='py-11'>
            <Title color={textColor === 'white' ? 'white' : 'black'} size='2xl'>
                {title}
            </Title>
            <p className={`mt-4 max-w-[445px] ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
                {description}
            </p>
            {
            url &&
                <ContainButton extraClass='mt-16 text-black' type='white'>
                    Подробнее
                </ContainButton>
            }
        </div>

        {
            img && 
            <div className='flex items-end'>
                <Image 
                src={img}
                height={250}
                width={250}
                alt={title}
                unoptimized
                className=' max-w-full'
                />
            </div>
        }
    </div>
  )
}

export default BussinesBannerSection