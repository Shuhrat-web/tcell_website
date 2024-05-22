import React from 'react'
import { ITarifsFilterSectionProps } from '../lib/types/ITarifPageTypes'
import { ISortingCardData } from '@/components/Ui/Cards/Filters/lib/types/IFiltersCardTypes'
import SortTypeSelectionCard from '@/components/Ui/Cards/Filters/SortTypeSelectionCard'

const TarifsFilterSection = ({className}:ITarifsFilterSectionProps) => {
  const sortingFiltersData:ISortingCardData[] = [
    {
      id: 1,
      title: 'Тарифы «Салом»',
      active: true,
      iconSrc: '/images/3d/shopBagIcon.svg'
    },
    {
      id: 2,
      title: 'Тарифы «Смартфон»',
      active: false,
      iconSrc: '/images/3d/phoneIcon.svg'
    },
    {
      id: 3,
      title: 'Тарифы «Чи Гап»',
      active: false,
      iconSrc: '/images/3d/chatIcon.svg'
    }
  ]


  return (
    <div className={className}>
      <div className='grid grid-cols-4 gap-4'>
        {
          sortingFiltersData.map(data => (
            <SortTypeSelectionCard 
            data={data} 
            key={data.id} />
          ))
        }
      </div>
    </div>
  )
}

export default TarifsFilterSection