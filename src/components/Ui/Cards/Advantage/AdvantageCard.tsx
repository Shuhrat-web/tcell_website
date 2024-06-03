import React from 'react'
import { IAdvantageCardProps } from './lib/types/IAdvantageTypes'
import Title from '../../Title/Title'

const AdvantageCard = ({advantage}: IAdvantageCardProps) => {
  return (
    <div className='t__card__secondary flex justify-center items-center flex-col px-6 py-16'>
      <Title size='xl' display='h3'>
        {advantage.title}
      </Title>
      <div className='text-lg text-secondary-50 font-normal mt-6 max-w-60 text-center'>{advantage.description}</div>
    </div>
  )
}

export default AdvantageCard