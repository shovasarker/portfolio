import { createContext, useState } from 'react'

const TagContext = createContext()

export const TagProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState('')
  return (
    <TagContext.Provider value={{ selectedTag, setSelectedTag }}>
      {children}
    </TagContext.Provider>
  )
}

export default TagContext
