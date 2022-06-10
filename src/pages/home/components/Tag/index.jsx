import React, { useContext } from 'react'
import TagContext from '../../../../contexts/TagContext'

const Tag = ({ value, name }) => {
  const { selectedTag, setSelectedTag } = useContext(TagContext)
  return (
    <button
      onClick={() => setSelectedTag(value)}
      className={`border border-teal-500 px-4 py-1 ${
        value === selectedTag
          ? 'bg-teal-500 text-white hover:bg-transparent hover:text-teal-500'
          : 'bg-transparent text-teal-500 hover:bg-teal-500 hover:text-white'
      } transition-all duration-300 rounded shadow-lg`}
    >
      {name}
    </button>
  )
}

export default Tag
