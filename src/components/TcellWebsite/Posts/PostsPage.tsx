import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import PostCard from '@/components/Ui/Cards/Post/PostCard';
import Title from '@/components/Ui/Title/Title'
import { IPost } from '@/lib/requests/resources/Posts/lib/IPostsResourcesTypes';
import React from 'react'
import FilterSection from './components/FilterSection';

const PostsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Новости', href: '/news', current: true },
  ];

  const news:IPost[] = [
    {
      id:1,
      title: 'Уважаемые абоненты!',
      description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
      date: '13 мар. 2023 г.'
    },
    {
      id:2,
      title: 'Уважаемые абоненты!',
      description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
      date: '13 мар. 2023 г.'
    },
    {
      id:3,
      title: 'Уважаемые абоненты!',
      description: 'В связи с отключением света по всему городу мы приносим свои извинения,но нам всем похуй поэтому идите ',
      date: '13 мар. 2023 г.'
    }
  ]
  return (
    <div className='t__container'>
      <BreadCrumbs links={breadcrumbPages} />
      <Title extraClass='mt-11 mb-8' size='3xl' display='h2'>
        Новости
      </Title>
      <FilterSection className='mb-4' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {
          news.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  )
}

export default PostsPage