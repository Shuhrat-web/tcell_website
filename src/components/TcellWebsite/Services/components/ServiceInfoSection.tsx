import React from 'react'
import { IServiceInfoSectionProps } from '../lib/types/IServicePageTypes'
import clsx from 'clsx'
import Title from '@/components/Ui/Title/Title'
import MaintenanceCard from '@/components/Ui/Cards/Maintenance/MaintenanceCard'

const ServiceInfoSection = ({className,title,description,services,options,content}:IServiceInfoSectionProps) => {
  return (
    <section className={clsx(className,'')}>
       <div>
            <div className='mb-5'>
                <Title size='xl'>
                    {title}
                </Title>
                <p className='text-secondary mt-4'>
                    {description}
                </p>
            </div>
            <div className='lg:w-10/12 xl:w-8/12 gap-6 grid grid-cols-1 md:grid-cols-3'>
                {options.map(el => (
                    <div key={el.id}>
                        <Title font='lg' size='lg'>
                            {el.title}
                        </Title>
                        <p className='text-secondary'>
                            {el.description}
                        </p>
                    </div>
                ))}
            </div>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8'>
            {
                services.map(service => <MaintenanceCard key={service.id} service={service} />)
            }
       </div>
        {
            content &&
            <div className='mt-8' dangerouslySetInnerHTML={{__html: content}} />
        }
    </section>
  )
}

export default ServiceInfoSection