import FadeOutProvider from '@/components/Ui/AnimationProviders/FadeOutProvider';
import BreadCrumbs from '@/components/Ui/BreadCrumbs/BreadCrumbs';
import { IBreadCrumb } from '@/components/Ui/BreadCrumbs/lib/types/BreadCrumbsTypes';
import PostCard from '@/components/Ui/Cards/Post/PostCard';
import Title from '@/components/Ui/Title/Title'
import { staticPosts } from '@/lib/requests/resources/Posts/lib/data/StaticPostsData';
import { IPost } from '@/lib/requests/resources/Posts/lib/types/IPostsResourcesTypes';;
import React from 'react'
// import FilterSection from './components/FilterSection';

const PostsPage = () => {
  const breadcrumbPages: IBreadCrumb[] = [
    { name: 'Новости', href: '/news', current: true },
  ];
  

  return (
    <FadeOutProvider>
      <div className='t__container'>
        <BreadCrumbs links={breadcrumbPages} />
        <Title extraClass='mt-11 mb-8' size='3xl' display='h2'>
          Новости
        </Title>
        {/* <FilterSection className='mb-4' /> */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {
            staticPosts.filter(el => el.id !== 5 && el.id !== 6).reverse().map(post => (
              <PostCard key={post.id} post={post} />
            ))
          }
        </div>
      </div>
    </FadeOutProvider>      
  )
}

export default PostsPage