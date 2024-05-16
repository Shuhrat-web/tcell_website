import React, { ReactNode } from 'react'
import { ITarifCardProps } from './lib/types/ITarifCardTypes'
import Title from '../../Title/Title'
import { HiGlobeAlt, HiOutlinePhone, HiMail, HiPhotograph  } from "react-icons/hi";
import { HiArrowLongRight } from 'react-icons/hi2'
import TextButton from '../../Buttons/TextButton';


const TarifCard = ({tarif}:ITarifCardProps) => {

    const getIconByName = (icon: ReactNode ) => {
        switch (icon) {
            case 'HiGlobeAlt': 
                return <HiGlobeAlt/>
            case 'HiOutlinePhone': 
                return <HiOutlinePhone/>
            case 'HiMail': 
                return <HiMail/>
            default: 
                return <HiPhotograph />
        }
    }

  return (
    <div className='t__card__secondary'>
        <Title 
        size='xl' 
        display='h6'>
            {tarif.title}
        </Title>
        <Title 
            size='2xl' 
            display='h5'
            extraClass='mt-4'>
                {tarif.price}
        </Title>
        <div>
            {tarif.options.map((option, index) => (
                <div key={index} className='flex items-center gap-4 mt-8'>
                    <div className='text-[#821EBE]'>{getIconByName(option.icon)}</div>
                    <p className='font-medium text-xl leading-5'>{option.name}</p>
                </div>
            ))}
        </div>
        <div className='max-w-[320px] h-[1px] my-8 bg-[#EDEDED]'></div>
        <div dangerouslySetInnerHTML={{__html: tarif.content}} />
        <div className='mt-8'>
        <TextButton extraClass='flex items-center gap-x-2'>
                Подробнее
                <HiArrowLongRight />
            </TextButton>
        </div>
    </div>
  )
}

export default TarifCard