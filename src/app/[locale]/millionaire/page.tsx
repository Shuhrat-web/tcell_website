import BecomeMillionerPage from '@/components/TcellWebsite/BecomeMillioner/BecomeMillionerPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Tcell - Become millioner',
    description: 'Tcell - Become millioner'
}

const BecomeMillionaire = () => {
  return (
    <BecomeMillionerPage/>
  )
}

export default BecomeMillionaire 