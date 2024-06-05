import React from 'react'
import PcFooter from './components/Footer/PcFooter'
import { INavigationLinkTab } from './lib/types/IBaseLayoutTypes'
import BaseNavigation from './components/Navigation/BaseNavigation'

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
          tabId: 1,
          route: '/',
          name: 'Главная'
        },
        {
          tabId: 1,
          route: '/posts',
          name: 'Новости'
        },
        // {
        //   route: '/private-individuals/loyalty',
        //   name: 'Лояльность'
        // },
        // {
        //   tabId: 1,
        //   route: '/services',
        //   name: 'Сервисы'
        // },
        {
          tabId: 1,
          route: '/private-individuals/ussd-commands',
          name: 'USSD-Команды'
        },
        {
          tabId: 1,
          route: '/tarifs?category_id=1',
          name: 'Тарифы'
        },
        // {
        //   route: '/faq',
        //   name: 'Помощь'
        // },
      ]
    },
    {
      id: 2,
      name: 'Бизнесу',
      route:'/for-bussines',
      children:[
        {
          tabId: 2,
          route: '/for-bussines',
          name: 'Главная'
        },
        {
          tabId: 2,
          route: '/tarifs?category_id=3',
          name: 'Тарифы',
          children: [
            {
              route: '/tarifs/1',
              name: 'Tarif1'
            },  
          ]
        },
        {
          tabId: 2,
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
          tabId: 3,
          route: '/for-home',
          name: 'Главная'
        },
        // {
        //   route: '/for-home/ip-television',
        //   name: 'IP Телевидение'
        // },
        {
          tabId: 3,
          route: '/tarifs?category_id=2',
          name: 'Тарифы',
          children: [
            {
              route: '/tarifs/1',
              name: 'Tarif1'
            },  
          ]
        },
        {
          tabId: 3,
          route: '/posts',
          name: 'Новости'
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
      <BaseNavigation links={links} />
        <main>
          { children }
        </main>
      <PcFooter />
    </>
  )
}

export default BaseLayout