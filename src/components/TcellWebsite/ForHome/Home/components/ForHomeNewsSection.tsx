import React from 'react'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes'
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import { IBusinessNewsSecropnProps } from '../lib/types/IHomeBusinessTypes'

const ForHomeNewsSection = ({className}:IBusinessNewsSecropnProps) => {
    const news:IPost[] = [
        {
            id:1,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
            date: '13 мар. 2023 г.'
        },
        {
            id:2,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
            date: '13 мар. 2023 г.'
        },
        {
            id:3,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
            date: '13 мар. 2023 г.'
        }
    ]
  return (
    <section className={`${className}`}>
        <SectionTitle 
        titleText='Новости'
        routeTitle="Все новости" 
        route='/news'
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

export default ForHomeNewsSection