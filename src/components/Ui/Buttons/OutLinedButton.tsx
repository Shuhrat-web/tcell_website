import React from 'react'
import { IOutlinedButtonProps, IOutlinedButtonSettings } from './lib/types/IButtonsType'
import { FaSpinner } from 'react-icons/fa'
import { IUiTypes } from '@/lib/shared/types/IGlobalTypes'

const OutLinedButton = ({
    children,
    size="md",
    type="primary",
    onClick = () => {},
    round="md",
    isBtn=true,
    loading = false,
    disabled = false,
    extraClass,
    animate = true
}:IOutlinedButtonProps) => {
    const settings:IOutlinedButtonSettings = {
        size: {
            xs: 'px-1 text-sm',
            md: 'px-4 py-1 font-medium',
            sm: 'px-6 py-1.5',
            lg: 'px-8 py-2',
            none: '',
            full:'w-full h-full'
        },
        type: {
            primary: 'bg-primary text-white',
            warning: 'bg-warning',
            danger: 'bg-danger text-white',
            secondary:'bg-secondary-200 text-white hover:bg-secondary-300 duration-150',
            white: 'bg-white'
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

export default OutLinedButton