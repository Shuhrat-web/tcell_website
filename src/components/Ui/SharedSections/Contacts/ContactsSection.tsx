import React from 'react'
import { IContactsSectionProps } from '../lib/types/ISharedSections'
import clsx from 'clsx'
import Title from '../../Title/Title'
import ContactsCard from '../../Cards/Contacts/ContactsCard'

const ContactsSection = ({items,className}:IContactsSectionProps) => {
  return (
    <section className={clsx(className,'')}>
      <Title extraClass='mb-8' size='3xl' display='h2'>
        Средства связи
      </Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {
          items.map(contact => <ContactsCard key={contact.id} contacts={contact} />)
        }
      </div>
    </section>
  )
}

export default ContactsSection