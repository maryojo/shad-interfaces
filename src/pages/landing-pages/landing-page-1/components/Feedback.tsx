import React from 'react'
import ReviewCard from './ReviewCard'

const Feedback = () => {
  return (
    <div className='px-8 md:px-16 py-12 md:py-20 '>
        <h3 className='text-4xl md:text-6xl font-bold mb-10 md:w-3/4 text-center mx-auto'>
          Hear from Our Thriving Sports Community
        </h3>
        <div className='flex flex-col gap-10'>
          <ReviewCard/>
          <ReviewCard/>
        </div>
    </div>
  )
}

export default Feedback