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
        productIcon: '/images/tcell_card.png',
        backgroundColor: '#CED9F4',
        name: 'Мой Tcell',
        description: 'Скачивайте приложение ЧиГап и общайтесь с близкими в России и Таджикистане',
        isOnAndroid: true,
        isOnIOS: true,
        iosLink: 'https://apps.apple.com/tj/app/my-tcell/id966493756',
        androidLink: 'https://play.google.com/store/apps/details?id=tj.tcell.odp'
      },
      {
        id: 2,
        productIcon: '/images/tcell_card.png',
        textColor: 'white',
        backgroundColor: '#C7A8F0',
        name: 'Чи Гап',
        description: 'Скачивайте приложение ЧиГап и общайтесь с близкими в России и Таджикистане',
        isOnAndroid: true,
        isOnIOS: true,
        iosLink: 'https://apps.apple.com/tj/app/chi-gap/id1497463446',
        androidLink: 'https://play.google.com/store/apps/details?id=com.mno.tcell'
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
      </div>
    </section>
  )
}

export default PrivateIndividualsAppsSection