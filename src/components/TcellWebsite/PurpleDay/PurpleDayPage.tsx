import React from 'react'
import PurpleDayHeadSection from './components/PurpleDayHeadSection'
import PurpleDayAdvantageSection from './components/PurpleDayAdvantageSection'

const PurpleDayPage = () => {
  return (
    <div className='t__container md:px-40 lg:px-56'>
        <PurpleDayHeadSection/>
        <PurpleDayAdvantageSection/>
    </div>
  )
}

export default PurpleDayPage