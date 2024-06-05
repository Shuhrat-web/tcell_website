import ForHomePage from '@/components/TcellWebsite/ForHome/Home/ForHomePage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - For home',
  description: 'Tcell - For home',
}

const ForHome = () => {
  return (
    <ForHomePage />
  )
}

export default ForHome