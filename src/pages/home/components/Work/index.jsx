import React from 'react'

const Work = ({ work }) => {
  const { icon, name, description } = work
  return (
    <div className='w-full overflow-hidden shadow-xl rounded-lg bg-white px-5 py-8'>
      <div className='flex flex-col justify-center items-center gap-3 text-center'>
        {icon}
        <h3 className='text-2xl font-medium text-teal-600'>{name}</h3>
        <p className='text-gray-500 text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Work
