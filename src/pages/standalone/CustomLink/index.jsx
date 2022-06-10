import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children, onClick }) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`border-b-2 border-b-transparent px-1 uppercase tracking-wider ${
        match
          ? 'text-teal-500 hover:border-b-teal-500'
          : 'text-white hover:border-b-white'
      } transition-all duration-300 text-3xl font-semibold  lg:text-base lg:font-medium`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
