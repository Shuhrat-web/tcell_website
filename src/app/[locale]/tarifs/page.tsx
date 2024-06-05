import TarifsPage from '@/components/TcellWebsite/Tarifs/TarifsPage'
import React from 'react'

const Tarifs = ({searchParams}:{searchParams?: { [key: string]: string | string[] | undefined }}) => {
  const categoryId = searchParams?.category_id ?  +searchParams?.category_id : 1
  return (
    <TarifsPage 
    category_id={categoryId} 
    />
  )
}

export default Tarifs