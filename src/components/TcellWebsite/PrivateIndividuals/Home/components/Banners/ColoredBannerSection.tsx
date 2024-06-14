import React from 'react'
import Image from 'next/image'
import Title from '@/components/Ui/Title/Title'
import ContainButton from '@/components/Ui/Buttons/ContainButton'
import { IColoredBannerPrivateIndividualsSectionProps } from '../../lib/types/IHomePageTypes'


const ColoredBannerSection = ({bgColor,title,description,url,img,textColor='black', btnText="Подробнее",className}:IColoredBannerPrivateIndividualsSectionProps) => {
  return (
    <div
    style={{
        backgroundColor: bgColor
    }}
    className={`${className} flex justify-center items-center md:justify-between md:flex-row flex-col rounded-3xl px-6 md:px-12`}
    >
        <div className='py-6 md:py-11'>
            <Title color={textColor === 'white' ? 'white' : 'black'} size='2xl'>
                {title}
            </Title>
            <p className={`mt-4 max-w-[445px] ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
                {description}
            </p>
            {
            url &&
                <ContainButton url={url} extraClass='mt-16 text-black' type='white'>
                    {btnText}
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

export default ColoredBannerSection