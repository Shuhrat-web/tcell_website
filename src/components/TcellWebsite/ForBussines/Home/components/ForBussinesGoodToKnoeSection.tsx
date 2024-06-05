'use client'

import React from 'react'
import { IForBussinesGoodToKnoeSection } from '../lib/types/IForBussinessHomePageTypes'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes'
import { useLocale } from 'next-intl'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import clsx from 'clsx'

const ForBussinesGoodToKnoeSection = ({className}:IForBussinesGoodToKnoeSection) => {
    const locale = useLocale()

    const news:IPost[] = [
        {
            id:1,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,  ',
            date: '13 мар. 2023 г.'
        },
        {
            id:2,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,  ',
            date: '13 мар. 2023 г.'
        }
    ]
  return (
    <section className={clsx(className,'')}>
        <SectionTitle 
        titleText='Полезно знать' 
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16'>
            {
                news.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    </section>
  )
}

export default ForBussinesGoodToKnoeSection