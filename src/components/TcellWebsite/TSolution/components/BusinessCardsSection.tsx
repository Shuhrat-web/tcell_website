import { IBenefit } from '@/lib/requests/resources/Benefits/lib/types/IBenefitTypes'
import React from 'react'
import { IAdvantageSectionProps } from '../lib/types/ITSolutionPageTypes'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import BenefitCard from '@/components/Ui/Cards/Benefit/BenefitCard'

const BusinessCardsSection = ({className}: IAdvantageSectionProps) => {
    const cards: IBenefit[] = [
        {
            id: 1,
            title: "Доступно",
            description: "Ценность, которую Вы получите, превышает стоимость услуг.",
            icon: ""
        },
        {
            id: 2,
            title: "Оперативно",
            description: "Быстро внедрим решения, акцентируя на результаты.",
            icon: ""
        },
        {
            id: 3,
            title: "Эффективно",
            description: "Преобразуйте идеи в действия, проверенной эффективностью.",
            icon: ""
        }
    ]
  return (
    <div className={className}>
        <SectionTitle titleText='Что получит бизнес?'/>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
            {
                cards.map(benefit => (
                    <BenefitCard key={benefit.id} benefit={benefit}/>
                ))
            }
        </div>
    </div>
  )
}

export default BusinessCardsSection