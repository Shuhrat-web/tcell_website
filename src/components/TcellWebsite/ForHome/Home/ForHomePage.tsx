import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import ForHomeNewsSection from './components/ForHomeNewsSection'
import ForHomeTarifsSection from './components/ForHomeTarifsSection'
import BenefitsSection from './components/BenefitsSection'
import CustomerHelpSection from './components/CustomerHelpSection'

const ForHomePage = () => {
  return (
    <div>
      <TextWithImageBanner 
        title='Домашний скоростной интернет «ТеzNet»'
        description='Безлимитный интернет по передовой технологии Gpon'
        bannerIcon='/images/03_banner.webp'
        bgColor='#27B9D3'
        // url='/'
        descriptionColor='white'
      />
      <div className='t__container mt-24'>
        <ForHomeNewsSection />
        <ForHomeTarifsSection className='my-24' />
        <BenefitsSection />
        <CustomerHelpSection className='mt-24' />
      </div>
    </div>
  )
}

export default ForHomePage