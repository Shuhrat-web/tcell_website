import ContainButton from '@/components/Ui/Buttons/ContainButton'
import Title from '@/components/Ui/Title/Title'
import React from 'react'
import Image from 'next/image'
import { ITSolutionBannerSectionProps } from '../../lib/types/ITSolutionPageTypes'

const TSolutionBanner = ({title, description, url, img, className, textColor='black'}: ITSolutionBannerSectionProps) => {
  return (
    <div className={`${className} flex justify-between`}>
        <div className='py-11'>
            <Title color={textColor === 'white' ? 'white' : 'black'} display='h2' size='3xl'>{title}</Title>
            <p className={`mt-8 max-w-[445px] ${textColor === 'white' ? 'text-white' : 'text-black'}`}>{description}</p>
            {
                url && 
                    <ContainButton extraClass='mt-8'>Оставить заявку</ContainButton>
            }
        </div>
        { img &&
          <div className='flex items-end'>
            <Image src={img} height={312} width={312} alt={title} unoptimized className='max-w-full'/>
          </div>
        }
    </div>
  )
}

export default TSolutionBanner