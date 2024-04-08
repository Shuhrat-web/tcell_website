'use client'
import Logo from '@/components/Ui/Logo'
import React, { useEffect, useState } from 'react'
import { IPcNavigationProprs } from '../../lib/types/IBaseLayoutTypes'
import ContainButton from '@/components/Ui/Buttons/ContainButton'
import { HiMagnifyingGlass,HiGlobeAlt,HiChevronDown   } from "react-icons/hi2";
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import Link from 'next/link'



const PcNavigation = ({links}:IPcNavigationProprs) => {
  const [activeTab,setACtiveTab] = useState<number>(1)
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()
  const [absoluteNav,setIsAbsoluteNav] = useState<boolean>(true)
  const absoluteNavigationList:string[] = [`/${locale}/for-home`,`/${locale}`]

  const isPathNameAbsolute = (el:any) => el === pathName

  const checkIfPathNameIsAbsoulute = ():boolean => {
    return absoluteNavigationList.some(isPathNameAbsolute)
  }

  useEffect(() => {
    setIsAbsoluteNav(checkIfPathNameIsAbsoulute)
  },[pathName])
  
  return (
    <div className={clsx('w-full',{
      'absolute top-5 left-0 z-40 ': absoluteNav,
      'mb-24 py-4': !absoluteNav
    })}>
      <div className='flex items-center justify-between t__container'>
        <div className='flex gap-x-5'>
          <Logo 
          height={48} 
          width={48} 
          fill={absoluteNav ? '#fff' : '#000'} />
          <nav className={`${absoluteNav ? 'text-white' : 'text-black'}`}>
            <ul className='flex gap-x-6'>
                {links.map(tab => 
                    <li 
                    className={clsx('border-b',{
                      'border-white font-medium': tab.route && tab.route === pathName,
                      'border-transparent cursor-pointer': !tab.route || tab.route !== pathName 
                    })}
                    onClick={() => {
                      if(tab.route)router.push(`/${locale}${tab.route}`)     
                      if(tab.id) setACtiveTab(tab.id)                 
                    }}
                    key={tab.id}>
                      {tab.name}
                    </li>
                  )
                }
            </ul>
            <ul className='flex gap-x-4 mt-2'>
              {links.find(tab => tab.id === activeTab)?.children.map((link,i) => 
                  <li key={i}>
                    <Link href={`/${locale}/${link.route}`}>
                      {link.name}
                    </Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
        <div className='flex gap-x-4'>
          <ContainButton 
          size='none' 
          extraClass={`${absoluteNav ? 'text-white':'text-black'} flex items-center gap-x-1`}
          type='none'>
            <HiMagnifyingGlass />
            Поиск
          </ContainButton>
          <ContainButton 
          size='none' 
          extraClass={`${absoluteNav ? 'text-white':'text-black'} flex items-center gap-x-1`} 
          type='none'>
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