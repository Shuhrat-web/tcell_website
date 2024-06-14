'use client'
import React, { useState } from 'react'
import { IServicesPointsTableListProps } from '../lib/types/IServicePointsPageTypes'
import TableContainer from '@/components/Ui/Table/TableContainer'
import TableRow from '@/components/Ui/Table/components/TableRow'
import TableColumn from '@/components/Ui/Table/components/TableColumn'
import { ITableHead } from '@/components/Ui/Table/lib/types/TableTypes'
import Title from '@/components/Ui/Title/Title'
import { HiArrowLongDown } from "react-icons/hi2";
import clsx from 'clsx'
import TextButton from '@/components/Ui/Buttons/TextButton'

const ServicesPointsListTable = ({servicePoints,className}:IServicesPointsTableListProps) => {
  const [showAllList,setShowAllList] = useState<boolean>(false)
  const tableHeaders:ITableHead[] = [
    {
      id: 1,
      label: 'АДРЕС',
      query: 'address',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 2,
      label: 'ОРИЕНТИР',
      query: 'ref_point',
      colSpan: 3,
      rowSpan: 1
    },
    {
      id: 3,
      label: 'ВРЕМЯ РАБОТЫ',
      query: 'works_from&Works_at',
      colSpan: 1,
      rowSpan: 1
    },
    {
      id: 4,
      label: 'ВЫХОДНЫЕ ДНИ',
      query: 'day_off',
      colSpan: 1,
      rowSpan: 1
    },
  ]
  const getServicePointsList = () => showAllList ? servicePoints : servicePoints.slice(0,15)
  return (
    <section className={clsx(className,' overflow-x-auto')}>
      <Title extraClass='mb-8' size='3xl' display='h2'>
       Список точек обслуживания
      </Title>
     <TableContainer
      showSorting={false}
      headers={tableHeaders}
     >
      {
        getServicePointsList().map(el => (
        <TableRow key={el.id}>
          <TableColumn colSpan={1}>
            {el.adress}
          </TableColumn>
          <TableColumn colSpan={3}>
            {el.ref_point}
          </TableColumn>
          <TableColumn colSpan={1}>
            {el.works_from} до {el.works_to}
          </TableColumn>
          <TableColumn colSpan={1}>
            {el.day_off}
          </TableColumn>
        </TableRow>
        ))
      }
      </TableContainer> 
      <div className='mt-5 flex justify-center items-center'>
        <TextButton onClick={() => setShowAllList(!showAllList)} extraClass='flex justify-center items-center gap-2'>
          {showAllList ? 'Закрыть':'Показать ещё'} <span className={`duration-150 ${showAllList ? 'rotate-180' : 'rotate-0'}`}><HiArrowLongDown /></span>
        </TextButton>
      </div>
    </section>
  )
}

export default ServicesPointsListTable