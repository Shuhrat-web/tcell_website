import BecomeMillionerPage from '@/components/TcellWebsite/BecomeMillioner/BecomeMillionerPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Tcell - Millionaire',
    description: 'Tcell - Millionaire'
}

const BecomeMillionaire = () => {
  return (
    <BecomeMillionerPage/>
  )
}

export default BecomeMillionaire 