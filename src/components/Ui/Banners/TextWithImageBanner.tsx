import React from 'react'
import Image from 'next/image'
import { ITextWIthImageBannerSettings, ITextWithImageBannerProps } from './lib/types/IBannersTypes'
import Title from '../Title/Title'
import ContainButton from '../Buttons/ContainButton'


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
    className='min-h-[580px] grid bg-cover'>
      <div className='flex items-center t__container w-full h-full relative grid-cols-1 z-20'>
        <div className='max-w-[850px]'>
          <Title 
            display='h2' 
            size='3xl' 
            color={titleColor}
          >
            {title}
          </Title>
          <p className={`${settings.textColor[descriptionColor]} mt-5 mb-10 w-10/12`}>
            { description }
          </p>
          {
            url &&
            <ContainButton type='white'>
              Подробнее
            </ContainButton>
          }
        </div>
        {
          bannerIcon &&
          <div className='absolute right-60 bottom-0'>
            <Image 
              src={bannerIcon}
              height={350}
              width={450}
              alt={title}
              unoptimized
              className=' max-w-full'
            />
          </div>
        }
      </div>
    </div>
  )
}

export default TextWithImageBanner