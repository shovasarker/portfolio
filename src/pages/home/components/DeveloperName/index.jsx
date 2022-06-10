import React from 'react'
const firstName = ['S', 'H', 'O', 'V', 'A']
const lastName = ['S', 'A', 'R', 'K', 'E', 'R']
const DeveloperName = () => {
  return (
    <h1 className='md:leading-tight'>
      <span className='text-4xl leading-snug md:text-6xl font-medium md:leading-tight text-white mr-2'>
        I'm
      </span>
      {firstName?.map((letter, i) => (
        <span
          key={i}
          className='cursor-pointer inline-block text-4xl leading-snug md:text-6xl md:leading-tight font-bold text-teal-500 hover:animate-wiggle transition-all duration-200'
        >
          {letter}
        </span>
      ))}{' '}
      {lastName?.map((letter, i) => (
        <span
          key={i}
          className='cursor-pointer inline-block  text-4xl leading-snug md:text-6xl md:leading-tight font-bold text-teal-500 hover:animate-wiggle transition-all duration-200'
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}

export default DeveloperName
