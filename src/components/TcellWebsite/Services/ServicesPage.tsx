import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes'
import Title from '@/components/Ui/Title/Title'
import React from 'react'
import ServiceInfoSection from './components/ServiceInfoSection'
import { serviceSectionsData } from './lib/data/StaticServicePageSections'
import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider'
const ServicesPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    {name: 'Ceрвисы и услуги', href: '/services', current: true}
  ]

  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs links={breadcrumbPages}/>
        <Title extraClass='mt-8' size='3xl' display='h2'>Сервисы и Услуги</Title>
        {
          serviceSectionsData.map((serviceSection,i) => (
          <ServiceInfoSection 
            key={i}
            title={serviceSection.title} 
            description={serviceSection.description} 
            className='mt-8 mb-11' 
            options={serviceSection.options}
            services={serviceSection.services}
            content={serviceSection.content}
          />
          ))
        }
      </div>
    </FadeOutProvider>
  )
}

export default ServicesPage