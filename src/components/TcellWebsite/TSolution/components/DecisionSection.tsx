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
      description: 'Gallup Q12 – это методика, состоящая из 12 вопросов, которые помогают определить уровень вовлеченности сотрудников в вашей компании.',
      icon: '/images/faq_chat.png'
    },
    {
      id: 2,
      title: 'Разработка системы оценки производительности сотрудников',
      description: 'Это инструмент, который помогает компании достигать поставленных целей и ключевых показателей эффективности (KPI).',
      icon: '/images/faq_estimation.png'
    },
    {
      id: 3,
      title: 'Разработка профиля должности',
      description: 'Разработка модели компетенций должностей позволяет четко определить, какими навыками и качествами должен обладать сотрудник, чтобы эффективно исполнять свои обязанности.',
      icon: '/images/faq_profile.png'
    },
    {
      id: 4,
      title: 'Разработка ChatBot',
      description: 'Чат-бот — это программа на основе искусственного интеллекта, которая взаимодействует с клиентами по заранее подготовленным сценариям. ',
      icon: '/images/faq_chatbot.png'
    },
    {
      id: 5,
      title: 'Разработка внутренних документов',
      description: 'Совместно с вами мы разработаем все необходимые внутренние документы, включая процедуры и политики, что позволит улучшить коммуникацию и оптимизировать рабочие процессы в вашей компании.',
      icon: '/images/faq_document.png'
    },
    {
      id: 6,
      title: 'Оценка удовлетворенности клиентов (CSI)',
      description: 'Показатель CSI (Customer Satisfaction Index) позволяет измерить и отслеживать удовлетворенность клиентов после взаимодействия с вашей компанией, а также сравнивать себя с конкурентами.',
      icon: '/images/faq_model.png'
    },
    // {
    //   id: 7,
    //   title: 'Автоматизация процессов',
    //   description: 'Сократите издержки и повысите производительность с помощью наших решений по автоматизации бизнес-процессов.',
    //   icon: '/images/settings_solution.png',
    // },
    // {
    //   id: 8,
    //   title: 'CRM для вашего бизнеса',
    //   description: 'Управляйте отношениями с клиентами эффективно с нашими CRM-системами. Обучение и поддержка включены.',
    //   icon: '/images/settings_solution.png',
    // },
    {
      id: 9,
      title: 'Bitrix24 для вашего бизнеса',
      description: 'Адаптируется под нужды бизнеса любого масштаба, упрощает взаимодействие внутри команды и повышает общую эффективность работы.',
      icon: '/bitrix_icon.svg',
    },
    {
      id: 10,
      title: 'Бизнес-консалтинг',
      description: 'Профессиональный аудит и консалтинг для выявления проблем и улучшения бизнес-процессов.',
      icon: '/images/consalting_solution.png',
    }
  ]

  const sortedDecisions = [...decisions].sort((a, b) => {
    if (a.id === 9) return -1;
    if (b.id === 9) return 1;
    if (a.id === 1) return b.id === 9 ? 1 : -1;
    if (b.id === 10) return -1;
    return a.id - b.id;
  });
  return (
    <div className={className}>
      <SectionTitle titleText='Решения T-Solution'/>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-11'>
        {
          sortedDecisions .map(solition => (
            <SolutionCard showLink={[10].includes(solition.id) ? false : true} key={solition.id} solution={solition} />
          ))
        }
      </div>
    </div>
  )
}

export default Decision