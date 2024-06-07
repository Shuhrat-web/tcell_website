import React from 'react'
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import PostCard from '@/components/Ui/Cards/Post/PostCard'
import SectionTitle from '@/components/Ui/Title/SectionTitle'
import { IBusinessNewsSecropnProps } from '../lib/types/IHomeBusinessTypes'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';

const ForHomeNewsSection = ({className}:IBusinessNewsSecropnProps) => {
  return (
    <section className={`${className}`}>
        <SectionTitle 
        titleText='Новости'
        routeTitle="Все новости" 
        route='/news'
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

export default ForHomeNewsSection