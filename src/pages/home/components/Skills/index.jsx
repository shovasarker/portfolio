import React from 'react'
import Skill from '../Skill'

const skills = [
  {
    name: 'HTML',
    value: 90,
  },
  {
    name: 'CSS',
    value: 90,
  },
  {
    name: 'Tailwind',
    value: 90,
  },
  {
    name: 'Bootstrap',
    value: 80,
  },
  {
    name: 'JavaScript',
    value: 80,
  },
  {
    name: 'React JS',
    value: 80,
  },
  {
    name: 'Express JS',
    value: 60,
  },
  {
    name: 'MongoDB',
    value: 60,
  },
]

const Skills = () => {
  return (
    <div className='my-10'>
      <h2 className='text-3xl text-gray-700 font-semibold text-center'>
        My Skills
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 my-10'>
        {skills?.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills
