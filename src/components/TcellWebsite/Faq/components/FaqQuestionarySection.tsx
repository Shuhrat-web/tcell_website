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
            question: 'What’s the best thing about Switzerland?',
            answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`
        },
        {
            id: 2,
            question: 'What’s the best thing about Switzerland?',
            answer: `I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.`
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