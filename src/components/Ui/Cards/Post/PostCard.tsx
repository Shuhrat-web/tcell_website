import React from 'react'
import { IPostCardProps } from './lib/types/IPostCardTypes'
import Title from '../../Title/Title'
import { HiArrowLongRight } from "react-icons/hi2";
import TextButton from '../../Buttons/TextButton'

const PostCard = ({post}:IPostCardProps) => {
  return (
    <article className='t__card__secondary'>
        <Title size='xl' font='lg' display='h5'>
            {post.title}
        </Title>
        <p className='text-secondary text-sm mt-4 mb-8'>
            {post.description}
        </p>
        <div className='flex justify-between'>
            <TextButton extraClass='flex items-center gap-x-2' hideHover size='none'>
                Подробнее
                <HiArrowLongRight />
            </TextButton>
            {
                post.date &&
                <span className='text-sm text-secondary'>{post.date}</span>
            }
        </div>
    </article>
  )
}

export default PostCard