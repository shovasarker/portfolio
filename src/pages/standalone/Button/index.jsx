import React from 'react'

const Button = ({
  children,
  small,
  full,
  primary,
  outlined,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 cursor-pointer ${
        small ? 'text-sm px-4 py-1' : 'text-base px-6 py-2'
      } rounded shadow-lg ${full ? 'w-full' : 'w-auto'} border ${
        outlined
          ? primary
            ? 'border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
            : 'border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'
          : primary
          ? 'border-teal-500 bg-teal-500 text-white hover:bg-white hover:text-teal-500'
          : 'border-gray-700 bg-gray-700 text-white hover:bg-white hover:text-gray-700'
      } transition-all duration-300 ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
