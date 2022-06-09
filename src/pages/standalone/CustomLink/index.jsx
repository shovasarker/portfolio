import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children }) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })
  return (
    <Link
      to={to}
      className={`border-b-2 border-b-transparent px-1 uppercase tracking-wider ${
        match
          ? 'text-teal-500 hover:border-b-teal-500'
          : 'text-white lg:text-gray-700 hover:border-b-white lg:hover:border-b-gray-700'
      } transition-all duration-300 text-3xl font-semibold  lg:text-base lg:font-medium`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
