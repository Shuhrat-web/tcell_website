import ShowSolutionsPage from '@/components/TcellWebsite/TSolution/ShowSolutionsPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tcell - solution',
  description: 'Tcell - solution',
}

const SolutionSinglePage = ({ params }: { params: { solutionId: string } }) => {
  return (
    <>
      <ShowSolutionsPage id={+params.solutionId} />    
    </>
  )
}

export default SolutionSinglePage