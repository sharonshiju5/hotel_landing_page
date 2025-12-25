'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
            <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.21 2.28-.71 3.5-1.5 1.22.79 2.41 1.29 3.5 1.5 5.16-1 9-5.45 9-11V7l-10-5z'/>
            </svg>
          </div>
          <h1 className='text-2xl font-bold text-white'>UB Residency</h1>
        </div>
        
        <Link href='/contact'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105'>
            Contact
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
