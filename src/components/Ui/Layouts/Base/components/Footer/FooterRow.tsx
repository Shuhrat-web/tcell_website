import React from 'react'
import { IFooterRowProps } from '../../lib/types/IBaseLayoutTypes'
import Title from '@/components/Ui/Title/Title'
import Link from 'next/link'

const FooterRow = ({footerRow}:IFooterRowProps) => {
  return (
    <div>
        <Title display='h3' size='lg'>{footerRow.title}</Title>
        <div className='flex flex-col gap-y-1.5 mt-4 md:mb-0 mb-4'>
            {footerRow.children?.map((rowParent,i) => (
                <div key={i}>
                    <ul className='text-[#374151] text-base font-normal'>
                        <li key={i}>
                            <Link href={rowParent.url}>
                                {rowParent.name}                                    
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FooterRow