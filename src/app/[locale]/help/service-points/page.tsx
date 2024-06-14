import ServicePointsPage from '@/components/TcellWebsite/Help/ServicePoints/ServicePointsPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - service points',
  description: 'Tcell - service points',
}

const ServicePoints = () => {
  return (
    <ServicePointsPage />
  )
}

export default ServicePoints