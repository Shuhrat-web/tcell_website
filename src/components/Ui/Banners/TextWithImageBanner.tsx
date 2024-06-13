'use client'
import React from 'react'
import Image from 'next/image'
import { ITextWIthImageBannerSettings, ITextWithImageBannerProps } from './lib/types/IBannersTypes'
import Title from '../Title/Title'
import ContainButton from '../Buttons/ContainButton'
import { motion } from 'framer-motion'


const TextWithImageBanner = ({
  title,
  description,
  url,
  bgImage,
  bannerIcon,
  bgColor= 'transparent',
  titleColor= 'white',
  descriptionColor= 'secondary'
}:ITextWithImageBannerProps) => {
  const settings:ITextWIthImageBannerSettings = {
    textColor: {
      primary: 'text-primary',
      warning: 'text-warning',
      danger: 'text-danger',
      secondary:'text-secondary-200',
      white: 'text-white'
    }
  }
  return (
    <div 
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundColor: bgColor
    }}
    className={`${bannerIcon ? 'min-h-[600px] md:min-h-[800px] lg:min-h-[580px]' : 'min-h-[580px]'} grid bg-cover`}>
      <div className={`flex ${bannerIcon ? 'items-start lg:items-center pt-32 lg:mt-0' : 'items-center'} t__container w-full h-full relative grid-cols-1`}>
        <motion.div
        initial={{x:-80,opacity:0}}
        animate={{x:0,opacity:1}}
        exit={{x:-80,opacity:0}}
        transition={{duration: 0.5}}
        className='max-w-[650px] lg:-mt-20'>
          <Title 
            display='h2' 
            size='3xl' 
            color={titleColor}
            extraClass='leading-8 md:leading-10'
          >
            {title}
          </Title>
          {
            description &&
            <p className={`${settings.textColor[descriptionColor]} mt-5 mb-10 w-10/12 z-20`}>
              { description }
            </p>
          }
          {
            url &&
            <ContainButton extraClass='z-20' type='white'>
              Подробнее
            </ContainButton>
          }
        </motion.div>
        {
          bannerIcon &&
          <div className='absolute right-2/4 translate-x-2/4 lg:ranslate-x-0 lg:right-56 xl:right-80 bottom-0 z-10'>
            <Image 
              src={bannerIcon}
              height={450}
              width={450}
              alt={title}
              unoptimized
              className='max-w-full h-[300px] w-[300px] md:h-[450px] md:w-[450px] object-cover'
            />
          </div>
        }
      </div>
    </div>
  )
}

export default TextWithImageBanner