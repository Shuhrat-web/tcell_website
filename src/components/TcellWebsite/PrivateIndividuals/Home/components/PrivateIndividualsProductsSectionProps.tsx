'use client'
import React from 'react'
import { IPrivateIndividualsProductsSectionProps } from '../lib/types/IHomePageTypes'
import Title from '@/components/Ui/Title/Title'
import { IService } from '@/lib/requests/resources/Service/lib/types/IServicesTypes'
import ServiceCard from '@/components/Ui/Cards/Service/ServiceCard'
import ColoredBannerSection from './Banners/ColoredBannerSection'
import clsx from 'clsx'
import { useLocale } from 'next-intl'

const PrivateIndividualsProductsSection = ({className}:IPrivateIndividualsProductsSectionProps) => {
  const locale = useLocale()

  const services:IService[] = [
    {
      id: 2,
      name: 'Услуги',
      desctiption: 'Смотрите фильмы без ограничений',
      img: '/images/services/service_2.svg',
      url: `/${locale}/services?module_id=1`
    },
    // {
    //   id: 3,
    //   name: 'Лояльность',
    //   desctiption: 'Наслаждайтесь любимой музыкой',
    //   img: '/images/services/service_3.svg',
    //   // url: `/${locale}/private-individuals/loyalty?module_id=1`
    // },
  ] 
  
  return (
    <section className={clsx(className,'')}>
      <Title size='3xl' display='h3'>
        Продукты Tcell
      </Title>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-24 gap-6'>
        <div className='col-span-2'>
          <ColoredBannerSection 
            className=''
            bgColor='#9747FF'
            textColor='white'
            title='Как стать абонентом Tcell?'
            description='Для того, что бы стать абонентом компании Tcell вам необходимо подойти в любой центр обслуживания с пластиковым паспортом'
            url={`/${locale}/help/service-points?module_id=1`}
            btnText='Посмотреть на карте'
            img='/images/addon_banner_3.webp'
          />
        </div>
        {
          services.map(service => (
            <div className='col-span-2 xl:col-span-1 h-full' key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))
        }
      </div>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
        {
          services.map(service => (
            <ServiceCard service={service} key={service.id} />
          ))
        }
      </div> */}
    </section>
  )
}

export default PrivateIndividualsProductsSection