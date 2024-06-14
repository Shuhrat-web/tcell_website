'use client'
import React from 'react'
import Image from 'next/image'
import { IImageBannerProps } from './lib/types/IBannersTypes'
import { motion } from 'framer-motion'



const ImageBanner = ({img,alt}:IImageBannerProps) => {
  return (
    <motion.div
    initial={{x:-80,opacity:0}}
    animate={{x:0,opacity:1}}
    exit={{x:-80,opacity:0}}
    transition={{duration: 0.5}}
    className='t__container'>
        <Image 
        src={img}
        alt={alt}
        height={400}
        width={400}
        unoptimized
        className='w-full rounded-xl h-[400px] object-cover'
        />
    </motion.div>
  )
}

export default ImageBanner