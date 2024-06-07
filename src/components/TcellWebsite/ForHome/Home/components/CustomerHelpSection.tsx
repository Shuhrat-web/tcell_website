import React from 'react'
import { ICustomerHelpSectionProps } from '../lib/types/IHomeBusinessTypes'
import clsx from 'clsx'
import ForHomeForm from './ForHomeForm'
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';

const CustomerHelpSection = ({className}:ICustomerHelpSectionProps) => {
  return (
    <div className={clsx(className,'grid grid-cols-7 gap-6')}>
        <div className='col-span-7 xl:col-span-3'>
            <ForHomeForm />
        </div>
        <div className='col-span-7 xl:col-span-4 flex flex-col gap-6'>
            {
                staticPosts.map(el => (
                    <PostCard post={el} key={el.id} />
                ))
            }
        </div>
    </div>
  )
}

export default CustomerHelpSection