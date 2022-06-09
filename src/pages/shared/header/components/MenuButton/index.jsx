import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiTireIronCross } from 'react-icons/gi'
import MenuContext from '../../../../../contexts/MenuContext'

const MenuButton = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className='lg:hidden bg-white px-4 py-3 rounded shadow-lg active:scale-95 z-20 text-lg'
    >
      {menuOpen ? (
        <GiTireIronCross className='w-6 h-6' />
      ) : (
        <AiOutlineMenu className='w-6 h-6' />
      )}
    </button>
  )
}

export default MenuButton
