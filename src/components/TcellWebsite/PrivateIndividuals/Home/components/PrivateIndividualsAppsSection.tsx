import React from 'react'
import { IProduct } from '@/lib/requests/resources/Product/lib/IProductTypes'
import ProductCard from '@/components/Ui/Cards/Product/ProductCard'
import { IPrivateIndividualsAppsSectionProps } from '../lib/types/IHomePageTypes'
import Title from '@/components/Ui/Title/Title'
import clsx from 'clsx'

const PrivateIndividualsAppsSection = ({className}:IPrivateIndividualsAppsSectionProps) => {
    const products:IProduct[] = [
      {
        id: 1,
        productIcon: '/images/mytcell_app.svg',
        backgroundColor: '#CED9F4',
        name: 'Мой Tcell',
        description: 'Ваш мобильный мир — в ваших руках! Получайте бонусы за активность и лояльность.',
        isOnAndroid: true,
        isOnIOS: true,
        iosLink: 'https://apps.apple.com/tj/app/my-tcell/id966493756',
        androidLink: 'https://play.google.com/store/apps/details?id=tj.tcell.odp',
        qrCode:'/images/qr-code(2).svg'
      },
      {
        id: 2,
        productIcon: '/images/phone_chigap.svg',
        textColor: 'white',
        backgroundColor: '#C7A8F0',
        name: 'Чи Гап',
        description: 'Звони семье и близким бесплатно при помощи мобильного приложения «Чӣ Гап»',
        isOnAndroid: true,
        isOnIOS: true,
        iosLink: 'https://apps.apple.com/tj/app/chi-gap/id1497463446',
        androidLink: 'https://play.google.com/store/apps/details?id=com.mno.tcell',
        qrCode:'/images/qr-code(1).svg'
      }
    ]
  return (
    <section className={clsx(className,'')}>
      <Title size='3xl' display='h3'>
        Наши приложения
      </Title>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-24 gap-8'>
        {
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))   
        }
        <div className='cf-integrated-support-5' />
        <div className='cf-integrated-support-6' />
      </div>
    </section>
  )
}

export default PrivateIndividualsAppsSection