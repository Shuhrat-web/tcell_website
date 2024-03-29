import React from 'react'
import { IFaqSectionProps } from '../lib/types/IHomePageTypes'
import { IFaq } from '@/lib/requests/resources/Faq/lib/types/IFaqTypes'
import FaqCard from '@/components/Ui/Cards/Faq/FaqCard'

const FaqSection = ({className}:IFaqSectionProps) => {
    const faqs:IFaq[] = [
        {
            id: 1,
            title:'Точки обслуживания',
            descroption: `Работаем на территории всего Таджикистана, 
            в каждом городе`,
            icon: '/images/faq_icon_1.svg'
        },
        {
            id: 2,
            title:'Остались вопросы?',
            descroption: `Работаем на территории всего Таджикистана, 
            в каждом городе`,
            icon: '/images/faq_icon_2.svg'
        },
        {
            id: 3,
            title:'USSD-команды',
            descroption: `Полезные USSD-команды на все случаи жизни`,
            icon: '/images/faq_icon_3.svg'
        }
    ]
  return (
    <div className={className}>
        <div className='grid grid-cols-2 gap-6'>
            {
                faqs.map((item,i) => (
                    <div className={`${i%2 !== 0 ? 'row-span-2' :''}`} key={item.id}>
                        <FaqCard 
                        iconHeight={i%2 !== 0 ? 250: 120}
                        iconWidth={i%2 !== 0 ? 250: 120}
                        faq={item} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FaqSection