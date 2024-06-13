import React from 'react'
import { ILoyaltyBenefitCardProps } from './lib/types/ILoyaltyBenefitCardTypes'
import Title from '../../Title/Title'

const LoyaltyBenefitCard = ({benefit}:ILoyaltyBenefitCardProps) => {
  return (
    <div className='t__card__secondary'>
        <Title size='xl' font='lg'>
            {benefit.title}
        </Title>
        <div className='text-secondary-50 mt-4'>
            {benefit.description}
        </div>
    </div>
  )
}

export default LoyaltyBenefitCard