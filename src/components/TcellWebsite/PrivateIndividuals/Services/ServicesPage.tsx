import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes'
import Title from '@/components/Ui/Title/Title'
import React from 'react'
import ServicesFilterSecrion from './components/ServicesFilterSection'
import MaintenanceSection from './components/MaintenanceSection'

const ServicesPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    {name: 'Ceрвисы и услуги', href: '/services', current: true}
  ]
  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages}/>
      <Title extraClass='mt-8' size='3xl' display='h2'>Сервисы и Услуги</Title>
      <ServicesFilterSecrion className='my-8'/>
      <MaintenanceSection />
    </div>
  )
}

export default ServicesPage