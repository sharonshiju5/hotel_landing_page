import React from 'react'
import Image from 'next/image'
import image1 from "../assets/img1.png"
const Homepage = () => {
  return (
    <div className='w-screen h-screen relative'>
      <Image className='w-screen h-screen object-cover' src={image1} alt="Hotel Image" width={1920} height={1080} />
      <div className='absolute inset-0 bg-[#000000b1] bg-opacity-50 flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to</h1>
          <h2 className='text-3xl md:text-5xl font-bold'>UB Residency</h2>
        </div>
      </div>
    </div>
  )
}

export default Homepage
