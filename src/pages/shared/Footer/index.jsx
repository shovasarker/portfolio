import React from 'react'
import SocialLinks from '../../standalone/SocialLinks'

const Footer = () => {
  return (
    <footer className='bg-gray-900 h-96'>
      <div className='container px-6 md:px-10 lg:px-16 h-full flex flex-col justify-center items-center'>
        <p className='text-base font-medium text-white my-3'>Follow Me on</p>
        <SocialLinks />
        <p className='mt-10 text-white text-sm'>
          &copy; {new Date().getFullYear()} Shova Sarker. All rights reserved{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
