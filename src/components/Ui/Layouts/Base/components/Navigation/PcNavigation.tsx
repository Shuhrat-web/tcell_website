'use client'
import Logo from '@/components/Ui/Logo'
import React, { useState } from 'react'
import { IPcNavigationProprs } from '../../lib/types/IBaseLayoutTypes'
import ContainButton from '@/components/Ui/Buttons/ContainButton'
import { HiMagnifyingGlass,HiGlobeAlt,HiChevronDown   } from "react-icons/hi2";


const PcNavigation = ({links}:IPcNavigationProprs) => {
  const [activeTab,setACtiveTab] = useState<number>(1)
  return (
    <div className='absolute top-5 left-0 z-40 w-full'>
      <div className='flex items-center justify-between t__container'>
        <div className='flex gap-x-5'>
          <Logo 
          height={48} 
          width={48} 
          fill='#fff' />
          <nav className=' text-white'>
            <ul className='flex gap-x-6'>
                {links.map(tab => 
                    <li className={`${tab.id === activeTab ? 'border-white font-medium' : 'border-transparent cursor-pointer'} border-b`} key={tab.id}>{tab.name}</li>
                  )
                }
            </ul>
            <ul className='flex gap-x-4 mt-2'>
              {links.find(tab => tab.id === activeTab)?.children.map((link,i) => 
                  <li key={i}>{link.name}</li>
                )
              }
            </ul>
          </nav>
        </div>
        <div className='flex gap-x-4'>
          <ContainButton size='none' extraClass='text-white flex items-center gap-x-1' type='none'>
            <HiMagnifyingGlass />
            Поиск
          </ContainButton>
          <ContainButton size='none' extraClass='text-white flex items-center gap-x-1' type='none'>
            <HiGlobeAlt />
            РУС
            <HiChevronDown/>
          </ContainButton>
        </div>
      </div>
    </div>
  )
}

export default PcNavigation