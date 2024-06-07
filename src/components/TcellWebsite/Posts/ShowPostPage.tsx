'use client'
import React from 'react'
import Image from 'next/image'
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import Title from '@/components/Ui/Title/Title';
import PostCard from '@/components/Ui/Cards/Post/PostCard';
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';


const ShowPostsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Новости', href: '/news', current: false },
    { name: 'Уважаемые абоненты!', href: '#', current: true }
  ];
  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages} />
      <div className='grid grid-cols-12 mt-8'>
        <article className='col-span-12 lg:col-span-7 xl:col-span-8 px-8 xl:px-28'>
          <Title display='h2' size='3xl'>
            Читайте также
          </Title>
          <Image 
            src={`/images/postImg.png`}
            height={588}
            width={588}
            alt={'tecnicWokrs'}
            unoptimized
            className='max-w-full rounded-xl my-8'
          />
          <div className=' text-secondary-50'>
            <p className='mb-4'>
              Уведомляем вас, что в сети нашей компании проводятся технические работы, в связи с чем возможны краткосрочные перебои в работе системы. 
            </p>
            <p className='mb-4'>
              Для связи со специалистами контактного центра просим вас использовать WhatsApp по номеру +992927777777 или написать нам в Telegram: https://t.me/Tcellservicebot
            </p>
            <p>
              Также вы можете обратиться за консультацией в центры обслуживания компании Tcell. Благодарим вас за понимание.
            </p>
          </div>
        </article>
        <div className='col-span-12 lg:col-span-5 xl:col-span-4 mt-8 lg:mt-0'>
          <div className='border-b-2 border-secondary-50 pb-2'>
            <Title display='h4' size='xl'>
              Уважаемые абоненты!
            </Title>
          </div>
          <div className='flex flex-col mt-8'>
            {
              staticPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowPostsPage