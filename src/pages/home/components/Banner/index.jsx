import React from 'react'
import Button from '../../../standalone/Button'
import DeveloperName from '../DeveloperName'

const Banner = () => {
  return (
    <section className='h-screen pt-20 flex items-center'>
      <div className='container px-6 md:px-10 lg:px-16'>
        <h1 className=' text-4xl md:text-6xl font-bold md:leading-tight'>
          Hi,
        </h1>
        <h1 className=' text-4xl md:text-6xl font-bold md:leading-tight'>
          I am
        </h1>
        <DeveloperName />
        <h3 className='text-2xl font-medium mt-2'>
          Front-end Web Developer | React JS Developer
        </h3>
        <a
          href='https://drive.google.com/uc?export=download&id=1IytEuag6PwMjDYTgQ_455UJlype7qu9D'
          target={'_blank'}
          rel='noreferrer'
          download
        >
          <Button primary className={'mt-8'}>
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  )
}

export default Banner