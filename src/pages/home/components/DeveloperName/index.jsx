import React from 'react'
const firstName = ['S', 'H', 'O', 'V', 'A']
const lastName = ['S', 'A', 'R', 'K', 'E', 'R']
const DeveloperName = () => {
  return (
    <h1 className='md:leading-tight'>
      {firstName?.map((letter, i) => (
        <span
          key={i}
          className='cursor-pointer inline-block text-4xl md:text-6xl md:leading-tight font-bold text-teal-500 hover:-translate-y-2 transition-all duration-200'
        >
          {letter}
        </span>
      ))}{' '}
      {lastName?.map((letter, i) => (
        <span
          key={i}
          className='cursor-pointer inline-block  text-4xl md:text-6xl md:leading-tight font-bold text-teal-500 hover:-translate-y-2 transition-all duration-200'
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}

export default DeveloperName
