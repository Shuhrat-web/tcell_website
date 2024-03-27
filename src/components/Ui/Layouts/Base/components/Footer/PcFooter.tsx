import React from 'react'
import { IFooterRow } from '../../lib/types/IBaseLayoutTypes'
import FooterRow from './FooterRow'
import LogoWithText from '@/components/Ui/LogoWithText'

const PcFooter = () => {
  const footerRows:IFooterRow[] = [
    {
      title: 'ЧАСТНЫМ ЛИЦАМ',
      children:[
        {
          title: 'Тарифы',
          children:[
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            }
          ]
        },
        {
          title: 'Красивые номера',
          children:[
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            }
          ]
        }
      ]
    },
    {
      title: 'ДЛЯ ДОМА',
      children:[
        {
          title: 'Тарифы',
          children:[
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            }
          ]
        },
        {
          title: 'Красивые номера',
          children:[
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            },
            {
              url: '/',
              name: 'Линейка тарифов Салом'
            }
          ]
        }
      ]
    },
  ]

  const lcLinks:string[] = ['(с) 2024 ЗАО «Индиго Таджикистан»','Условия оказания услуг','Публичная оферта','Политика конфеденциальности','Лицензии']
  return (
    <footer className='bg-black py-16 mt-10'>
      <div className='t__container'>
        <div className='grid grid-cols-5'>
          {
            footerRows.map((row,i) => (
              <FooterRow 
                key={i}
                footerRow={row}
              />
            ))
          }
        </div>
        <div className='text-center py-4 text-sm text-secondary my-12 border-y border-secondary'>
          <p>
            Используя наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с <span className='text-primary'>Политикой конфиденциальности</span>
          </p>
        </div>
        <ul className='flex text-secondary justify-between text-sm'>
          <li>
            <LogoWithText width={72} height={24} />
          </li>
          {lcLinks.map((link,i) => (
            <li key={i}>
              {link}
            </li>
          ))}

        </ul>
      </div>
    </footer>
  )
}

export default PcFooter