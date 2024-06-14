'use client'
import Logo from '@/components/Ui/Logo'
import React, { useEffect, useState } from 'react'
import { IPcNavigationProprs } from '../../lib/types/IBaseLayoutTypes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { motion } from 'framer-motion'



const PcNavigation = ({links,absoluteNav}:IPcNavigationProprs) => {

  const [activeTab,setACtiveTab] = useState<number>(1)
  const locale = useLocale()
  const router = useRouter()
  const searchParams = useSearchParams()
  const module_id = searchParams.get('module_id')


  useEffect(() => {
    if(module_id)setACtiveTab(+module_id)
      console.log(module_id);
      
  },[module_id])
  
  return (
    <div className={clsx('w-full md:block hidden',{
      'absolute top-4 left-0 z-40 ': absoluteNav,
      'mb-10 py-4': !absoluteNav
    })}>
      <div className='flex flex-wrap gap-4 items-center justify-between t__container'>
        <div className='flex gap-x-5'>
          <Link href={`/${locale}?module_id=1`}>
            <Logo 
            height={48} 
            width={48} 
            fill={absoluteNav ? '#fff' : '#000'} />
          </Link>
          <nav className={`${absoluteNav ? 'text-white' : 'text-dark-blue'}`}>
            <ul className='flex gap-x-6  sm:w-full w-60 overflow-x-auto lg:overflow-hidden'>
              {links.map(tab => 
                  <li 
                  className={clsx('shrink-0 relative',{
                    'cursor-pointer font-medium': activeTab !== tab.id,
                    'font-bold': absoluteNav && activeTab === tab.id
                  })}
                  onClick={() => {
                    if(tab.route)router.push(`/${locale}${tab.route}?module_id=${tab.id}`)     
                    if(tab.id) setACtiveTab(tab.id)                 
                  }}
                  key={tab.id}>
                    {tab.name} 
                    {
                      activeTab === tab.id &&
                      <motion.span layoutId='underline' className={`block left-0 top-full h-[1px] w-full ${ absoluteNav ? 'bg-white':'bg-black'}`} />
                    }
                  </li>
                )
              }
            </ul>
            <ul className='flex gap-x-4 sm:w-full w-60 overflow-x-auto mt-2'>
              {links.find(tab => tab.id === activeTab)?.children.map((link,i) => 
                  <li key={i}>
                    <Link href={`/${locale}/${link.route}${link.route?.includes('?') ?  '&module_id=' + link.tabId : `?module_id=${link.tabId}`}`}>
                      {link.name}
                    </Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
        <div className='hidden md:flex gap-x-4'>
          {/* <ContainButton 
          size='none' 
          extraClass={`${absoluteNav ? 'text-white':'text-black'} flex items-center gap-x-1`}
          type='none'>
            <HiMagnifyingGlass />
            Поиск
          </ContainButton> */}
          {/* <ContainButton 
          size='none' 
          extraClass={`${absoluteNav ? 'text-white':'text-black'} flex items-center gap-x-1`} 
          type='none'>
            <HiGlobeAlt />
            РУС
            <HiChevronDown/>
          </ContainButton> */}
        </div>
      </div>
    </div>
  )
}

export default PcNavigation