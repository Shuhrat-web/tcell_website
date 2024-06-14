import ShowPostsPage from '@/components/TcellWebsite/Posts/ShowPostPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - post',
  description: 'Tcell - post',
}

const PostSonglePage = ({ params }: { params: { postId: string } }) => {
  return (
    <>
      <ShowPostsPage id={+params.postId} />    
    </>
  )
}

export default PostSonglePage