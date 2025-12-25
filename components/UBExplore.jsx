'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import bgimg from '../assets/img2.png'
import { useNavbar } from '../contexts/NavbarContext'

const UBExplore = () => {
  const { setIsDarkBackground } = useNavbar()
  
  useEffect(() => {
    setIsDarkBackground(false)
  }, [])
  
  return (
    <div className='w-full py-16 px-8 bg-white'>

      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <p className='text-sm tracking-widest text-gray-600 uppercase'>UB Residency</p>
            <h2 className='text-5xl font-bold text-gray-800 leading-tight'>
              A Home Away<br />From Home
            </h2>
            <p className='text-gray-600 leading-relaxed max-w-md'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus lacus. Aliquam porttitor sit amet diam non placerat. Curabitur convallis, risus ac aliquam imperdiet, tellus ante finibus libero...
            </p>
            <button className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 uppercase tracking-wide text-sm font-medium'>
              READ MORE
            </button>
          </div>

          <div className='relative flex justify-center'>
            <div className='relative h-130 w-full overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Image
                  src={bgimg}
                  alt="Background Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UBExplore