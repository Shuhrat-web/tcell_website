import React from 'react'
import { IUssdCommandsSectionTypes } from '../lib/types/IUssdCommandsPageTypes'
import { createArray } from '@/lib/shared/helpers/Helpers'
import UssdCommandCard from '@/components/Ui/Cards/UssdCommand/UssdCommandCard'

const UssdCommandsSection = ({className}:IUssdCommandsSectionTypes) => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
        {
          createArray(6).map((_,i) => <UssdCommandCard key={i} command='*100#' description='Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.' />)
        }
      </div>
    </section>
  )
}

export default UssdCommandsSection