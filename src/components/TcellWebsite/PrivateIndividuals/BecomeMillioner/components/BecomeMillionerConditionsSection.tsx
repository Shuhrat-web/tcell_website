import Title from '@/components/Ui/Title/Title'
import React from 'react'

const BecomeMillionerConditionsSection = () => {
  return (
    <div className='mt-16'>
        <Title size='2xl' display='h4'>Условия</Title>

        <div className='bg-[#F0F0F0] p-4 rounded-[20px] mt-8'>
            <p className='text-base font-normal leading-5 text-[#262626]'>Количество ID–номеров неограниченно, стоимость одного ID–номера — 3 сомони.</p>
            <div className='mt-6'>
                <p className='text-base font-normal leading-5 text-[#262626]'>При приобретении: </p>
                <p className='text-base leading-5 text-[#262626] font-semibold mt-3'>20 ID — 54 сомони (10% скидка)</p>
                <p className='text-base leading-5 text-[#262626] font-semibold mt-3'>50 ID — 128 сомони (15% скидка)</p>
                <p className='text-base leading-5 text-[#262626] font-semibold mt-3'>100 ID — 240 сомони (20% скидка)</p>
            </div>
            <p className='text-base font-normal leading-5 text-[#262626] mt-3'>Акция продлится с 1 сентября по 31 декабря. <span className='text-base leading-5 text-[#262626] font-bold mt-3'>Дата финального розыгрыша 04.01.2025 г.</span></p>
        </div>
    </div>
  )
}

export default BecomeMillionerConditionsSection