import PostsPage from '@/components/TcellWebsite/Posts/PostsPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - posts',
  description: 'Tcell - posts',
}

const News = () => {
  return (
    <PostsPage />
  )
}

export default News