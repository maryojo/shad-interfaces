import React from 'react'

const Card = ({imgUrl='https://img.freepik.com/free-photo/front-view-boy-holding-ball_23-2148263188.jpg?t=st=1733602994~exp=1733606594~hmac=32adfe93e5a21208b1222f9079d68cf14da18e22f77b80a0041b7c6dd2557704&w=900', bgColor=''}) => {
  return (
    <div className={`bg-[#f3f0e9] rounded-2xl w-1/4 ${bgColor}`}>
      <div className='p-3'>
        <div>
          <div className='flex gap-1 text-sm font-medium'>
            <div className='bg-white rounded-full py-1 px-2'>5 - 12 years</div>
            <div className='bg-white rounded-full py-1 px-2'>5 - 12 years</div>
          </div>

        </div>
        <div className='mt-12'>
          <h4 className='font-semibold text-4xl'>Hello</h4>
          <p>For kids aged</p>
        </div>
      </div>
      <div className='rounded-2xl w-full h-[45vh]'>
        <img className='rounded-2xl w-full h-full object-cover' src={imgUrl}/>
      </div>
    </div>
  )
}

export default Card