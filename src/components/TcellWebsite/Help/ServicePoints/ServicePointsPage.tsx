import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import ContactsSection from '@/components/Ui/SharedSections/Contacts/ContactsSection';
import { staticContacts } from '@/lib/requests/resources/Contacts/lib/data/StaticContactsData';
import React from 'react'
import ServicesPointsListTable from './components/ServicesPointsListTable';
import { staticServicePoints } from '@/lib/requests/resources/ServicePoints/lib/data/StaticServicePointsData';
import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider';
import ServicePointsMap from './components/ServicePointsMap';

const ServicePointsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Помощь', href: '#', current: false },
    { name: 'Точки обслуживания', href: '#', current: true },
  ];
  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs 
          links={breadcrumbPages} 
        />
        <ServicePointsMap 
          servicePoints={staticServicePoints} 
        />
        <ContactsSection 
          className='mt-11 mb-8' 
          items={staticContacts}
        />
        <ServicesPointsListTable 
          servicePoints={staticServicePoints} 
        />
      </div>
    </FadeOutProvider>
  )
}

export default ServicePointsPage