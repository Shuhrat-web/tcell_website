import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import NewsSection from './components/NewsSection'
import ProductsSection from './components/ProductsSection'
import FaqSection from './components/FaqSection'
import AppsSection from './components/AppsSection'
import TarifsSection from './components/TarifsSection'

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
        <NewsSection />
        <TarifsSection className="my-24" />
        <ProductsSection className='mb-24' />
        <AppsSection className='mb-24' />
        <FaqSection />
      </div>
    </div>
  )
}

export default HomePage