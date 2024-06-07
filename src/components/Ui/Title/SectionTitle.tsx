import React from 'react'
import Title from './Title'
import clsx from 'clsx'
import { ISectionTitleProps } from './lib/types/Title'

const SectionTitle = ({titleText,display='h3',route,routeTitle}:ISectionTitleProps) => {
  return (
    <div className={clsx({
      'flex justify-between': route && routeTitle
    })}>
      <Title size='3xl' display={display}>
        { titleText }
      </Title>
      {
        route && routeTitle &&
        <Title display='link' size='lg' font='sm' url={route} color='secondary'>
          {routeTitle}
        </Title>
      }
    </div>
  )
}

export default SectionTitle