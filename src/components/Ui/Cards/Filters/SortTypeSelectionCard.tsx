
import React from 'react'
import Title from '../../Title/Title'
import { ISortTypeSelectionCardProps } from './lib/types/IFiltersCardTypes'
import clsx from 'clsx'
import Image from 'next/image'


const SortTypeSelectionCard = ({data}:ISortTypeSelectionCardProps) => {
  return (
    <div className={clsx('p-6 rounded-3xl cursor-pointer flex items-center gap-4',{
      'border border-secondary-200': !data.active,
      'border border-primary-50/15 bg-primary-50/10 ': data.active,
    })}>
      {
        data.iconSrc &&
        <div>
          <Image 
            src={data.iconSrc}
            height={60}
            width={60}
            alt={data.title }
            unoptimized
            className='max-w-full'
            />
        </div>
      }
      <Title font='lg' display='h5' size='lg'>
        {
          data.title 
        }
      </Title>
    </div>
  )
}

export default SortTypeSelectionCard