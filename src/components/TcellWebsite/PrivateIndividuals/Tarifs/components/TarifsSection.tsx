import React from 'react'
import { ITarifSectionProps } from '../lib/types/ITarifPageTypes'
import Title from '@/components/Ui/Title/Title'
import { ITarif } from '@/lib/requests/resources/Tarifs/lib/types/ITarifTypes'
import TarifCard from '@/components/Ui/Cards/Tarif/TarifCard'

const TarifsSection = ({className}: ITarifSectionProps) => {
  const tarifs: ITarif[] = [
    {
      id: 1,
      title: "Салом 20",
      content: `
                <ul class="ml-5 list-disc">
                    <li>Безлимитные звонки внутри сети</li>
                    <li>Дополнительный пакет 4 Гб на видео, соцсети, мессенджеры</li>
                </ul>
            `,
      price: "20 сом / мес",
      options: [
        {
          id: 1,
          name: "4 ГБ",
          type: "icon",
          icon: "HiGlobeAlt",
        },
        {
          id: 2,
          name: "20 минут",
          type: "icon",
          icon: "HiOutlinePhone",
        },
        {
          id: 3,
          name: "20 sms",
          type: "icon",
          icon: "HiMail",
        },
      ],
    },
    {
      id: 2,
      title: "Салом 20",
      content: `
            <ul class="ml-5 list-disc">
                <li>Безлимитные звонки внутри сети</li>
                <li>Дополнительный пакет 4 Гб на видео, соцсети, мессенджеры</li>
            </ul>`,
      price: "20 сом / мес",
      options: [
        {
          id: 1,
          name: "4 ГБ",
          type: "icon",
          icon: "HiGlobeAlt",
        },
        {
          id: 2,
          name: "20 минут",
          type: "icon",
          icon: "HiOutlinePhone",
        },
        {
          id: 3,
          name: "20 sms",
          type: "icon",
          icon: "HiMail",
        },
      ],
    },
    {
      id: 3,
      title: "Салом 20",
      content: `
            <ul class="ml-5 list-disc">
                <li>Безлимитные звонки внутри сети</li>
                <li>Дополнительный пакет 4 Гб на видео, соцсети, мессенджеры</li>
            </ul>`,
      price: "20 сом / мес",
      options: [
        {
          id: 1,
          name: "4 ГБ",
          type: "icon",
          icon: "HiGlobeAlt",
        },
        {
          id: 2,
          name: "20 минут",
          type: "icon",
          icon: "HiOutlinePhone",
        },
        {
          id: 3,
          name: "20 sms",
          type: "icon",
          icon: "HiMail",
        },
      ],
    },
  ]

  return (
    <div>
      <Title size='3xl' display='h2'>Тарифы</Title>
      <div className='grid grid-cols-3 gap-6 mt-6'>
        {tarifs.map((tarif) => (
          <TarifCard key={tarif.id} tarif={tarif}/>
        ))}
      </div>
    </div>
  )
}

export default TarifsSection