import React from 'react'
import { IUssdCommandCardProps } from './lib/types/IUssdCommandCardTypes'
import Title from '../../Title/Title'

const UssdCommandCard = ({command,description}:IUssdCommandCardProps) => {
  return (
    <div>
      <Title url={`tel:${command}`} display='link' size='xl'>{command}</Title>
      <div className='text-secondary-400 mt-3'>
        {description}
      </div>
    </div>
  )
}

export default UssdCommandCard