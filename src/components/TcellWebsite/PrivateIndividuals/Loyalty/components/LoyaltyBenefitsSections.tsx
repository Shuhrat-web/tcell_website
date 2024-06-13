import React from 'react'
import { ILoyaltyBenefitsProps } from '../lib/types/ILoyalityPageTypes'
import clsx from 'clsx'
import Title from '@/components/Ui/Title/Title'
import LoyaltyBenefitCard from '@/components/Ui/Cards/LoyaltyBenefit/LoyaltyBenefitCard'

const LoyaltyBenefitsSections = ({className,benefits}:ILoyaltyBenefitsProps) => {
  return (
    <section className={clsx(className,'')}>
      <div>
        <Title size='xl'>
          «Спасибо за то, что Вы с нами!»
        </Title>
        <div className='text-secondary-50 max-w-[600px] mt-6'>
          Дарим бонус за каждый год пребывания абонента в нашей сети в виде МБ.
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-9'>
        {
          benefits.map(benefit => <LoyaltyBenefitCard key={benefit.id} benefit={benefit} />)
        }
      </div>
    </section>
  )
}

export default LoyaltyBenefitsSections