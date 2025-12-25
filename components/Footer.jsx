import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12 px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Residency</h3>
            <p className='text-gray-300 leading-relaxed'>
              Experience luxury and comfort in the heart of the city.
            </p>
          </div>
          
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <span className='text-xl'>📞</span>
                <a href='tel:+919995306916' className='text-gray-300 hover:text-white transition-colors'>
                  +91 9995306916
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-xl'>✉️</span>
                <a href='mailto:ubresidency916@gmail.com' className='text-gray-300 hover:text-white transition-colors'>
                  ubresidency916@gmail.com
                </a>
              </div>
              <div className='flex items-start gap-3'>
                <span className='text-xl'>📍</span>
                <address className='text-gray-300 not-italic leading-relaxed'>
                  10/17, Sri Keshava Krupa, 1st Main,<br />
                  Maruthinagar, Madiwala,<br />
                  Bangalore - 560068
                </address>
              </div>
            </div>
          </div>
        </div>
        
        <div className='border-t border-gray-800 pt-6'>
          <p className='text-center text-gray-400'>
            © 2025 Residency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer