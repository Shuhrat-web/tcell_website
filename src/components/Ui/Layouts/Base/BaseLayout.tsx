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
        }
      ]
    },
    {
      id: 2,
      name: 'Бизнесу',
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
        }
      ]
    },
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