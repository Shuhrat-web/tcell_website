import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes'
import React from 'react'
import AdvantageSection from './components/AdvantageSection'

const LoyaltyPage = () => {
    const breadCrumbs: IBreadCrumb[] = [
        {name: "Лояльность", href: "/loyalty", current: true}
    ]
  return (
    <div className='t__container'>
      <BreadCrumbs links={breadCrumbs}/>
      <AdvantageSection className='mt-16'/>
    </div>
  )
}

export default LoyaltyPage