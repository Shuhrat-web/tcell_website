import ServicesPage from '@/components/TcellWebsite/Services/ServicesPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - services',
  description: 'Tcell - services',
}


const Services = () => {
  return (
    <ServicesPage/>
  )
}

export default Services