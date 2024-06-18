'use client'

import React from 'react'
import { IForBussinesGoodToKnoeSection } from '../lib/types/IForBussinessHomePageTypes'
import { useLocale } from 'next-intl'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import clsx from 'clsx'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';

const ForBussinesGoodToKnowSection = ({className}:IForBussinesGoodToKnoeSection) => {
    const locale = useLocale()
  return (
    <section className={clsx(className,'')}>
        <SectionTitle 
        titleText='Полезно знать' 
        />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16'>
            {
                staticPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    </section>
  )
}

export default ForBussinesGoodToKnowSection