import React from 'react'
import { IUssdCommandCardProps } from './lib/types/IUssdCommandCardTypes'
import Title from '../../Title/Title'

const UssdCommandCard = ({command,description}:IUssdCommandCardProps) => {
  return (
    <div className='t__card__secondary relative'>
      <Title size='lg'>{command}</Title>
      <div className='text-secondary-400 mt-3'>
        {description}
      </div>
      <a className='absolute left-0 top-0 w-full h-full' href={`tel:${command}`} target="_blank" />
    </div>
  )
}

export default UssdCommandCard