import React from 'react'
import { ISolutionCardProps } from './lib/types/IFaqCardTypes'
import Title from '../../Title/Title'
import TextButton from '../../Buttons/TextButton'
import { HiArrowLongRight } from 'react-icons/hi2'
import Image from 'next/image'



const SolutionCard = ({solution,iconHeight=120,iconWidth=120}:ISolutionCardProps) => {
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
        <div className='flex justify-between items-end'>
            <TextButton extraClass='flex items-center gap-x-2' hideHover size='none'>
                Подробнее
                <HiArrowLongRight />
            </TextButton>
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