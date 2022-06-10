import React from 'react'

const Spinner = ({ center }) => {
  return (
    <div
      className={`w-full ${
        center ? 'h-[500px] flex justify-center items-center' : 'h-auto'
      }`}
    >
      <div className='w-8 h-8 border-2 border-teal-500 border-b-transparent rounded-full animate-spin mx-auto'></div>
    </div>
  )
}

export default Spinner
