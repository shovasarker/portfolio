import React from 'react'
import Button from '../Button'

const LinkButton = ({ to, children, ...otherProps }) => {
  return (
    <a href={to} target='_blank' rel='noreferrer'>
      <Button {...otherProps}>{children}</Button>
    </a>
  )
}

export default LinkButton
