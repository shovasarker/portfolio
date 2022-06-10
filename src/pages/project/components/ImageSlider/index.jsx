import { Splide } from '@splidejs/react-splide'
import React, { useEffect, useRef } from 'react'
import Slide from '../Slide'

import '@splidejs/react-splide/css'

const ImageSlider = ({ screenShots }) => {
  const mainRef = useRef()
  const thumbsRef = useRef()

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide)
    }
  }, [])

  const mainOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    pagination: false,
    height: '26rem',
    arrows: false,
    drag: true,
    snap: true,
    autoplay: true,
    mediaQuery: 'min',
    breakpoints: {
      height: '30rem',
    },
  }

  const thumbsOptions = {
    type: 'slide',
    rewind: true,
    gap: '1rem',
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: 'center',
    isNavigation: true,
  }
  return (
    <div className='w-full space-y-5'>
      <Splide
        options={mainOptions}
        ref={mainRef}
        aria-labelledby='thumbnail-slider-example'
      >
        <Slide screenShots={screenShots} />
      </Splide>

      <Splide
        options={thumbsOptions}
        ref={thumbsRef}
        aria-label='The carousel with thumbnails. Selecting a thumbnail will change the main carousel'
      >
        <Slide screenShots={screenShots} />
      </Splide>
    </div>
  )
}

export default ImageSlider
