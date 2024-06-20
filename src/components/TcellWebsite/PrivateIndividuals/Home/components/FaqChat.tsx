import Title from '@/components/Ui/Title/Title'
import React, { useState } from 'react'
import Image from 'next/image'
import TextButton from '@/components/Ui/Buttons/TextButton'
import { HiArrowLongRight } from 'react-icons/hi2'


const FaqChat = () => {
  return (
    <div 
        className='min-h-[375px] h-full bg-cover bg-no-repeat rounded-3xl overflow-hidden p-8 bg-gradient-to-bl from-[#151B28] to-[#4A5E8E] relative'
      >
        <div 
        style={{
            minHeight: 'inherit'
        }}
        className='flex flex-col justify-between'>
            <div>
                <Title 
                size='2xl' 
                font='lg'
                color='white'
                display='h3'>
                    Остались вопросы?
                </Title>
                <p className='text-white mt-5 md:text-lg'>
                    Не ждите на телефонных линиях!<br />
                    Мгновенное решение вопросов через чат-бот WhatsApp
                </p>
            </div>
            <TextButton 
                type='white' 
                extraClass='flex items-center gap-x-2 z-30' 
                hideHover 
                size='none'
                url='https://wa.me/992927777777 '>
                Подробнее
                <HiArrowLongRight />
            </TextButton>
        </div>
        <Image 
            src={'/images/wsapp_chat.png'}
            height={390}
            width={390}
            alt={'wsapp_chat'}
            unoptimized
            className='max-w-full absolute -bottom-16 -right-12 z-10'
        />
    </div>
  )
}

export default FaqChat