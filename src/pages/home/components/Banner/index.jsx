import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import Button from '../../../standalone/Button'
import DeveloperName from '../DeveloperName'

const Banner = () => {
  return (
    <section className='relative h-screen pt-20 flex items-center bg-gray-800'>
      <div className='container px-6 md:px-10 lg:px-16 font-poppins'>
        <h1 className=' text-4xl leading-snug md:text-6xl font-medium md:leading-tight text-white'>
          Hello,
        </h1>
        <h1 className='text-4xl leading-snug md:text-6xl font-medium md:leading-tight text-white'>
          I'm
        </h1>
        <DeveloperName />
        <h3 className='text-2xl leading-normal font-medium mt-2 text-white'>
          I'm a{' '}
          <span className='text-teal-600'>
            Front End Developer | React JS Developer
          </span>
        </h3>
        <a
          href='https://drive.google.com/uc?export=download&id=1IytEuag6PwMjDYTgQ_455UJlype7qu9D'
          target={'_blank'}
          rel='noreferrer'
          download
          className='inline-block'
        >
          <Button primary className={'mt-8 font-poppins'}>
            Download Resume
          </Button>
        </a>
      </div>
      <a
        href='#about'
        className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'
      >
        <MdOutlineKeyboardArrowDown className='w-12 h-12 text-teal-500' />
      </a>
    </section>
  )
}

export default Banner
