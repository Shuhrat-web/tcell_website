import TextWithImageBanner from '@/components/Ui/Banners/TextWithImageBanner'
import React from 'react'
import ForBussinesNewsSection from './components/ForBussinesNewsSection'
import ForBussinesGoodToKnoeSection from './components/ForBussinesGoodToKnoeSection'
import ForBussinessAdventagesSection from './components/ForBussinessAdventagesSection'

const ForBussinessHomePage = () => {
  return (
    <div>
        <TextWithImageBanner 
            title='Мы заботимся не только о вашем комфорте в интернете но и в небе'
            description='Теперь в приложении MyTcell можно покупать билеты и туры, и не беспокоится за неудобства '
            bgColor='#151515'
            url='/'
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