import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import NewsSection from './components/NewsSection'
import ProductsSection from './components/ProductsSection'
import ColoredBannerSection from './components/Banners/ColoredBannerSection'
import FaqSection from './components/FaqSection'

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
        <ProductsSection className=' my-24' />
        <ColoredBannerSection 
          className='mb-24'
          bgColor='#F5D9FF'
          title='Стать абонентом Tcell'
          description='Участвуйте в онлайн аукционе и приобретите красивые номера от TCELL'
          url='/'
          img='/images/addon_banner_1.svg'
        />
        <FaqSection />
      </div>
    </div>
  )
}

export default HomePage