import React from 'react'
import { INewsSectionProps } from '../lib/types/IHomePageTypes'
import Title from '@/components/Ui/Title/Title'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes'
import PostCard from '@/components/Ui/Cards/Post/PostCard'

const NewsSection = ({className}:INewsSectionProps) => {
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
        <div>
            <Title size='3xl' display='h3'>
                Новости
            </Title>
        </div>
        <div className='grid grid-cols-3 gap-6 mt-16'>
            {
                news.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    </section>
  )
}

export default NewsSection