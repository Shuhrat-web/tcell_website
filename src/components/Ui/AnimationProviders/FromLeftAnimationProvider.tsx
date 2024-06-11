'use client'
import React from 'react'
import { IFromLeftAnimationProviderProps } from './lib/types/IAnimationProvidersTypes'
import { motion } from 'framer-motion'

const FromLeftAnimationProvider = ({children,xAxis=60}:IFromLeftAnimationProviderProps) => {
  return (
    <motion.div
    initial={{x:-xAxis}}
    animate={{x:0}}
    exit={{x:-xAxis}}
    transition={{duration: 0.4}}>
        {children}
    </motion.div>
  )
}

export default FromLeftAnimationProvider