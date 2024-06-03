'use client'
import ContainButton from '@/components/Ui/Buttons/ContainButton'
import TextField from '@/components/Ui/Textfield/Textfield'
import Title from '@/components/Ui/Title/Title'
import React, { useState } from 'react'

const ForHomeForm = () => {
    const handleSubmit = (e:any) => {
        e.preventDefault()
    }
    const [fio,setFio] = useState<string>('')
    const [phone,setPhone] = useState<string>('')

    return (
    <div style={{
      backgroundImage: `url(/images/orange_contact_bg.svg)`,
    }} 
    className='h-full bg-cover bg-no-repeat rounded-3xl overflow-hidden p-8'
    >
        <form onSubmit={handleSubmit}>
            <Title 
            size='2xl' 
            font='lg'
            display='h3'>
                Оставить заявку
            </Title>
            <p className='text-dark-blue mt-5'>
                Если у вас остались вопросы, можете написать в поддержку и мы с радостью поможем вас с вашей проблемой 
            </p>
            <div className='space-y-5 my-8 w-96'>
                <TextField 
                    size='lg'
                    name='fio'
                    value={fio}
                    placeholder='Имя и Фамилия'
                    onChange={(val:string) => setFio(val)}
                />
                <TextField
                    size='lg'
                    name='phone' 
                    value={phone}
                    placeholder='Номер телефона'
                    onChange={(val:string) => setPhone(val)}
                />
            </div>

            <ContainButton type='black'>
                Отправить заявку
            </ContainButton>
        </form>
    </div>
  )
}

export default ForHomeForm