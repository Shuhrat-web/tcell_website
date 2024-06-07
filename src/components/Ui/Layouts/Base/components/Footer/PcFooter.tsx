'use client'
import React from 'react'
import { IFooterRow } from '../../lib/types/IBaseLayoutTypes'
import FooterRow from './FooterRow'
import LogoWithText from '@/components/Ui/LogoWithText'
import { LuMousePointer2 } from "react-icons/lu";
import Title from '@/components/Ui/Title/Title';
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { useLocale } from 'next-intl'



const PcFooter = () => {
  const locale = useLocale()

  const footerRows:IFooterRow[] = [
    {
      title: 'ЧАСТНЫМ ЛИЦАМ',
      children:[
        {
          title: 'Тарифы',
          children:[
            {
              url: `/${locale}/tarifs`,
              name: 'Список тарифов'
            },
          ]
        },
        {
          title: 'Новости',
          children:[
            {
              url: `/${locale}/posts`,
              name: 'Лента новостей'
            },
          ]
        },
        {
          title: 'Сервисы',
          children:[
            {
              url: `/${locale}/services`,
              name: 'Активные сервисы'
            },
          ]
        },
        {
          title: 'Команды',
          children:[
            {
              url: '/',
              name: 'Список команд'
            },
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
              url: `/${locale}/tarifs`,
              name: 'Список тарифов'
            },
          ]
        },
        {
          title: 'IP Телевидение',
          children:[
            {
              url: `/${locale}/for-home/ip-television`,
              name: 'Информация'
            }
          ]
        },
        {
          title: 'Новости',
          children:[
            {
              url: `/${locale}/posts`,
              name: 'Лента новостей'
            },
          ]
        },
      ]
    },
    {
      title: 'ДЛЯ ДОМА',
      children:[
        {
          title: 'Тарифы',
          children:[
            {
              url: `/${locale}/tarifs`,
              name: 'Список тарифов'
            },
          ]
        },
        {
          title: 'Новости',
          children:[
            {
              url: `/${locale}/posts`,
              name: 'Лента новостей'
            },
          ]
        },
      ]
    },
  ]

  const lcLinks:string[] = ['(с) 2024 ЗАО «Индиго Таджикистан»','Условия оказания услуг','Публичная оферта','Политика конфеденциальности','Лицензии']
  return (
    <footer className='bg-black py-16 mt-10'>
      <div className='t__container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            footerRows.map((row,i) => (
              <FooterRow 
                key={i}
                footerRow={row}
              />
            ))
          }
          <div className=''>
            <div className='space-y-4'>
              <div className='flex space-x-2 text-white items-center'>
                <LuMousePointer2 /> <Title color='white'>Душанбе</Title>
              </div>
              <div>
                <Title color='secondary'>Абонентам Tcell</Title>
                <Title color='white'>700</Title>
              </div>
              <div>
                <Title color='secondary'>Абонентам других операторов</Title>
                <Title color='white'>+992 44 665 07 00 </Title>
              </div>
            </div>
            <div className='my-8'>
              <Title color='white'>Приложения</Title>
              <ul className='flex flex-col gap-4 mt-4 font-medium'>
                <li className='flex items-center gap-x-2'>
                  <Image height={44} width={44} alt='myTcellApp' src={'/images/myTcell.png'} />
                  <span className='text-secondary'>Мой Tcell</span>
                </li>
                <li className='flex items-center gap-x-2'>
                  <Image height={44} width={44} alt='chiGapApp' src={'/images/chiGap.png'} />
                  <span className='text-secondary'>Чигап</span>
                </li>
              </ul>
            </div>
            <div>
              <Title color='white'>Приложения</Title>
              <ul className='mt-4 flex gap-3 text-white text-xl'>
                <li>
                  <a target="_blank" href="https://www.instagram.com/tcell.tj">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/tcellpublic" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center py-4 text-sm text-secondary my-12 border-y border-secondary'>
          <p>
            Используя наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с <span className='text-primary'>Политикой конфиденциальности</span>
          </p>
        </div>
        <ul className='flex flex-wrap gap-4 text-secondary justify-between text-sm'>
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