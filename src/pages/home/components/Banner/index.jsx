import React from 'react'
import Button from '../../../standalone/Button'
import DeveloperName from '../DeveloperName'

const Banner = () => {
  return (
    <section className='h-screen pt-20 flex items-center bg-gray-800'>
      <div className='container px-6 md:px-10 lg:px-16 font-poppins'>
        <h1 className=' text-4xl leading-snug md:text-6xl font-medium md:leading-tight text-white'>
          Hello,
        </h1>
        <h1 className='text-4xl leading-snug md:text-6xl font-medium md:leading-tight text-white'>
          I'm
        </h1>
        <DeveloperName />
        <h3 className='text-2xl leading-normal font-medium mt-2 text-white'>
          I'm a Front End Web Developer | React JS Developer
        </h3>
        <a
          href='https://drive.google.com/uc?export=download&id=1IytEuag6PwMjDYTgQ_455UJlype7qu9D'
          target={'_blank'}
          rel='noreferrer'
          download
        >
          <Button primary className={'mt-8 font-poppins'}>
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  )
}

export default Banner
