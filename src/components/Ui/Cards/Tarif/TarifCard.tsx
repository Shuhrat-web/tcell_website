import React from 'react'
import { ITarifCardProps } from './lib/types/ITarifCardTypes'
import Title from '../../Title/Title'
import ContainButton from '../../Buttons/ContainButton'

const TarifCard = ({tarif}:ITarifCardProps) => {
  return (
    <div className='t__card__secondary'>
        <Title 
        size='2xl' 
        display='h5'>
            {tarif.title}
        </Title>
        <div className='mt-7' dangerouslySetInnerHTML={{__html: tarif.content}} />
        <div className='mt-28'>
            <Title 
            size='2xl' 
            display='h5'
            extraClass='mb-7'>
                {tarif.price}
            </Title>
            <ContainButton 
            extraClass='h-12 w-full font-medium text-lg'
            size='none' 
            type='secondary'>
                Подробнее
            </ContainButton>
        </div>
    </div>
  )
}

export default TarifCard