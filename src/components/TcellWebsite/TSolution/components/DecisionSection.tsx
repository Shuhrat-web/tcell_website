import React from 'react'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import { IAdvantageSectionProps } from '../lib/types/ITSolutionPageTypes'
import FaqCard from '@/components/Ui/Cards/Faq/FaqCard'
import { IFaq } from '@/lib/requests/resources/Faq/lib/types/IFaqTypes'


const Decision = ({className}: IAdvantageSectionProps) => {
  const decisions: IFaq[] = [
    {
      id: 1,
      title: 'Опросник Gallup+eNPS',
      description: 'Опрос, измеряющий наиболее важные элементы вовлеченности сотрудников',
      icon: '/images/faq_chat.svg'
    },
    {
      id: 2,
      title: 'Оценка эффективности персонала',
      description: 'Внедрение системы оценки работы персонала - ключевой шаг в развитии организации.',
      icon: '/images/faq_estimation.svg'
    },
    {
      id: 3,
      title: 'Разработка профиля должности',
      description: 'Эффективный найм сотрудников',
      icon: '/images/faq_profile.svg'
    },
    {
      id: 4,
      title: 'CHATBOT/Голосовой робот',
      description: 'Программы на ИИ для автоматизации коммуникации специалистов с соискателями и внутренними сотрудниками.',
      icon: '/images/faq_chatbot.svg'
    },
    {
      id: 5,
      title: 'Разработка внутренних документов',
      description: 'Во всех областях деятельности',
      icon: '/images/faq_document.svg'
    },
    {
      id: 6,
      title: 'Разработка модели компетенций',
      description: 'Инструмент управления эффективностью',
      icon: '/images/faq_model.svg'
    }
  ]
  return (
    <div className={className}>
      <SectionTitle titleText='Решения T-Solution'/>
      <div className='grid grid-cols-3 gap-6 mt-16'>
        {
          decisions.map(faq => (
            <FaqCard key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </div>
  )
}

export default Decision