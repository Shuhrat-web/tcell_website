import React from 'react'
import { IFooterRowProps } from '../../lib/types/IBaseLayoutTypes'
import Title from '@/components/Ui/Title/Title'

const FooterRow = ({footerRow}:IFooterRowProps) => {
  return (
    <div>
        <Title display='h3' size='lg'>{footerRow.title}</Title>
        <div className='flex flex-col gap-y-6'>
            {footerRow.children?.map((rowParent,i) => (
                <div key={i}>
                    <Title size='lg'>{rowParent.title}</Title>
                    <ul className='text-secondary text-sm space-y-2 mt-4'>
                        {
                            rowParent.children?.map((el,i) => (
                                <li key={i}>
                                    {el.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FooterRow