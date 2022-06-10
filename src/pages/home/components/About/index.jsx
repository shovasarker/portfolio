import React from 'react'
import Profile from '../Profile'
import Skills from '../Skills'
import Works from '../Works'

const About = () => {
  return (
    <section
      id='about'
      className='about-section scroll-mt-20 mb-10 py-28 md:py-24 lg:py-32 bg-gray-100'
    >
      <div className='container px-6 md:px-10 lg:px-16'>
        <h2 className='section-title'>About Me</h2>
        <Profile />
        <Works />
        <Skills />
      </div>
    </section>
  )
}

export default About
