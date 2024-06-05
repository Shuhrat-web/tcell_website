import React from 'react'
import { ITarifSectionProps } from '../lib/types/ITarifPageTypes'
import TarifCard from '@/components/Ui/Cards/Tarif/TarifCard'

const TarifsSection = ({className,tarifs}: ITarifSectionProps) => {

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {tarifs.map((tarif) => (
          <TarifCard key={tarif.id} tarif={tarif}/>
        ))}
      </div>
    </div>
  )
}

export default TarifsSection