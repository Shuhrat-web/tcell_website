import clsx from 'clsx'
import React from 'react'
import { INavigationDialogprops } from '../../lib/types/IBaseLayoutTypes'
import { HiXMark } from "react-icons/hi2";
import ContainButton from '@/components/Ui/Buttons/ContainButton'

const NavigationDialog = ({children,show,toggleShow}:INavigationDialogprops) => {
  return (
    <div className={clsx('fixed left-0 w-full h-full z-50 bg-white duration-200',{
      ' top-0 opacity-100 visible': show,
      'top-full opacity-0 invisible':!show
    })}>
      <div className=' t__container h-[500px] overflow-y-auto'>
        <div className='flex justify-end py-4'>
          <ContainButton onClick={() => toggleShow()} extraClass='text-black text-4xl' size='none' type='text'>
            <HiXMark />
          </ContainButton>
        </div>
        {children}
      </div>
    </div>
  )
}

export default NavigationDialog