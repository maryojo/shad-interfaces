import React from 'react'

interface CardProps {
  imgUrl?: string;
  bgColor?: string;
  age: string | number;
  category: string;
  programName: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imgUrl = 'https://img.freepik.com/free-photo/front-view-boy-holding-ball_23-2148263188.jpg?t=st=1733602994~exp=1733606594~hmac=32adfe93e5a21208b1222f9079d68cf14da18e22f77b80a0041b7c6dd2557704&w=900',
  bgColor = '',
  age,
  category,
  programName,
  description
}) => {
  return (
    <div className={`bg-[#f3f0e9] rounded-2xl min-w-[300px] ${bgColor} flex flex-col justify-between`}>
      <div className='p-5'>
        <div>
          <div className='flex gap-1 text-sm font-semibold text-neutral-900'>
            <div className='bg-white rounded-full py-1 px-2'>{`${age}`}</div>
            <div className='bg-white rounded-full py-1 px-2'>{category}</div>
          </div>

        </div>
        <div className='mt-5'>
          <h4 className='font-semibold text-4xl mb-3'>{programName}</h4>
          <p className='text-[#a29778] text-sm font-medium'>{description}</p>
        </div>
      </div>
      <div className='rounded-2xl w-full h-[45vh]'>
        <img className='rounded-2xl w-full h-full object-cover' src={imgUrl}/>
      </div>
    </div>
  )
}

export default Card