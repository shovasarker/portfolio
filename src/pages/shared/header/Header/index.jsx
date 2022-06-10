import React from 'react'
import { MenuProvider } from '../../../../contexts/MenuContext'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header className='sticky top-0 w-full h-20 flex items-center bg-gray-900 z-20 border-b-4 border-b-teal-500'>
      <MenuProvider>
        <Navbar />
      </MenuProvider>
    </header>
  )
}

export default Header
