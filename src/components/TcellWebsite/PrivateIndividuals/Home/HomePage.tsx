import React from 'react'
import PrivateIndividualsNewsSection from './components/PrivateIndividualsNewsSection'
import PrivateIndividualsProductsSection from './components/PrivateIndividualsProductsSectionProps'
import PrivateIndividualsFaqSection from './components/PrivateIndividualsFaqSection'
import PrivateIndividualsAppsSection from './components/PrivateIndividualsAppsSection'
import PrivateIndividualsTarifsSection from './components/PrivateIndividualsTarifsSection'
import FromLeftAnimationProvider from '@/components/Ui/AnimationProviders/FromLeftAnimationProvider'
import ImageBanner from '@/components/Ui/Banners/ImageBanner'

const HomePage = () => {

  return (
    <FromLeftAnimationProvider>
      <div>
        <ImageBanner 
          img="/images/banner_test.png"
          alt='privateIndividualsBanner' 
        />
        <div className='t__container mt-24'>
          <PrivateIndividualsNewsSection />
          <PrivateIndividualsTarifsSection className="my-24" />
          <PrivateIndividualsProductsSection className='mb-24' />
          <PrivateIndividualsAppsSection className='mb-24' />
          <PrivateIndividualsFaqSection />
        </div>
      </div>
    </FromLeftAnimationProvider>
  )
}

export default HomePage