'use client'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import PcNavigation from './PcNavigation'
import { IPcNavigationProps } from '../../lib/types/IBaseLayoutTypes'
import MobileNavigation from './MobileNavigation'

const BaseNavigation = ({links}:IPcNavigationProps) => {
    const pathName = usePathname()
    const [absoluteNav,setIsAbsoluteNav] = useState<boolean>(true)
    const locale = useLocale()
    const absoluteNavigationList:string[] = [`/${locale}/for-home`,`/${locale}`,`/${locale}/for-bussines`]

    const isPathNameAbsolute = (el:any) => el === pathName

    const checkIfPathNameIsAbsoulute = ():boolean => {
        return absoluteNavigationList.some(isPathNameAbsolute)
    }

    useEffect(() => {
        setIsAbsoluteNav(checkIfPathNameIsAbsoulute)
    },[pathName])
    
  return (
    <>
      <PcNavigation absoluteNav={absoluteNav} links={links} />
      <MobileNavigation absoluteNav={absoluteNav} links={links} />
    </>
  )
}

export default BaseNavigation