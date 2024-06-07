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
        title='Опция «Мегабайты за звонки»'
        description='Мегабайты интернета за входящие звонки с других мобильных операторов! 10 Мб - 1 мин. Команда подключения: *824*1#.'
        bgImage='/images/banner_bg.png'
        bannerIcon='/images/01_banner.png'
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