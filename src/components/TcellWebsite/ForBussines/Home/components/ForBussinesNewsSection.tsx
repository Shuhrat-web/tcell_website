'use client'
import React from 'react'
import { IForBussinesNewsSection } from '../lib/types/IForBussinessHomePageTypes'
import clsx from 'clsx'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes'
import { useLocale } from 'next-intl'

const ForBussinesNewsSection = ({className}:IForBussinesNewsSection) => {
  const locale = useLocale()

    const news:IPost[] = [
        {
            id:1,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,  ',
            date: '13 мар. 2023 г.'
        }
    ]
  return (
    <section className={clsx('',{className})}>
        <SectionTitle 
        titleText='Новости'
        routeTitle="Все новости" 
        route={`/${locale}/posts`}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
            {
                news.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    </section>
  )
}

export default ForBussinesNewsSection