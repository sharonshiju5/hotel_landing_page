'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import executive from '../../assets/executive/exicutivebed.jpeg'
import delux from '../../assets/delux/delux.png'

const roomData = {
  'executive': {
    title: 'Executive Suite',
    location: 'DB Residency, Premium District',
    rating: '4.8',
    description: 'Perfect for couples seeking comfort and elegance with modern amenities and city views. This luxurious suite features premium furnishings, a spacious living area, and breathtaking panoramic views of the city skyline.',
    size: '45m²',
    beds: '1 King Bed',
    baths: '1 Luxury Bath',
    guests: '2 Guests',
    images: [executive, executive, executive, executive],
    features: [
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' /></svg>, 
        title: 'Entire suite', 
        desc: 'You\'ll have the guest suite to yourself' 
      },
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' /></svg>, 
        title: 'Enhanced Clean', 
        desc: 'This host committed to Bindle\'s 5-step enhanced cleaning process' 
      },
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' /></svg>, 
        title: 'Self check-in', 
        desc: 'Check yourself in with the lockbox' 
      },
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' /></svg>, 
        title: 'Cancellation policy', 
        desc: 'Cancel before 3:00 PM on Feb 5 and get a 50% refund, minus the first night' 
      }
    ]
  },
  'Deluxe Room': {
    title: 'Deluxe Room',
    location: 'DB Residency, Business District',
    rating: '4.9',
    description: 'Spacious room with premium furnishings, perfect for business travelers and extended stays. Features elegant decor, modern amenities, and comfortable seating areas for both work and relaxation.',
    size: '60m²',
    beds: '2 Queen Beds',
    baths: '1 Premium Bath',
    guests: '4 Guests',
    images: [delux, delux, delux, delux],
    features: [
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' /></svg>, 
        title: 'Entire room', 
        desc: 'You\'ll have the deluxe room to yourself' 
      },
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' /></svg>, 
        title: 'Enhanced Clean', 
        desc: 'This host committed to Bindle\'s 5-step enhanced cleaning process' 
      },
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z' /></svg>, 
        title: 'Self check-in', 
        desc: 'Check yourself in with the lockbox' 
      },
      { 
        icon: <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' /></svg>, 
        title: 'Cancellation policy', 
        desc: 'Cancel before 3:00 PM on Feb 5 and get a 50% refund, minus the first night' 
      }
    ]
  }
}

const RoomPage = () => {
  const searchParams = useSearchParams()
  const roomType = searchParams.get('type') || 'executive'
  const [selectedImage, setSelectedImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isEntering, setIsEntering] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  
  const room = roomData[roomType]
  
  const getTransitionClasses = () => {
    const isTransitioning = isEntering || isExiting;
    return {
      leftSection: isTransitioning ? 'md:opacity-0 md:-translate-x-10' : 'md:opacity-100 md:translate-x-0',
      rightSection: isTransitioning ? 'md:opacity-0 md:translate-x-10' : 'md:opacity-100 md:translate-x-0',
      header: isEntering ? 'translate-y-10' : isExiting ? '-translate-y-10' : 'translate-y-0',
      content: isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
    };
  };
  
  const transitionClasses = getTransitionClasses();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false)
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  
  if (!room) {
    return <div>Room not found</div>
  }
  
  return (
    <div className='min-h-screen bg-white py-8 px-10 mt-16'>
      <div className='max-w-7xl mx-auto'>
        <div className={`transition-all duration-500 ease-in-out transform ${
          transitionClasses.header
        }`}>
          <div className='mb-6'>
            <Link href='/' className='inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors'>
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <div className='mb-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-2'>{room.title}</h1>
            <div className='flex items-center gap-4 text-gray-600'>
              <span>{room.location}</span>
              <div className='flex items-center gap-1'>
                <span className='text-yellow-400'>⭐</span>
                <span className='font-medium'>{room.rating}</span>
              </div>
            </div>
          </div>
        </div>
          
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className={`lg:col-span-2 transition-all duration-500 ease-in-out transform ${
            transitionClasses.leftSection
          }`}>
            <div className='grid grid-cols-2 gap-2 rounded-2xl overflow-hidden mb-8'>
              <div className='relative aspect-[4/3]'>
                <Image
                  src={room.images[0]}
                  alt={room.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='grid grid-rows-2 gap-2'>
                <div className='relative'>
                  <Image
                    src={room.images[1]}
                    alt={`${room.title} view 2`}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='relative'>
                  <Image
                    src={room.images[2]}
                    alt={`${room.title} view 3`}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
            
            <div className='mb-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>DB Residency</h2>
              <p className='text-gray-600 mb-4'>{room.location}</p>
              
              <div className='space-y-6'>
                {room.features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    <div className='mt-1'>{feature.icon}</div>
                    <div>
                      <h3 className='font-medium text-gray-900 mb-1'>{feature.title}</h3>
                      <p className='text-gray-600 text-sm'>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-1 transition-all duration-500 ease-in-out transform ${
            transitionClasses.rightSection
          }`}>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-lg sticky top-8'>
              <h3 className='text-xl font-semibold text-gray-900 mb-6'>Room Details</h3>
              
              <div className='space-y-4 mb-6'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Size</span>
                  <span className='font-medium'>{room.size}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Beds</span>
                  <span className='font-medium'>{room.beds}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Bathroom</span>
                  <span className='font-medium'>{room.baths}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Guests</span>
                  <span className='font-medium'>{room.guests}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomPage