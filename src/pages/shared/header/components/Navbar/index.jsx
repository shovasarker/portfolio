import React from 'react'
import Logo from '../../../../standalone/Logo'
import Menu from '../Menu'
import MenuButton from '../MenuButton'

const Navbar = () => {
  return (
    <nav className='container px-6 md:px-10 lg:px-16 py-5'>
      <div className='flex justify-between items-center'>
        <Logo />
        <MenuButton />
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar
