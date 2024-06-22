import React from 'react'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import { IAdvantageSectionProps } from '../lib/types/ITSolutionPageTypes'
import SolutionCard from '@/components/Ui/Cards/Solution/Solution'
import { ISolution } from '@/lib/requests/resources/Solutions/lib/types/ISolutionsRequestTypes'


const Decision = ({className}: IAdvantageSectionProps) => {
  const decisions: ISolution[] = [
    {
      id: 1,
      title: 'Опросник Gallup+eNPS',
      description: 'Опрос, измеряющий наиболее важные элементы вовлеченности сотрудников',
      icon: '/images/faq_chat.png'
    },
    {
      id: 2,
      title: 'Разработка системы оценки производительности сотрудников',
      description: 'Внедрение системы оценки работы персонала - ключевой шаг в развитии организации.',
      icon: '/images/faq_estimation.png'
    },
    {
      id: 3,
      title: 'Разработка профиля должности',
      description: 'Эффективный найм сотрудников',
      icon: '/images/faq_profile.png'
    },
    {
      id: 4,
      title: 'Разработка ChatBot',
      description: 'Программы на ИИ для автоматизации коммуникации специалистов с соискателями и внутренними сотрудниками.',
      icon: '/images/faq_chatbot.png'
    },
    {
      id: 5,
      title: 'Разработка внутренних документов',
      description: 'Во всех областях деятельности',
      icon: '/images/faq_document.png'
    },
    {
      id: 6,
      title: 'Оценка удовлетворенности клиентов (CSI)',
      description: 'Инструмент управления эффективностью',
      icon: '/images/faq_model.png'
    }
  ]
  return (
    <div className={className}>
      <SectionTitle titleText='Решения T-Solution'/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-11'>
        {
          decisions.map(faq => (
            <SolutionCard key={faq.id} solution={faq}/>
          ))
        }
      </div>
    </div>
  )
}

export default Decision