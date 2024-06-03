import React from 'react'
import PcNavigation from './components/Navigation/PcNavigation'
import PcFooter from './components/Footer/PcFooter'
import { INavigationLinkTab } from './lib/types/IBaseLayoutTypes'

const BaseLayout = ({
  children
}:{
    children: React.ReactNode
}) => {
  const links:INavigationLinkTab[] = [
    {
      id: 1,
      name: 'Частным лицам',
      route:'/',
      children:[
        {
          route: '/',
          name: 'Главная'
        },
        {
          route: '/posts',
          name: 'Новости'
        },
        // {
        //   route: '/private-individuals/loyalty',
        //   name: 'Лояльность'
        // },
        {
          route: '/services',
          name: 'Сервисы'
        },
        {
          route: '/private-individuals/ussd-commands',
          name: 'Комманды'
        },
        {
          route: '/tarifs',
          name: 'Тарифы',
          children: [
            {
              route: '/tarifs/1',
              name: 'Tarif1'
            },  
          ]
        },
        {
          route: '/faq',
          name: 'Помощь'
        },
      ]
    },
    {
      id: 2,
      name: 'Бизнесу',
      route:'/for-bussines',
      children:[
        {
          route: '/',
          name: 'Главная'
        },
        {
          route: '/tarifs',
          name: 'Тарифы',
          children: [
            {
              route: '/tarifs/1',
              name: 'Tarif1'
            },  
          ]
        },
        {
          route: '/posts',
          name: 'Новости'
        },
      ]
    },
    {
      id: 3,
      name: 'Для дома',
      route:'/for-home',
      children:[
        {
          route: '/for-home',
          name: 'Главная'
        },
        {
          route: '/for-home/ip-television',
          name: 'IP Телевидение'
        },
      ]
    },
    // {
    //   id: 4,
    //   name: 'T-Solution',
    //   route:'/t-solution',
    //   children:[
    //     {
    //       route: '/t-solution',
    //       name: 'Главная'
    //     },
    //     {
    //       route: '/t-solution/chat-bot',
    //       name: 'Чат бот'
    //     }
    //   ]
    // },
  ] 

  return (
    <>
      <PcNavigation links={links} />
        <main>
          { children }
        </main>
      <PcFooter />
    </>
  )
}

export default BaseLayout