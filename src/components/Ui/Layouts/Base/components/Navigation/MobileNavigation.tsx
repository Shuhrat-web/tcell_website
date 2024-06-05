'use client'
import React, { useEffect, useState } from 'react'
import { IMobileNavigationProps } from '../../lib/types/IBaseLayoutTypes'
import clsx from 'clsx'
import Logo from '@/components/Ui/Logo'
import ContainButton from '@/components/Ui/Buttons/ContainButton'
import { HiMenu } from "react-icons/hi";
import NavigationDialog from '../Dialogs/NavigationDialog'
import TextField from '@/components/Ui/Textfield/Textfield'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HiChevronDown } from "react-icons/hi2";

import { useLocale } from 'next-intl'


const MobileNavigation = ({links,absoluteNav}:IMobileNavigationProps) => {
    const [showNavigationDialog,setShowNavigationDialog] = useState(false)
    const [activeTab,setACtiveTab] = useState<number>(0)
    const router = useRouter()
    const locale = useLocale()

    useEffect(() => {
        if(showNavigationDialog) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "auto"
    },[showNavigationDialog])
  return (
    <>
        <NavigationDialog 
        show={showNavigationDialog} 
        toggleShow={() => 
            setShowNavigationDialog(false)
        }>
            <div>
                {/* <form action="">
                    <TextField
                        prevIcon={<HiMagnifyingGlass />}
                        value=''
                        onChange={() => {}} 
                        placeholder='Поиск'
                    />
                </form> */}
                <div className='mt-5'>
                    <ul className='flex flex-col gap-y-6'>
                        {
                            links.map(link => <li
                            className=''
                            onClick={() => {
                                // router.push(`/${locale}${link.route}`) 
                                setACtiveTab(activeTab === link.id ? 0 : link.id)
                                // setShowNavigationDialog(false)
                            } }
                            key={link.id}>
                                <div className='flex justify-between w-full text-white text-2xl font-medium uppercase'>
                                    <div className='w-10/12'>
                                        {link.name}
                                    </div>
                                    <span className={`w-2/12 flex justify-end items-center`}>
                                        <HiChevronDown className={`${activeTab === link.id ? 'rotate-180' : 'rotate-0'} duration-150`} />
                                    </span>
                                </div>
                                <div className={`${activeTab === link.id ? 'visible opacity-100 mt-5' : ' absolute top-full left-0 invisible opacity-0 mt-0'} overflow-hidden duration-300 ease-out`}>
                                    <ul className=' text-secondary-50 flex flex-col gap-y-2 ml-2'>
                                        {
                                            link.children.map((linkChild,i) => <li onClick={() => setShowNavigationDialog(false)} className='text-lg uppercase' key={i}>
                                                <Link className='w-full' href={`/${locale}/${linkChild.route}`}>
                                                    {linkChild.name}                                                
                                                </Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </NavigationDialog>
        <div  className={clsx('w-full md:hidden flex justify-between items-center t__container',{
            'absolute top-5 left-0 z-40 ': absoluteNav,
            'mb-10 py-4': !absoluteNav
        })}>
            <Logo 
            height={48} 
            width={48}  
            fill={absoluteNav ? '#fff' : '#000'} />
            <ContainButton 
            onClick={() => setShowNavigationDialog(true)}
            size='none' 
            extraClass={`${absoluteNav ? 'text-white': 'text-black'} text-4xl`}
            type='none'>
                <HiMenu />
            </ContainButton>
        </div>
    </>
  )
}

export default MobileNavigation