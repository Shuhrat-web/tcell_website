import React from 'react'
import { IContactsCardProps } from './lib/types/IContactsCardTypes'
import Title from '../../Title/Title'
import Image from 'next/image'


const ContactsCard = ({contacts}:IContactsCardProps) => {
  return (
    <div className='t__card__secondary relative'>
      {
        contacts.img &&
        <Image 
          src={contacts.img}
          height={30}
          width={30}
          alt={contacts.name}
          unoptimized
          className='max-w-full mb-8'
          />
      }
      <Title display='h3' size='md'>
        {contacts.value}
      </Title>
      <div className='text-secondary font-medium mt-2'>
        {contacts.name}
      </div>
      {
        contacts.type === 'phone' &&
        <a className='absolute left-0 top-0 w-full h-full' href={`tel:${contacts.value}`} />
      }
    </div>
  )
}

export default ContactsCard