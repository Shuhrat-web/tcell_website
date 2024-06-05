import React, { ReactNode } from 'react'
import { ITarifCardProps } from './lib/types/ITarifCardTypes'
import Title from '../../Title/Title'
import { HiGlobeAlt, HiOutlinePhone, HiMail, HiPhotograph  } from "react-icons/hi";
import { MdOutlineSpeed } from "react-icons/md";

import Image from 'next/image'


const TarifCard = ({tarif,showImg = false}:ITarifCardProps) => {

    const getIconByName = (icon: string ) => {
        switch (icon) {
            case 'HiGlobeAlt': 
                return <HiGlobeAlt/>
            case 'HiOutlinePhone': 
                return <HiOutlinePhone/>
            case 'HiMail': 
                return <HiMail/>
            case 'MdOutlineSpeed': 
                return <MdOutlineSpeed />
            default: 
                return <HiPhotograph />
        }
    }

  return (
    <div className='t__card__secondary relative overflow-hidden'>
        {tarif.img && showImg &&
            <div className='absolute top-0 left-0 h-32 w-full'>
                <Image 
                    src={tarif.img}
                    height={332}
                    width={138}
                    alt={tarif.title}
                    unoptimized
                    className='w-full h-full object-cover'
                />
            </div>
        }
        <Title 
        extraClass={tarif.img && showImg ? 'mt-32' :''}
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
                    <div className='text-[#821EBE] text-xl'>{getIconByName(option.icon)}</div>
                    <p className='font-medium text-xl leading-5'>{option.name}</p>
                </div>
            ))}
        </div>
        <div className='max-w-[320px] h-[1px] my-8 bg-[#EDEDED]'>            
        </div>
        {tarif.content && 
            <div dangerouslySetInnerHTML={{__html: tarif.content}} />        
        }
        {
            tarif.ussd &&
            <div className='mt-8 space-y-2'>
                <Title size='lg' display='h5'>Команда для подключения:</Title>
                <a className='text-primary text-lg xl:text-3xl font-medium' href={`tel:tarif.callCenter`}>{tarif.ussd}</a>
            </div>
        }
        {
            tarif.callCenter &&
            <div className='mt-8 space-y-2'>
                <Title size='lg' display='h5'>Call–центр:</Title>
                <a className='text-primary text-lg xl:text-3xl font-medium' href={`tel:tarif.callCenter`}>{tarif.callCenter}</a>
            </div>
        }
    </div>
  )
}

export default TarifCard