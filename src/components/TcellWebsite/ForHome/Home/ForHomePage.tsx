import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import ForHomeNewsSection from './components/ForHomeNewsSection'
import TarifsSection from './components/TarifsSection'
import BenefitsSection from './components/BenefitsSection'
import CustomerHelpSection from './components/CustomerHelpSection'

const ForHomePage = () => {
  return (
    <div>
      <TextWithImageBanner 
        title='Мы заботимся не только о вашем комфорте в интернете но и в небе'
        description='Теперь в приложении MyTcell можно покупать билеты и туры, и не беспокоится за неудобства '
        bannerIcon='/images/bannerIcon.svg'
        bgColor='#5FD2E7'
        url='/'
        descriptionColor='white'
      />
      <div className='t__container mt-24'>
        <ForHomeNewsSection />
        <TarifsSection className='my-24' />
        <BenefitsSection />
        <CustomerHelpSection className='mt-24' />
      </div>
    </div>
  )
}

export default ForHomePage