import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

import profilePic from '../../../../assets/images/shova-profile.png'
import SocialLinks from '../../../standalone/SocialLinks'

const Profile = () => {
  return (
    <div className='my-10 flex flex-col md:flex-row justify-between items-start gap-6'>
      <div className='w-full md:w-2/6 p-2 mask-octagon bg-purple-600'>
        <div className='w-full mask-octagon bg-gradient-to-b from-teal-200 to-teal-600'>
          <img
            src={profilePic}
            alt='Shova Sarker Profile '
            className='w-full mask-octagon'
          />
        </div>
      </div>
      <div className='w-full md:w-1/2 xl:w-7/12'>
        <h2 className='text-3xl xl:text-4xl font-semibold text-teal-500 tracking-wide uppercase'>
          Shova Sarker
        </h2>
        <h3 className='text-xl xl:text-2xl font-semibold text-teal-700 tracking-wide mt-2'>
          Front End Developer | React JS Developer
        </h3>
        <p className='mt-3 tracking-wide'>
          I Work with React JS, Expess JS and MongoDB to Make Full Stack
          Application but I mainly Work with React JS to make Front End
          Application. I also previously made static websites with HTML, CSS and
          JavaScript.
        </p>
        <p className='mt-4'>I Work Best With</p>
        <div className='flex justify-start items-center gap-4 mt-2'>
          <GrReactjs
            className='w-12 h-12 rounded shadow-lg bg-white text-teal-500 p-2'
            title='React JS'
          />
          <SiTailwindcss
            className='w-12 h-12 rounded shadow-lg bg-white text-teal-500 p-2'
            title='Tailwindcss'
          />
          <FaNodeJs
            className='w-12 h-12 rounded shadow-lg bg-white text-teal-500 p-2'
            title='Node JS'
          />
        </div>

        <p className='mt-4'>Follow Me on</p>
        <SocialLinks />
      </div>
    </div>
  )
}

export default Profile
