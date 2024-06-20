'use client'
import { HiChatAlt, HiX } from "react-icons/hi";
import React, { useState } from 'react'
import { IFabLink } from "../lib/types/IBaseLayoutTypes";
import Image from "next/image";
import clsx from "clsx";

const FabButton = () => {
    const [showLinks,setShowLinks] = useState<boolean>(false)

    const links:IFabLink[] = [
        {
            id: 1,
            name: 'Telegram',
            icon: '/images/icons/Telegram.svg',
            link: 'https://t.me/tcellpublic'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: '/images/icons/Instagram.svg',
            link: 'https://www.instagram.com/tcell.tj'
        },
        {
            id: 3,
            name: 'Whatsapp',
            icon: '/images/icons/Whatsapp.svg',
            link: 'https://wa.me/992927777777'
        },
        {
            id: 4,
            name: 'TelegramBot',
            icon: '/images/icons/robot.svg',
            link: 'https://t.me/Tcellservicebot'
        },
    ]
    
  return (
    <>
        <div className='fixed right-5 bottom-5'>
            <div className="relative">
                <ul className={clsx('absolute bottom-20 duration-150 flex flex-col gap-6',{
                    'opacity-100 visible': showLinks,
                    'opacity-0 invisible': !showLinks
                })}>
                    {
                        links.map(link => (
                        <li className="h-16 w-16 text-dark-blue rounded-full text-xl bg-secondary-500 border border-secondary-200 flex justify-center items-center relative" key={link.id}>
                            <Image
                                height={40}
                                width={40}
                                className=""
                                src={link.icon}
                                alt={link.name}
                            />
                            <a className="absolute left-0 top-0 w-full h-full" href={link.link} target="_blank" rel="noopener noreferrer" />
                        </li>)
                        )
                    }
                </ul>
                <button onClick={() => setShowLinks(!showLinks)} className="h-16 w-16 rounded-full text-dark-blue text-xl bg-secondary-500 border border-secondary-200 flex justify-center items-center">
                    {
                        showLinks ? 
                        <HiX />
                        :
                        <HiChatAlt />
                    }
                </button>
            </div>
        </div>
    </>
  )
}

export default FabButton