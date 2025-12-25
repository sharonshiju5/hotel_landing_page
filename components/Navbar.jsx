'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useNavbar } from '../contexts/NavbarContext'
import logo from '../assets/logo.png'
import Image from 'next/image'
const Navbar = () => {
  const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false)
  const [isOverHomepage, setIsOverHomepage] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkBackground } = useNavbar()
  const dropdownRef = useRef(null)
  const router = useRouter()
  
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  useEffect(() => {
    if (!isHomePage) return
    
    const handleScroll = () => {
      const homepageElement = document.querySelector('[data-component="homepage"]')
      if (homepageElement) {
        const rect = homepageElement.getBoundingClientRect()
        setIsOverHomepage(rect.bottom > 0)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])
  
  const textColor = (isHomePage && isOverHomepage) ? 'text-white' : 'text-black'
  const hoverColor = (isHomePage && isOverHomepage) ? 'hover:text-gray-300' : 'hover:text-gray-600'
  const buttonBg = (isHomePage && isOverHomepage) ? 'bg-white' : 'bg-black'
  const buttonText = (isHomePage && isOverHomepage) ? 'text-black' : 'text-white'
  const buttonHover = (isHomePage && isOverHomepage) ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsRoomDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const handleHomeClick = () => {
    router.push('/')
  }
  
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 '>
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src={logo} alt='UB Residency Logo' width={80} height={32} className='cursor-pointer md:w-[120px] md:h-[40px]' />
        </div>
        <div className={`${textColor} text-lg md:text-2xl font-bold tracking-wider transition-all duration-700 ease-out transform hidden sm:block`}>
          UB Residency
        </div>
        
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${textColor} p-2`}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        
        {/* Navigation Menu */}
        <div className='hidden md:flex items-center space-x-8'>
          <div 
            className={`flex items-center ${textColor} ${hoverColor} cursor-pointer transition-all duration-700 ease-out transform hover:scale-105`}
            onClick={handleHomeClick}
          >
            <span>Home</span>
          </div>
          <div className='relative' ref={dropdownRef}>
            <div 
              className={`flex items-center ${textColor} ${hoverColor} cursor-pointer transition-all duration-700 ease-out transform hover:scale-105`}
              onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
            >
              <span>Room</span>
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${isRoomDropdownOpen ? 'rotate-180' : ''}`} 
                fill='currentColor' 
                viewBox='0 0 20 20'
              >
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
            <div className={`absolute top-full left-0 mt-2 transition-all duration-300 ease-in-out origin-top ${
              isRoomDropdownOpen 
                ? 'opacity-100 scale-y-100 translate-y-0' 
                : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
            }`}>
              <ul className='bg-white text-black rounded-lg shadow-lg min-w-48 py-2 border border-gray-100'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150'>Junior Suite</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150'>Deluxe Double Room</li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* Right side - Contact Button */}
        <div className='hidden md:flex items-center space-x-4'>
          <Link href='/contact'>
            <button className={`${buttonBg} ${buttonText} px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium ${buttonHover} transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg flex items-center`}>
              <svg className='w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z' clipRule='evenodd' />
              </svg>
              <span className='hidden sm:inline'>CONTACT NOW</span>
              <span className='sm:hidden'>CONTACT</span>
            </button>
          </Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className='bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-4 space-y-4'>
          <div 
            className='text-gray-800 hover:text-gray-600 cursor-pointer transition-colors duration-200 py-2'
            onClick={() => { handleHomeClick(); setIsMobileMenuOpen(false); }}
          >
            Home
          </div>
          <div 
            className='text-gray-800 hover:text-gray-600 cursor-pointer transition-colors duration-200 py-2'
            onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
          >
            <div className='flex items-center justify-between'>
              <span>Room</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isRoomDropdownOpen ? 'rotate-180' : ''}`} 
                fill='currentColor' 
                viewBox='0 0 20 20'
              >
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
            <div className={`mt-2 ml-4 space-y-2 transition-all duration-200 ${isRoomDropdownOpen ? 'block' : 'hidden'}`}>
              <div className='text-gray-600 hover:text-gray-800 cursor-pointer py-1'>Junior Suite</div>
              <div className='text-gray-600 hover:text-gray-800 cursor-pointer py-1'>Deluxe Double Room</div>
            </div>
          </div>
          <Link href='/contact' onClick={() => setIsMobileMenuOpen(false)}>
            <div className='bg-black text-white px-4 py-2 rounded-full text-center font-medium hover:bg-gray-800 transition-colors duration-200'>
              CONTACT NOW
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
