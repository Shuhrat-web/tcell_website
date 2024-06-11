import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import Title from '@/components/Ui/Title/Title';
import React from 'react'
import UssdCommandsSection from './components/UssdCommandsSection';
import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider';

const UssdCommandsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Помощь', href: '#', current: false },
    { name: 'USSD Комманды', href: '#', current: true },
  ];
  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs links={breadcrumbPages} />
        <Title extraClass='mt-11 mb-24' size='3xl' display='h2'>
          USSD команды
        </Title>
        <UssdCommandsSection />
      </div>
    </FadeOutProvider>
  )
}

export default UssdCommandsPage