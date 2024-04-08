'use client'
import React from 'react'
import { ITextButtonProps, ITextButtonSettings } from './lib/types/IButtonsType'
import { FaSpinner } from 'react-icons/fa'

const TextButton = ({
    children,
    size="md",
    type="primary",
    onClick = () => {},
    round="md",
    isBtn=true,
    loading = false,
    disabled = false,
    extraClass,
    hideHover=false,
    animate = true
}:ITextButtonProps) => {
    const settings:ITextButtonSettings = {
        size: {
            xs: 'px-1 text-sm',
            md: 'px-4 py-1 font-medium',
            sm: 'px-6 py-1.5',
            lg: 'px-8 py-2',
            none: '',
            full:'w-full h-full'
        },
        type: {
            primary: 'text-primary hover:bg-primary/40 duration-150',
            warning: 'bg-warning',
            danger: 'bg-danger text-white',
            secondary:'bg-secondary-200 text-white hover:bg-secondary-300 duration-150',
            white: 'text-white'
        },
        round: {
            xs: 'rounded',
            md: 'rounded-md',
            sm: 'rounded',
            lg: 'rounded-lg',
            full: 'rounded-full',
            none: ''
        },
        noHoverType:{
            primary: 'text-primary',
            warning: 'text-warning',
            danger: 'text-danger',
            secondary:'bg-secondary-200',
            white: 'text-white',
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
            ${!hideHover ?  settings.type[type] : settings.noHoverType[type]}
            ${settings.size[size]}
            ${settings.round[round]}
            ${animate ? settings.animate : ''}
            ${extraClass}
        `}
    >
        {
            loading ? 
            <FaSpinner className="animate-spin h-5 w-5"/>
            :
            children
        }
    </button>
  )
}

export default TextButton