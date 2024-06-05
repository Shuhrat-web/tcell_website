import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import PrivateIndividualsNewsSection from './components/PrivateIndividualsNewsSection'
import PrivateIndividualsProductsSection from './components/IPrivateIndividualsProductsSectionProps'
import PrivateIndividualsFaqSection from './components/PrivateIndividualsFaqSection'
import PrivateIndividualsAppsSection from './components/PrivateIndividualsAppsSection'
import PrivateIndividualsTarifsSection from './components/PrivateIndividualsTarifsSection'

const HomePage = () => {

  return (
    <div>
      <TextWithImageBanner 
        title='Мы заботимся не только о вашем комфорте в интернете но и в небе'
        description='Теперь в приложении MyTcell можно покупать билеты и туры, и не беспокоится за неудобства '
        bgImage='/images/banner_bg.png'
        bannerIcon='/images/bannerIcon.svg'
        url='/'
      />
      <div className='t__container mt-24'>
        <PrivateIndividualsNewsSection />
        <PrivateIndividualsTarifsSection className="my-24" />
        <PrivateIndividualsProductsSection className='mb-24' />
        <PrivateIndividualsAppsSection className='mb-24' />
        <PrivateIndividualsFaqSection />
      </div>
    </div>
  )
}

export default HomePage