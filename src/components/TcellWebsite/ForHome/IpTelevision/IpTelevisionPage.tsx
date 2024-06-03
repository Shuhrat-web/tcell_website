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
      <div className='mt-8 mb-16'>
        <Title extraClass='my-8' size='3xl' display='h2'>IP Телевидение</Title>
        <div className=' space-y-6 text-secondary-50 text-lg'>
          <p>
          IPTV – это цифровое телевидение с сотнями телеканалов, фильмов и специальными возможностями (пауза, перемотка, просмотр прошедших передач).
          </p>
          <p>
            Для подключения IPTV вам необходимо быть абонентом TezNet и подключить ТВ-приставку.
          </p>
        </div>
      </div>
      <IpTarifSection/>
    </div>
  )
}

export default IpTelevision