'use client'
import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-16 px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Contact Us</h1>
          <p className='text-gray-600'>Get in touch with UB Residency for reservations and inquiries</p>
        </div>
        
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Hotel Information</h3>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <svg className='w-5 h-5 text-blue-500 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  <div>
                    <h4 className='font-medium text-gray-800'>Address</h4>
                    <p className='text-gray-600'>123 Luxury Street, City Center<br />Downtown, State 12345</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className='w-5 h-5 text-blue-500 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  <div>
                    <h4 className='font-medium text-gray-800'>Phone</h4>
                    <p className='text-gray-600'>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className='w-5 h-5 text-blue-500 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <div>
                    <h4 className='font-medium text-gray-800'>Email</h4>
                    <p className='text-gray-600'>info@ubresidency.com</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-3'>
                  <svg className='w-5 h-5 text-blue-500 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  <div>
                    <h4 className='font-medium text-gray-800'>Hours</h4>
                    <p className='text-gray-600'>24/7 Front Desk Service<br />Check-in: 3:00 PM<br />Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Quick Actions</h3>
              <div className='space-y-3'>
                <button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors'>
                  Make a Reservation
                </button>
                <button className='w-full border border-blue-500 text-blue-500 hover:bg-blue-50 py-3 px-4 rounded-lg transition-colors'>
                  Request Information
                </button>
              </div>
            </div>
          </div>
          
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>Send us a Message</h3>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                <input 
                  type='text' 
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Your full name'
                />
              </div>
              
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                <input 
                  type='email' 
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='your.email@example.com'
                />
              </div>
              
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Phone</label>
                <input 
                  type='tel' 
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='(555) 123-4567'
                />
              </div>
              
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
                <textarea 
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='How can we help you?'
                ></textarea>
              </div>
              
              <button 
                type='submit'
                className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className='text-center mt-12'>
          <Link href='/'>
            <button className='border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-full transition-colors'>
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact