import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import ForBussinesNewsSection from './components/ForBussinesNewsSection'
import ForBussinesGoodToKnoeSection from './components/ForBussinesGoodToKnoeSection'
import ForBussinessAdventagesSection from './components/ForBussinessAdventagesSection'

const ForBussinessHomePage = () => {
  return (
    <div>
        <TextWithImageBanner 
            title='Специальное тарифное предложение для корпоративных клиентов и бизнеса партнёров'
            // description='Теперь в приложении MyTcell можно покупать билеты и туры, и не беспокоится за неудобства '
            bgColor='#020204'
            bannerIcon='/images/02_banner.webp'
            // url='/'
        />
         <div className='t__container mt-24'>
            <ForBussinesNewsSection />
            <ForBussinessAdventagesSection  className="my-24" />
            <ForBussinesGoodToKnoeSection />
        </div>
    </div>
  )
}

export default ForBussinessHomePage