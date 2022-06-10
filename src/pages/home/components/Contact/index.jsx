import React from 'react'

const Contact = () => {
  return (
    <section
      className='container px-6 md:px-10 lg:px-16 scroll-mt-28 mt-20'
      id='contact'
    >
      <iframe
        id='JotFormIFrame-221594944946066'
        title='Contact Me'
        onLoad={window.parent.scrollTo(0, 0)}
        allowtransparency={'true'}
        allowFullScreen={true}
        allow='geolocation; microphone; camera'
        src='https://form.jotform.com/221594944946066'
        frameBorder='0'
        scrolling='no'
        className='h-[800px] w-full md:w-1/2 border-0 mx-auto'
      ></iframe>
    </section>
  )
}

export default Contact
