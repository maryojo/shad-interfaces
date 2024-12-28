import { ArrowUp } from 'lucide-react'
import React from 'react'

interface ReviewCardProps {
  comment: string;
  reviewerName: string;
  trainerName: string;
  position: string;
  imgUrl: string;
  imgClass?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  comment,
  reviewerName,
  trainerName, 
  position,
  imgUrl,
  imgClass = ''
}) => {
  return (
    <div className='rounded-2xl bg-[#f3f0e9] w-full flex justify-between'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex flex-col-reverse md:flex-col justify-between p-8 w-full'>
          <p className='font-semibold w-full md:w-3/4 mb-5'>
            {comment}
          </p>
          <p className='text-sm font-semibold text-neutral-400'>{reviewerName}</p>
        </div>
        <div className='w-[0.5px] h-56 bg-[#6a5d3e6c] my-auto md:block hidden mr-10'></div>
        <div className='flex flex-col gap-20 justify-center w-full p-6'>
          <div className='flex flex-row gap-2 items-center'>
            <div className='rounded-full w-6 h-6'>
              <img src="https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=600" className='object-cover h-full w-full rounded-full' alt={trainerName}/>
            </div>
            <div className='flex flex-col'>
              <p className='font-medium'>
                {trainerName}
              </p>
              <p className='text-neutral-400 text-[11px] font-medium'>
                {position}
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
            <p className='font-medium text-[10px] text-neutral-500'>Get the very best</p>
          </div>
        </div>
      </div>
      <div className='rounded-2xl h-[40vh] md:w-[35vw] md:h-[55vh] lg:block hidden'>
        <img className={`rounded-2xl w-full h-full object-cover object-top ${imgClass}`} src={imgUrl} alt={reviewerName}/>
      </div>
    </div>
  )
}

export default ReviewCard