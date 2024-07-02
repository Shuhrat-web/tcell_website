'use client'
import React from 'react'
import { IPrivateIndividualsNewsSection } from '../lib/types/IHomePageTypes'
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import { useLocale } from 'next-intl'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';

const PrivateIndividualsNewsSection = ({className}:IPrivateIndividualsNewsSection) => {
  const locale = useLocale()
  return (
    <section className={`${className}`}>
        <SectionTitle 
        titleText='Новости'
        routeTitle="Все новости" 
        route={`/${locale}/posts`}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-11'>
          {
            staticPosts.slice(staticPosts.length-3,staticPosts.length).reverse().map(post => (
              <PostCard key={post.id} post={post} />
            ))
          }
        </div>
    </section>
  )
}

export default PrivateIndividualsNewsSection