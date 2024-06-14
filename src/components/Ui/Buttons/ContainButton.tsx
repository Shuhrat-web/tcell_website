'use client'
import React from 'react'
import { IContainButtonProps, IContainButtonSettings } from './lib/types/IButtonsType'
import { FaSpinner } from 'react-icons/fa'
import Link from 'next/link'

const ContainButton = ({
    children,
    size="md",
    type="primary",
    onClick = () => {},
    isBtn=true,
    round="md",
    loading = false,
    disabled = false,
    extraClass,
    animate = true,
    url
}:IContainButtonProps) => {
    const settings:IContainButtonSettings = {
        size: {
            xs: 'px-1 text-sm',
            md: 'px-6 py-2',
            sm: 'px-4 py-1.5',
            lg: 'px-8 py-2',
            none: '',
            full:'w-full h-full'
        },
        type: {
            primary: 'bg-primary text-white',
            warning: 'bg-warning',
            danger: 'bg-danger text-white',
            secondary:'bg-secondary-300 text-dark-blue',
            white: 'bg-white font-medium',
            none: '',
            black: 'bg-black text-white font-medium'
        },
        round: {
            xs: 'rounded',
            md: 'rounded-md',
            sm: 'rounded',
            lg: 'rounded-lg',
            full: 'rounded-full',
            none: ''
        },
        animate: 'transition-all duration-150 scale-100 active:scale-95'
    }
  return (
    <button
        type={isBtn ? 'button' : 'submit'}
        disabled={disabled}
        onClick={() => onClick()}
        className={`
            ${settings.type[type]}
            ${settings.size[size]}
            ${settings.round[round]}
            ${animate ? settings.animate : ''}
            ${extraClass}
            relative
        `}
    >
        {
            loading ? 
            <FaSpinner className="animate-spin h-5 w-5"/>
            :
            children
        }
        {
            url &&
            <Link className='absolute left-0 top-0 w-full h-full' href={url} />
        }
    </button>
  )
}

export default ContainButton