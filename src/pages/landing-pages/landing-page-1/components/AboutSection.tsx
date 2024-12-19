import React from 'react'
import Card from './Card'
import { ArrowLeft } from 'lucide-react'

const AboutSection = () => {
  return (
    <div className='pl-8 md:pl-16 py-12 md:py-20'>
      <div className='flex md:items-end md:flex-row flex-col'>
      <div>
        <p className='uppercase text-neutral-500'>Elevate your game</p>
        <h3 className='text-4xl md:text-6xl font-bold mb-10 w-full md:w-2/4'>
          Comprehensive Sport Training for Everyone
        </h3>
      </div>
      <div className='flex gap-5 mb-10'>
        <div className='bg-neutral-900 w-7 h-7 rounded-full cursor-pointer'>
          <ArrowLeft />
        </div>
        <div className='bg-neutral-900 w-7 h-7 rounded-full cursor-pointer'>
          <ArrowLeft />
        </div>
      </div>
      </div>
      <div className='flex gap-4'>
        <Card bgColor='bg-[#c3ff3d]'/>
        <Card imgUrl='https://img.freepik.com/free-photo/medium-shot-woman-holding-ball_23-2149137068.jpg?t=st=1733603503~exp=1733607103~hmac=4b6b18873d76c0011032fb929c08415a22fd42afd660824952b83c6e1c484d8d&w=360'/>
        <Card/>

      </div>
    </div>
  )
}

export default AboutSection