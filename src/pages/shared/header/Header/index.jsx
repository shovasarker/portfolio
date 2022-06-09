import React from 'react'
import { MenuProvider } from '../../../../contexts/MenuContext'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header className='fixed w-full h-20 flex items-center bg-white z-20'>
      <MenuProvider>
        <Navbar />
      </MenuProvider>
    </header>
  )
}

export default Header
