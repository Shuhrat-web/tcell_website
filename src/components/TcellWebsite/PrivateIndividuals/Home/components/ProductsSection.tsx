import React from 'react'
import { IProductsSectionProps } from '../lib/types/IHomePageTypes'
import Title from '@/components/Ui/Title/Title'
import { IService } from '@/lib/requests/resources/Service/lib/IServicesTypes'
import ServiceCard from '@/components/Ui/Cards/Service/ServiceCard'
import { IProduct } from '@/lib/requests/resources/Product/lib/IProductTypes'
import ProductCard from '@/components/Ui/Cards/Product/ProductCard'
import ColoredBannerSection from './Banners/ColoredBannerSection'

const ProductsSection = ({className}:IProductsSectionProps) => {
  const services:IService[] = [
    {
      id: 1,
      name: 'Тарифы',
      desctiption: 'Список тарифных линеек',
      img: '/images/services/service_1.svg'
    },
    {
      id: 2,
      name: 'Услуги',
      desctiption: 'Смотрите фильмы без ограничений',
      img: '/images/services/service_2.svg'
    },
    {
      id: 3,
      name: 'Лояльность',
      desctiption: 'Наслаждайтесь любимой музыкой',
      img: '/images/services/service_3.svg'
    },
  ] 
  const products:IProduct[] = [
    {
      id: 1,
      name: 'Мой Tcell',
      description: 'Скачивайте приложение ЧиГап и общайтесь с близкими в России и Таджикистане',
      isOnAndroid: true,
      isOnIOS: true
    },
    {
      id: 2,
      name: 'Чи Гап',
      description: 'Скачивайте приложение ЧиГап и общайтесь с близкими в России и Таджикистане',
      isOnAndroid: true,
      isOnIOS: true
    }
  ]
  return (
    <section className={`${className}`}>
      <Title size='3xl' display='h3'>
        Продукты Tcell
      </Title>
      <ColoredBannerSection 
        className='mt-24'
        bgColor='#9747FF'
        textColor='white'
        title='Стать абонентом Tcell'
        description='Участвуйте в онлайн аукционе и приобретите красивые номера от TCELL'
        url='/'
        img='/images/addon_banner_2.svg'
      />
      <div className='my-6 grid grid-cols-2 gap-6'>
        {
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {
          services.map(service => (
            <ServiceCard service={service} key={service.id} />
          ))
        }
      </div>
    </section>
  )
}

export default ProductsSection