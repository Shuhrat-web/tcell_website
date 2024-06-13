import React from 'react'
import { IPrivateIndividualsProductsSectionProps } from '../lib/types/IHomePageTypes'
import Title from '@/components/Ui/Title/Title'
import { IService } from '@/lib/requests/resources/Service/lib/types/IServicesTypes'
import ServiceCard from '@/components/Ui/Cards/Service/ServiceCard'
import ColoredBannerSection from './Banners/ColoredBannerSection'
import clsx from 'clsx'

const PrivateIndividualsProductsSection = ({className}:IPrivateIndividualsProductsSectionProps) => {
  const services:IService[] = [
    {
      id: 2,
      name: 'Услуги',
      desctiption: 'Смотрите фильмы без ограничений',
      img: '/images/services/service_2.svg'
    },
    {
      id: 3,
      name: 'Лояльность',
      desctiption: 'Наслаждайтесь любимой музыкой',
      img: '/images/services/service_3.svg'
    },
  ] 
  
  return (
    <section className={clsx(className,'')}>
      <Title size='3xl' display='h3'>
        Продукты Tcell
      </Title>
      <ColoredBannerSection 
        className='mt-24'
        bgColor='#9747FF'
        textColor='white'
        title='Как стать абонентом Tcell?'
        description='Для того, что бы стать абонентом компании Tcell вам необходимо подойти в любой центр обслуживания с пластиковым паспортом'
        url='/'
        img='/images/addon_banner_3.svg'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        {
          services.map(service => (
            <ServiceCard service={service} key={service.id} />
          ))
        }
      </div>
    </section>
  )
}

export default PrivateIndividualsProductsSection