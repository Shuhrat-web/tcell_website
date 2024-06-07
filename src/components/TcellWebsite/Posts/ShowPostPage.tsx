'use client'
import React from 'react'
import Image from 'next/image'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import Title from '@/components/Ui/Title/Title';
import PostCard from '@/components/Ui/Cards/Post/PostCard';
// import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';


const ShowPostsPage = ({id}:{id:number}) => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Новости', href: '/news', current: false },
    { name: 'Уважаемые абоненты!', href: '#', current: true }
  ];
  const post = staticPosts.find(el => el.id == id)

  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages} />
      {post &&
      <div className='grid grid-cols-12 mt-8'>
        <article className='col-span-12 lg:col-span-7 xl:col-span-8 px-8 xl:px-28'>
          <Title display='h2' size='3xl'>
            {post.title}
          </Title>
          {
            post?.img &&
            <Image 
              src={post?.img}
              height={588}
              width={588}
              alt={'tecnicWokrs'}
              unoptimized
              className='max-w-full rounded-xl my-8'
            />
          }
          <div dangerouslySetInnerHTML={{__html: post.content}} className=' text-secondary-50'>
          </div>
        </article>
        <div className='col-span-12 lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0'>
          <div className='border-b-2 border-secondary-50 pb-2'>
            <Title display='h4' size='xl'>
            Читайте также
            </Title>
          </div>
          <div className='flex flex-col gap-6 mt-8'>
            {
              staticPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            }
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default ShowPostsPage