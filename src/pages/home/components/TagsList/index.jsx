import React from 'react'
import Tag from '../Tag'

const tagsList = [
  ['', 'All'],
  ['reactjs', 'React JS'],
  ['tailwindcss', 'Tailwind CSS'],
  ['styled-components', 'Styled-Components'],
  ['redux', 'Redux'],
]

const TagsList = () => {
  return (
    <div className='flex justify-center items-center gap-4 flex-wrap my-10'>
      {tagsList?.map(([value, name], i) => (
        <Tag key={i} value={value} name={name} />
      ))}
    </div>
  )
}

export default TagsList
