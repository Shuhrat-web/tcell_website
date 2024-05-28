import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import Title from '@/components/Ui/Title/Title';
import React from 'react'
import TarifsSection from './components/TarifsSection';
import TarifsFilterSection from './components/TarifsFilterSection';

const TarifsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Тарифы', href: '/tarifs', current: true },
  ];

  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages} />
      <Title extraClass='mt-11' size='3xl' display='h2'>
        Тарифы
      </Title>
      <TarifsFilterSection className="mt-8 mb-24" />
      <TarifsSection />
    </div>
  )
}

export default TarifsPage