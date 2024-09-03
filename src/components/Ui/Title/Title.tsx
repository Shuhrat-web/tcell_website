import { ITitleSetting,ITitleProps } from './lib/types/Title'
import Link from 'next/link'
import { RiArrowRightSLine } from "react-icons/ri";
import { ISizes, IUiTypes } from '@/lib/shared/types/IGlobalTypes';

const Title = ({children,size = 'md',font='md', color='none', centered = false,url="#", display,extraClass}:ITitleProps) => {
    const settings:ITitleSetting = {
        sizes: {
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-[18px]',
            xl: 'text-[20px] md:text-[20px]',
            '2xl': 'text-lg xl:text-3xl',
            '3xl': 'text-xl xl:text-[38px]',
            '4xl': 'text-4xl'
        },
        font:  {
            sm: 'font-normal',
            md: 'font-semibold',
            lg: 'font-bold',
            'xl': 'font-extrabold',

        },
        color:{
            primary: 'text-primary',
            warning: 'text-warning',
            danger: 'text-danger',
            secondary:'text-secondary',
            white: 'text-white',
            none: 'text-dark-blue'
        },
    }
  
    if(display == 'h1') return <h1 className={` ${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</h1>
    if(display == 'h2') return <h2 className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</h2>
    if(display == 'h3') return <h3 className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</h3>
    if(display == 'h4') return <h4 className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</h4>
    if(display == 'h5') return <h5 className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</h5>
    if(display == 'h6') return <h6 className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</h6>
    if(display == 'link') return <Link href={url} className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'} flex flex-wrap items-center`}>{children} <span className='ml-2'><RiArrowRightSLine /></span></Link>
    return <div className={`${settings.sizes[size as keyof ISizes]} ${settings.font[font as keyof ISizes]} ${settings.color[color as keyof IUiTypes]} ${extraClass} ${centered && 'text-center'}`}>{children}</div>
}

export default Title