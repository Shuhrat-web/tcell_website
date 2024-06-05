import React from 'react'
import { IUssdCommandsSectionTypes } from '../lib/types/IUssdCommandsPageTypes'
import UssdCommandCard from '@/components/Ui/Cards/UssdCommand/UssdCommandCard'
import { staticUssdCommands } from '@/lib/requests/resources/UssdCommands/lib/data/StatucUssdCommands'

const UssdCommandsSection = ({className}:IUssdCommandsSectionTypes) => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
        {
          staticUssdCommands.map((command,i) => <UssdCommandCard key={i} command={command.command} description={command.description} />)
        }
      </div>
    </section>
  )
}

export default UssdCommandsSection