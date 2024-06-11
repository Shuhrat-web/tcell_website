'use client'
import React from 'react'
import { IFadeOutProviderProps } from './lib/types/IAnimationProvidersTypes'
import { motion } from 'framer-motion'

const FadeOutProvider = ({children,yAxis=20}:IFadeOutProviderProps) => {
  return (
    <motion.div
    initial={{opacity:0,y:yAxis}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:yAxis}}
    transition={{duration: 0.4}}
    >
        {children}
    </motion.div>
  )
}

export default FadeOutProvider