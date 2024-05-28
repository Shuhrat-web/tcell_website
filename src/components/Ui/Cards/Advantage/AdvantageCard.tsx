import React from 'react'
import { IAdvantageCardProps } from './lib/types/IAdvantageTypes'
import Title from '../../Title/Title'

const AdvantageCard = ({advantage}: IAdvantageCardProps) => {
  return (
    <div className='t__card__secondary text-center mb-6'>
        <Title size='2xl' display='h3'>
            {advantage.title}
        </Title>
        <p className='text-xl text-[#9CA3AF] font-normal mt-6'>{advantage.description}</p>
    </div>
  )
}

export default AdvantageCard