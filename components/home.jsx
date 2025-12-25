'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import image1 from "../assets/img1.png"
import { useNavbar } from '../contexts/NavbarContext'

const Homepage = () => {
  const { setIsDarkBackground } = useNavbar()
  
  useEffect(() => {
    setIsDarkBackground(true)
    return () => setIsDarkBackground(false)
  }, [])
  
  return (
    <div className='w-screen h-screen relative' data-component="homepage">
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
