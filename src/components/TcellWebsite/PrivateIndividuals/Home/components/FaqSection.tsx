import React from 'react'
import { IFaqSectionProps } from '../lib/types/IHomePageTypes'
import clsx from 'clsx'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes'
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import FaqChat from './FaqChat'

const FaqSection = ({className}:IFaqSectionProps) => {
    const news:IPost[] = [
        {
            id:1,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
            // date: '13 мар. 2023 г.'
        },
        {
            id:2,
            title: 'Уважаемые абоненты!',
            description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
        },
    ]
  return (
    <div className={clsx(className,'grid grid-cols-7 gap-6')}>
        <div className='col-span-3'>
            <FaqChat />
        </div>
        <div className='col-span-4 flex flex-col gap-6'>
            {
                news.map(el => (
                    <PostCard post={el} key={el.id} />
                ))
            }
        </div>
    </div>
  )
}

export default FaqSection