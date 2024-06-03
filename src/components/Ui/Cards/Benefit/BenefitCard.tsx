import React from 'react'
import { IBenefitCardProps } from './lib/types/IBenefitCardTypes'
import Title from '../../Title/Title'

const BenefitCard = ({benefit}:IBenefitCardProps) => {
  return (
    <div className='t__card__secondary'>
        <div className='text-5xl text-secondary-50'>
          {benefit.icon}
        </div>
        <Title 
        extraClass='mb-4 mt-8'
        size='2xl' 
        display='h5'>
          {benefit.title}
        </Title>
        <div className='text-secondary'>
          {benefit.description}
        </div>
    </div>
  )
}

export default BenefitCard