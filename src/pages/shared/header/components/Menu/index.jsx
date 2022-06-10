import React, { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import MenuContext from '../../../../../contexts/MenuContext'
import CustomLink from '../../../../standalone/CustomLink'

const links = ['/', 'Home']

const hash = [
  ['#about', 'About Me'],
  ['#portfolio', 'PortFolio'],
  [`#contact`, 'Contact Me'],
]

const Menu = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <div
      className={`absolute lg:static w-full lg:w-auto h-screen md:h-[450px] lg:h-auto bg-teal-200 lg:bg-transparent left-1/2 -translate-x-1/2 lg:translate-x-0 ${
        menuOpen ? 'top-0' : '-top-[3000px]'
      } flex flex-col lg:flex-row  justify-center lg:justify-end items-center gap-8 lg:gap-5 transition-all duration-500`}
    >
      <CustomLink to={links[0]} onClick={closeMenu}>
        {links[1]}
      </CustomLink>
      {hash?.map(([to, value], i) => (
        <HashLink
          key={i}
          to={to}
          onClick={closeMenu}
          className='uppercase text-white px-1 border-b-2 border-b-transparent hover:border-b-white transition-all duration-300 text-3xl font-semibold  lg:text-base lg:font-medium'
        >
          {value}
        </HashLink>
      ))}
    </div>
  )
}

export default Menu
