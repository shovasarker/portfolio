import React from 'react'
import { MdOutlineWeb } from 'react-icons/md'
import { DiResponsive } from 'react-icons/di'
import { SiDynamics365 } from 'react-icons/si'

import Work from '../Work'

const works = [
  {
    icon: (
      <MdOutlineWeb className='w-20 h-20 rounded-full bg-teal-50 p-4 text-teal-500' />
    ),
    name: 'Front End Website Design',
    description: 'I like developing front ends for websites',
  },
  {
    icon: (
      <SiDynamics365 className='w-20 h-20 p-4 rounded-full  bg-teal-50 text-teal-500' />
    ),
    name: 'Static and Dynamic Website Design',
    description: 'I can make both static and dynamic website.',
  },
  {
    icon: (
      <DiResponsive className='w-20 h-20 p-2 rounded-full  bg-teal-50 text-teal-500' />
    ),
    name: 'Responsive Website Design',
    description: 'All my mrojects are responsive for mobile, tablet and pc.',
  },
]

const Works = () => {
  return (
    <div>
      <h2 className='text-3xl text-center text-gray-700 font-semibold'>
        What I Do
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {works?.map((work, i) => (
          <Work key={i} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works
