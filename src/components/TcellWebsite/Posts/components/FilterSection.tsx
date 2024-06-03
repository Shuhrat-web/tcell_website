'use client'
import React from 'react'
import { IPostpageFiltersSectionProps } from '../lib/types/IPostPageTypes'
import clsx from 'clsx'
import { IDropdownOption } from '@/components/Ui/Dropdown/lib/type/DropDownTypes'
import DropDown from '@/components/Ui/Dropdown/DropDown'

const FilterSection = ({className}:IPostpageFiltersSectionProps) => {
    const showPerPageOptions:IDropdownOption[] = [
        {
            value: '10',
            label: 'Показать 10'
        },
        {
            value: '20',
            label: 'Показать 20'
        }
    ]
    const handleSelect = (event:any) => {
        console.log(event);
    };
  return (
    <section className={clsx(`flex flex-wrap gap-6`,className)}>
        <DropDown onSelect={handleSelect} options={showPerPageOptions} />
        <DropDown onSelect={handleSelect} options={showPerPageOptions} />
    </section>
  )
}

export default FilterSection