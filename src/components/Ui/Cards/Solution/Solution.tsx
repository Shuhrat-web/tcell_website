'use client'
import React from 'react'
import { ISolutionCardProps } from './lib/types/ISolutionCardTypes'
import Title from '../../Title/Title'
import TextButton from '../../Buttons/TextButton'
import { HiArrowLongRight } from 'react-icons/hi2'
import Image from 'next/image'
import { useLocale } from 'next-intl'



const SolutionCard = ({solution,iconHeight=120,iconWidth=120,showLink=true}:ISolutionCardProps) => {
    const locale = useLocale()
  return (
    <div className='flex flex-col justify-between t__card__secondary h-full'>
        <div>
            <Title size='xl'>
                {solution.title}
            </Title>
            <p className='mt-4 text-secondary'>
                {solution.description}
            </p>
        </div>
        <div className={`flex ${showLink ? 'justify-between' : 'justify-end'}  items-end mt-[30px]`}>
            {
                showLink &&
                <TextButton extraClass='flex items-center gap-x-2' hideHover size='none' url={`/${locale}/t-solution/${solution.id}`}>
                    Подробнее
                    <HiArrowLongRight />
                </TextButton>
            }
            {
                solution.icon &&
                <Image 
                    src={solution.icon}
                    height={iconHeight}
                    width={iconWidth}
                    alt={solution.title}
                    unoptimized
                    className='max-w-full'
                />
            }
        </div>
    </div>
  )
}

export default SolutionCard