import React from 'react'
import ProgressBar from '../ProgressBar'

const Skill = ({ skill }) => {
  const { name, value } = skill
  return (
    <div>
      <div className='w-full flex justify-between items-center'>
        <p className='font-medium'>{name}</p>
        <p className='font-medium text-teal-500'>{value}%</p>
      </div>
      <ProgressBar value={value} />
    </div>
  )
}

export default Skill
