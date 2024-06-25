// import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
// import ForBussinesNewsSection from './components/ForBussinesNewsSection'
import ForBussinessAdventagesSection from './components/ForBussinessAdventagesSection'
// import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider'
import FromLeftAnimationProvider from '@/components/Ui/AnimationProviders/FromLeftAnimationProvider'
import ForBussinesAppsSection from './components/ForBussinesAppsSection'
import ImageBanner from '@/components/Ui/Banners/ImageBanner'
import ForBussinesBussinesSolutionsSection from './components/ForBussinesBussinesSolutionsSection'

const ForBussinessHomePage = () => {
  return (
    <FromLeftAnimationProvider>
      <div>
        <ImageBanner 
          img="/images/banner_bussines.webp"
          alt='forBussinesBanner' 
        />
        {/* <TextWithImageBanner 
          title='Специальное тарифное предложение для корпоративных клиентов и бизнеса партнёров'
          // description='Теперь в приложении MyTcell можно покупать билеты и туры, и не беспокоится за неудобства '
          bgColor='#020204'
          bannerIcon='/images/02_banner.webp'
          // url='/'
        /> */}
        <div className='t__container mt-24'>
            {/* <ForBussinesNewsSection /> */}
            <ForBussinesBussinesSolutionsSection className='mb-24'/>
            {/* <ForBussinessAdventagesSection  className="my-24" /> */}
            <ForBussinesAppsSection />
        </div>
      </div>
    </FromLeftAnimationProvider>
  )
}

export default ForBussinessHomePage