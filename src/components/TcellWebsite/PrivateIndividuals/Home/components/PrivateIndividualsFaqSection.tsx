import React from 'react'
import { IPrivateIndividualsFaqSectionProps } from '../lib/types/IHomePageTypes'
import clsx from 'clsx'
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import FaqChat from './FaqChat'
import Title from '@/components/Ui/Title/Title'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';

const PrivateIndividualsFaqSection = ({className}:IPrivateIndividualsFaqSectionProps) => {
  return (
    <section className={clsx(className,'')}>
        <Title size='3xl' display='h3'>
            Полезно знать
        </Title>
        <div className='grid grid-cols-7 gap-6 mt-16'>
            <div className='col-span-7 lg:col-span-3'>
                <FaqChat />
            </div>
            <div className='col-span-7 lg:col-span-4 flex flex-col gap-6'>
                {
                    staticPosts.map(el => (
                        <PostCard post={el} key={el.id} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default PrivateIndividualsFaqSection