'use client'
import React, { useState } from 'react'
import { IFaqQuestionarySectionProps } from '../lib/IFaqPageTypes'
import clsx from 'clsx'
import Title from '@/components/Ui/Title/Title'
import { IFaq } from '@/lib/requests/resources/Faq/lib/types/IFaqTypes'
import FaqCard from '@/components/Ui/Cards/Faq/FaqCard'

const FaqQuestionarySection = ({className}:IFaqQuestionarySectionProps) => {
    const [activeFaqId,setActiveFacId] = useState(0)
    const faqList:IFaq[] = [
        {
            id: 1,
            question: 'Как проверить свои расходы?',
            answer: `Портал *105# и Мой Tcell`
        },
        {
            id: 2,
            question: 'Как узнать свой тарифный план?',
            answer: `*105*3#`
        },
        {
            id: 3,
            question: 'Какие услуги активны на моем номере?',
            answer: `*частично можно проверить по средствам приложения Мой Tcell`
        },
        {
            id: 4,
            question: 'Как проверить остаток на тарифе?',
            answer: `*377#`
        },
        {
            id: 5,
            question: 'Как отключить рекламные сообщения?',
            answer: `*1191*99#`
        }
    ]
  return (
    <section className={clsx(className,'t__card__secondary')}>
        <Title centered size='xl'>Часто задаваемые вопросы</Title>
        <ul className='mt-8 lg:px-32'>
            {
                faqList.map(faq => <li key={faq.id}>
                    <FaqCard onToggleFaq={(id) => {
                        setActiveFacId(id === activeFaqId ? 0 : id)
                    }} 
                    faq={faq}
                    activeFaqId={activeFaqId} />
                </li>)
            }
        </ul>
    </section>
  )
}

export default FaqQuestionarySection