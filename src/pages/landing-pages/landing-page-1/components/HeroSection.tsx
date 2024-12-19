import React from 'react'
import {  ChevronRight, Clock, Equal } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
    {/* Navbar */}
    <nav className="absolute top-4 left-8 md:left-16 right-8 md:right-16 flex text-white z-40">
      {/* Logo */}
      <div className="flex items-center mr-3">
        <a href="#" className="text-2xl font-bold">
          <svg width="25" height="25" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <g clip-path="url(#clip0_1113_4825)">
              <path d="M90.2686 60.5907C93.3243 59.3303 96.6053 58.7073 99.9103 58.76C103.239 58.7389 106.539 59.3761 109.62 60.635C112.701 61.8938 115.503 63.7495 117.865 66.0952C120.226 68.4409 122.101 71.2304 123.38 74.3032C124.66 77.376 125.319 80.6714 125.32 84C125.289 90.688 122.605 97.0903 117.858 101.802C113.111 106.513 106.688 109.149 100 109.13C96.6548 109.139 93.3408 108.484 90.2508 107.202C87.1609 105.92 84.3565 104.036 82.0007 101.661C79.6449 99.2853 77.7846 96.4655 76.5279 93.365C75.2712 90.2645 74.6432 86.9452 74.6803 83.6C74.6581 80.326 75.3088 77.0824 76.5921 74.0704C77.8753 71.0583 79.7638 68.342 82.1403 66.09C84.447 63.7225 87.213 61.8512 90.2686 60.5907Z" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2893 29.2893C48.043 10.5357 73.4783 0 100 0C126.522 0 151.957 10.5357 170.711 29.2893C189.464 48.043 200 73.4783 200 100C200 126.522 189.464 151.957 170.711 170.711C151.957 189.464 126.522 200 100 200H24C17.6348 200 11.5303 197.471 7.02944 192.971C2.52856 188.47 0 182.365 0 176V100C0 73.4783 10.5357 48.043 29.2893 29.2893ZM85.09 180.56L131.82 117.41C140.607 105.397 145 94.2133 145 83.86C145 72.1933 140.49 62.07 131.47 53.49C127.286 49.3355 122.319 46.0532 116.857 43.8336C111.394 41.614 105.546 40.5013 99.65 40.56C93.7742 40.4828 87.9445 41.6056 82.5178 43.8599C77.0911 46.1141 72.1817 49.4523 68.09 53.67C63.8714 57.7264 60.5324 62.6072 58.2804 68.0091C56.0285 73.4109 54.9119 79.2182 55 85.07C54.904 90.5147 55.8935 95.9241 57.9109 100.982C59.9284 106.04 62.9332 110.646 66.75 114.53C74.6633 122.75 84.0267 126.86 94.84 126.86C95.65 126.86 96.62 126.8 97.84 126.69C99.06 126.58 100.53 126.4 102.26 126.17L70.26 169.56L85.09 180.56Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1113_4825">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </a>
      </div>
      <div className=" w-full flex  items-center justify-between">

        {/* 1st Nav */}
        <div className="hidden md:flex space-x-6 glassmorphism rounded-full px-5 py-2 text-sm">
          <a href="#features" className="hover:text-gray-300">
            Home
          </a>
          <a href="#pricing" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#about" className="hover:text-gray-300">
            Programs
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Coaches
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 text-sm">
          <div className="cursor-pointer glassmorphism rounded-full px-5 py-2">
            <a href="#" className="flex items-center gap-3 hover:text-gray-300">
              <p>Contact Us</p>
              <ChevronRight width={20} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="cursor-pointer bg-white rounded-full px-5 py-2">
              <Clock width={20} color="gray"/>
            </div>
            <div className="cursor-pointer glassmorphism rounded-full px-5 py-2">
              <Equal width={20}/>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>


    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="https://videos.pexels.com/video-files/8693754/8693754-uhd_2732_1440_24fps.mp4"
      autoPlay
      loop
      muted
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70">
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-center px-16 text-white">
        <p className="uppercase text-white w-full md:w-fit">Your rise to </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your sport journey awaits you
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Transforming your ideas into reality with innovative solutions.
        </p>
        <div className="flex gap-2">
        <button className="h-fit bg-gray-50 text-gray-900 glassmorphism rounded-full pl-5 pr-2 py-2 flex items-center gap-3">
            <p className="font-medium">Get in Touch</p>
            <div className="rounded-full  flex items-center justify-center bg-black w-6 h-6">
              <ChevronRight width={15} className=" text-white"/>
            </div>
          </button>
        <button className="h-fit glassmorphism rounded-full px-5 py-2 flex items-center gap-3">
            <p>Contact Us</p>
            <ChevronRight width={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HeroSection