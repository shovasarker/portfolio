import React from 'react'

const ProgressBar = ({ value }) => {
  return (
    <div className='w-full rounded-full border border-teal-500 p-0.5 mt-2'>
      <div className={`h-2 w-[${value}%] bg-teal-500 rounded-full`}></div>
    </div>
  )
}

export default ProgressBar
