import { ArrowUp } from 'lucide-react'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='rounded-2xl bg-[#f3f0e9] w-full flex justify-between'>
      <div className='flex flex-col md:flex-row w-full'>
      <div className='flex flex-col justify-between p-6 w-full'>
        <p className='font-semibold'>
          Comment
        </p>
        <p className='text-sm font-semibold'>Name</p>
      </div>
      <div className='w-[0.5px] h-56 bg-[#6a5d3e6c]  my-auto md:block hidden'></div>
      <div className='flex flex-col  justify-between w-full p-6'>
        <div className='flex flex-row gap-2 items-center'>
          <div className='rounded-full w-6 h-6'>
            <img src="https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-full w-full rounded-full'/>
          </div>
          <div className='flex flex-col'>
          <p className='font-medium'>
            Trainer name
          </p>
          <p className='text-gray-400 text-[10px] font-medium'>
            Position
          </p>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex items-start gap-2'>
            <p className='font-bold text-3xl'>80%</p>
            <div className='h-5 w-5 bg-white rounded-full flex items-center justify-center mt-2'>
              <ArrowUp width={12}/>
            </div>
          </div>
          <p className='font-medium'>jdkjd</p>
        </div>
      </div>
      </div>
      <div className='rounded-2xl h-[40vh] md:w-[35vw] md:h-[55vh] '>
        <img className='rounded-2xl w-full h-full object-cover' src='https://images.pexels.com/photos/9643437/pexels-photo-9643437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
      </div>
    </div>
  )
}

export default ReviewCard