'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const suiteData = {
  'Junior Suite': {
    title: 'executive ',
    description: 'Perfect for couples seeking comfort and elegance with modern amenities and city views.',
    size: '45m2',
    beds: '1 bed',
    baths: '1 bath',
    guests: '2 guests',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  'Deluxe Double Room': {
    title: 'Deluxe Double Room',
    description: 'Spacious room with premium furnishings, perfect for business travelers and extended stays.',
    size: '60m2',
    beds: '2 beds',
    baths: '1 bath',
    guests: '4 guests',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
}

const Explore = () => {
  const [activeTab, setActiveTab] = useState('Junior Suite')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const currentSuite = suiteData[activeTab]

  const handleTabChange = (suite) => {
    if (suite === activeTab) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTab(suite)
      setIsTransitioning(false)
    }, 150)
  }

  return (
    <div className='w-full py-16 px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <p className='text-sm tracking-widest text-gray-600 mb-4'>EXPLORE</p>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>A Place That Fits You</h2>
          <p className='text-gray-600 max-w-md mx-auto'>Welcome to UB Residency, where luxury meets comfort in the heart of the city. Our premium accommodations offer world-class amenities and exceptional service.</p>
        </div>
        
        <div className='relative'>
          <div className='flex rounded-lg mb-8 overflow-hidden'>
            {Object.keys(suiteData).map((suite) => (
              <button 
                key={suite}
                onClick={() => handleTabChange(suite)}
                className={`flex-1 py-3 px-6 transition-all duration-300 transform ${
                  activeTab === suite 
                    ? 'text-blue-500 font-medium scale-105' 
                    : 'text-gray-500 hover:bg-gray-100 hover:scale-102'
                }`}
              >
                {suite}
              </button>
            ))}
          </div>
          <div 
            className='absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out'
            style={{
              width: '50%',
              left: activeTab === 'Junior Suite' ? '0%' : '50%'
            }}
          />
        </div>
        
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className={`transition-all duration-500 ease-in-out transform ${
            isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          }`}>
            <h3 className='text-2xl font-bold text-gray-800 mb-4 transition-all duration-300'>
              {currentSuite.title}
            </h3>
            <p className='text-gray-600 mb-6 transition-all duration-300 delay-75'>
              {currentSuite.description}
            </p>
            
            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div className='flex items-center gap-2 transition-all duration-300 delay-100'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4' />
                </svg>
                <span className='text-gray-600'>{currentSuite.size}</span>
              </div>
              <div className='flex items-center gap-2 transition-all duration-300 delay-125'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
                </svg>
                <span className='text-gray-600'>{currentSuite.beds}</span>
              </div>
              <div className='flex items-center gap-2 transition-all duration-300 delay-150'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' />
                </svg>
                <span className='text-gray-600'>{currentSuite.baths}</span>
              </div>
              <div className='flex items-center gap-2 transition-all duration-300 delay-175'>
                <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
                <span className='text-gray-600'>{currentSuite.guests}</span>
              </div>
            </div>
            
            <button className='border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 delay-200'>
              ROOM DETAILS →
            </button>
          </div>
          
          <div className='relative'>
            <div className={`w-full h-80 bg-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <Image 
                src={currentSuite.image}
                alt={`${currentSuite.title} Hotel Room`}
                fill
                className='object-cover transition-all duration-700 ease-in-out'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore