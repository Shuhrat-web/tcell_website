import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes'
import Title from '@/components/Ui/Title/Title'
import React from 'react'
import IpTarifSection from './components/IpTarifSection'

const IpTelevision = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    {name: "IP Телевидение", href: '/ip-television', current: true}
  ]
  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages}/>
      <Title extraClass='my-8' size='3xl' display='h2'>IP Телевидение</Title>
      <IpTarifSection/>
    </div>
  )
}

export default IpTelevision