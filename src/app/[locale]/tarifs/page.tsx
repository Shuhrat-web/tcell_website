import TarifsPage from '@/components/TcellWebsite/Tarifs/TarifsPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - Tarifs',
  description: 'Tcell - Tarifs',
}

const Tarifs = ({searchParams}:{searchParams?: { [key: string]: string | string[] | undefined }}) => {
  const categoryId = searchParams?.category_id ?  +searchParams?.category_id : 1
  return (
    <TarifsPage 
    category_id={categoryId} 
    />
  )
}

export default Tarifs