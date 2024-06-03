import React from 'react'
import { IFaqCardProps } from './lib/types/IFaqCardTypes'
import { HiChevronDown } from "react-icons/hi";

import Title from '../../Title/Title'

const FaqCard = ({faq,activeFaqId=0,onToggleFaq}:IFaqCardProps) => {
  return (
    <div className=' border-t-2 border-secondary-300'>
        <div onClick={() => onToggleFaq(faq.id)} className='flex justify-between py-4 cursor-pointer'>
            <Title extraClass='w-10/12' size='lg' font='lg' display='h3'>{faq.question}</Title>
            <div className='flex justify-end items-center w-2/12'>
                <span className={`duration-150  ${activeFaqId === faq.id ? 'rotate-180' : 'rotate-0'}`}><HiChevronDown /></span>
            </div>
        </div>
        <div className={` text-secondary-50 py-4 duration-150 ease-out ${activeFaqId === faq.id ? 'opacity-100 visible':' invisible opacity-0 absolute'}`}>
            <div dangerouslySetInnerHTML={{__html: faq.answer}} />
        </div>
    </div>
  )
}

export default FaqCard