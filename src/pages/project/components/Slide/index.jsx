import React from 'react'
import { SplideSlide } from '@splidejs/react-splide'

const Slide = ({ screenShots }) => {
  return (
    <>
      {screenShots?.map((slide) => (
        <SplideSlide key={slide}>
          <img
            src={slide}
            alt=''
            className='cursor-grab active:cursor-grabbing'
          />
        </SplideSlide>
      ))}
    </>
  )
}

export default Slide
