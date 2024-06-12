import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes'
import Title from '@/components/Ui/Title/Title'
import React from 'react'
import ServiceYandexSection from './components/ServiceYandexSection'
import ServicesPortalSection from './components/ServiceKidsPortalSection'
import ServicesVoiceSection from './components/ServiceVoiceSection'

const ServicesPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    {name: 'Ceрвисы и услуги', href: '/services', current: true}
  ]
  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages}/>
      <Title extraClass='mt-8' size='3xl' display='h2'>Сервисы и Услуги</Title>
      <ServiceYandexSection />
      <ServicesPortalSection />
      <ServicesVoiceSection />
    </div>
  )
}

export default ServicesPage