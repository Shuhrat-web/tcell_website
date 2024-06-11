import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import Title from '@/components/Ui/Title/Title';
import React from 'react'
import TarifsSection from './components/TarifsSection';
import { ITarifsPageProps } from './lib/types/ITarifPageTypes';
import { staticTarifs } from '@/lib/requests/resources/Tarifs/lib/data/StaticTarifsData';
import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider';
// import TarifsFilterSection from './components/TarifsFilterSection';

const TarifsPage = ({category_id}:ITarifsPageProps) => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Тарифы', href: '/tarifs', current: true },
  ];

  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs links={breadcrumbPages} />
        <Title extraClass='my-11' size='3xl' display='h2'>
          Тарифы
        </Title>
        {/* <TarifsFilterSection className="mt-8 mb-24" /> */}
        <TarifsSection tarifs={staticTarifs.filter(tarif => tarif.category_id === category_id)} />
      </div>
    </FadeOutProvider>
  )
}

export default TarifsPage