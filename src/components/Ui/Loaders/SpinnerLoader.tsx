import { FaSpinner } from 'react-icons/fa'
import { ISpinnerLoaderSettings, ISpinnterLoaderProps } from './lib/types/LoaderTypes'
import { ISizes } from '@/lib/shared/types/IGlobalTypes'

const SpinnerLoader = ({size="md"}:ISpinnterLoaderProps) => {

    const settings:ISpinnerLoaderSettings = {
        size: {
            sm: 'h-5 w-5',
            md: 'h-10 w-10',
            lg: 'h-20 w-20'
        }
    }
  return (
    <FaSpinner 
    className={
      `
      animate-spin 
      text-primary
      ${settings.size[size as keyof ISizes]}
      `
    }/>
  )
}

export default SpinnerLoader