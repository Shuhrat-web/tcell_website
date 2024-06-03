import React from 'react'
import { ICustomerHelpSectionProps } from '../lib/types/IHomeBusinessTypes'
import clsx from 'clsx'
import ForHomeForm from './ForHomeForm'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes'
import PostCard from '@/components/Ui/Cards/Post/PostCard'

const CustomerHelpSection = ({className}:ICustomerHelpSectionProps) => {
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
            // date: '13 мар. 2023 г.'
        },
    ]
  return (
    <div className={clsx(className,'grid grid-cols-7 gap-6')}>
        <div className='col-span-7 xl:col-span-3'>
            <ForHomeForm />
        </div>
        <div className='col-span-7 xl:col-span-4 flex flex-col gap-6'>
            {
                news.map(el => (
                    <PostCard post={el} key={el.id} />
                ))
            }
        </div>
    </div>
  )
}

export default CustomerHelpSection