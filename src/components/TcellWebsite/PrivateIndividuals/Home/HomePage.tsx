import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import NewsSection from './components/NewsSection'
import ProductsSection from './components/ProductsSection'
import ColoredBannerSection from './components/Banners/ColoredBannerSection'

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
      <div className='t__container'>
        <NewsSection className=' mt-24' />
        <ProductsSection className=' mt-24' />
        <ColoredBannerSection 
          className='mt-24'
          bgColor='#F5D9FF'
          title='Стать абонентом Tcell'
          description='Участвуйте в онлайн аукционе и приобретите красивые номера от TCELL'
          url='/'
          img='/images/addon_banner_1.svg'
        />
      </div>
    </div>
  )
}

export default HomePage