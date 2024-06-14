import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes'
import React from 'react'
import Title from '@/components/Ui/Title/Title'
import LoyaltyBenefitsSections from './components/LoyaltyBenefitsSections'
import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider'
import { statisLoyaltyBenefits } from '@/lib/requests/resources/Benefits/lib/data/StaticBenefitsData'

const LoyaltyPage = () => {
    const breadCrumbs: IBreadCrumb[] = [
      {name: "Лояльность", href: "/loyalty", current: true}
    ]
  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs links={breadCrumbs}/>
        {/* <AdvantageSection className='mt-16'/> */}
        <Title extraClass='mt-11 mb-8' size='3xl' display='h2'>
          Программа лояльности «Баракат»
        </Title>
        <div>
          <Title size='xl'>
          «День рождение абонента»
          </Title>
          <div className='text-secondary-50 max-w-[600px] mt-6'>
            В день рождения абонента, дарим безлимитные звонки по стране, безлимит на отправку SMS (только по РТ), а также 1000 МБ на день.
          </div>
        </div>
        <LoyaltyBenefitsSections benefits={statisLoyaltyBenefits} className='mt-11' />
      </div>
    </FadeOutProvider>
  )
}

export default LoyaltyPage