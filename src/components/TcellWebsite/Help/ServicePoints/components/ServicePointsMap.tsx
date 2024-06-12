'use client'
import React, { useMemo } from 'react'
import { IServicePointsMapSection } from '../lib/types/IServicePointsPageTypes'
import clsx from 'clsx'
import SpinnerLoader from '@/components/Ui/Loaders/SpinnerLoader';
import dynamic from 'next/dynamic';


const ServicePointsMap = ({className,servicePoints}:IServicePointsMapSection) => {
    const DynamicMap = useMemo(() => dynamic(() => {
        return import('@/components/Ui/Maps/LLetMap')
    },{
        loading: () => <SpinnerLoader />,
        ssr: false
    }),[]);
  return (
    <section className={clsx(className,'mt-5 relative z-20')}>
        <DynamicMap 
        markers={servicePoints}
        />
    </section>
  )
}

export default ServicePointsMap