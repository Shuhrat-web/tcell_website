import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import Title from '@/components/Ui/Title/Title';
import React from 'react'
import FaqQuestionarySection from './components/FaqQuestionarySection';
import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider';

const FaqPage = () => {
    const breadcrumbPages: IBreadCrumb[] = [
      { name: 'Помощь', href: '#', current: false },
      { name: 'faq', href: '#', current: true },
    ];

    
  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs links={breadcrumbPages} />
        <Title extraClass='mt-11 mb-8' size='3xl' display='h2'>
          Помощь
        </Title>
        <FaqQuestionarySection />
      </div>
    </FadeOutProvider>
  )
}

export default FaqPage