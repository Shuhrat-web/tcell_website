import React from 'react'
import { IPurpleDayCardProps } from './lib/types/IPurpleDayCardTypes'
import Image from 'next/image'

const PurpleDayCard = (purple: IPurpleDayCardProps) => {
  return (
    <div className='p-5 bg-[#F0F0F0] rounded-xl'>
        <div>
            <Image src={`${purple.icon}`} width={48} height={48} unoptimized alt=''/>
        </div>
        <p className='text-lg font-semibold leading-9 text-[#262626] mt-3'>{purple.name}</p>
        <p className='text-base font-medium leading-6 text-[#8C8C8C] mt-1'>{purple.description}</p>
    </div>
  )
}

export default PurpleDayCard