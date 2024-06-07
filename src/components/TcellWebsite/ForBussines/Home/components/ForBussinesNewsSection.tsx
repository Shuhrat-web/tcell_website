'use client'
import React from 'react'
import { IForBussinesNewsSection } from '../lib/types/IForBussinessHomePageTypes'
import clsx from 'clsx'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import { useLocale } from 'next-intl'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData'

const ForBussinesNewsSection = ({className}:IForBussinesNewsSection) => {
  const locale = useLocale()
  return (
    <section className={clsx('',{className})}>
        <SectionTitle 
        titleText='Новости'
        routeTitle="Все новости" 
        route={`/${locale}/posts`}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16'>
            {
                staticPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    </section>
  )
}

export default ForBussinesNewsSection