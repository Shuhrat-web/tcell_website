import ShowPostsPage from '@/components/TcellWebsite/Posts/ShowPostPage'
import React from 'react'

const PostSonglePage = ({ params }: { params: { postId: string } }) => {
  return (
    <>
      <ShowPostsPage id={+params.postId} />    
    </>
  )
}

export default PostSonglePage