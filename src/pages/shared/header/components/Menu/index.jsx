import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuContext from '../../../../../contexts/MenuContext'
import CustomLink from '../../../../standalone/CustomLink'

const links = [
  ['/', 'Home'],
  ['/projects', 'Projects'],
]

const hash = [
  ['#about', 'About Me'],
  ['#contact', 'Contact Me'],
]

const Menu = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <div
      className={`absolute lg:static w-full lg:w-auto h-screen md:h-[450px] lg:h-auto bg-teal-200 lg:bg-transparent left-1/2 -translate-x-1/2 lg:translate-x-0 ${
        menuOpen ? 'top-0' : '-top-full'
      } flex flex-col lg:flex-row  justify-center lg:justify-end items-center gap-8 lg:gap-5`}
    >
      {links?.map(([to, value], i) => (
        <CustomLink key={i} to={to} onClick={closeMenu}>
          {value}
        </CustomLink>
      ))}
      {hash?.map(([to, value], i) => (
        <Link
          key={i}
          to={to}
          onClick={closeMenu}
          className='uppercase text-white lg:text-gray-700 px-1 border-b-2 border-b-transparent hover:border-b-white lg:hover:border-b-gray-700 transition-all duration-300 text-3xl font-semibold  lg:text-base lg:font-medium'
        >
          {value}
        </Link>
      ))}
    </div>
  )
}

export default Menu
