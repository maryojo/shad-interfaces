import React from 'react'
import passion from '../../../../assets/Fuel your passion.png';

const Footer = () => {
  return (
    <div className='rounded-t-2xl h-[60vh] bg-neutral-800 text-gray-200 pt-16 px-5'>
      <div className='pb-10'>
        <img src={passion}/>
      </div>
      <div>
       <div>
        <p className='uppercase font-semibold text-lg'>
          Navigate
        </p>
        <p className='font-light'>
          About
        </p>
       </div>
      </div>
    </div>
  )
}

export default Footer