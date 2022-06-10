import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <div className='flex justify-start items-center gap-4 mt-2'>
      <a
        href='https://www.linkedin.com/in/shova-sarker-5a2094241/'
        target={'_blank'}
        rel='noreferrer'
      >
        <BsLinkedin className='w-8 h-8 text-teal-500 ' />
      </a>
      <a
        href='https://web.facebook.com/profile.php?id=100010892646664'
        target={'_blank'}
        rel='noreferrer'
      >
        <BsFacebook className='w-8 h-8 text-teal-500' />
      </a>
      <a
        href='https://github.com/shovasarker'
        target={'_blank'}
        rel='noreferrer'
      >
        <BsGithub className='w-8 h-8 text-teal-500' />
      </a>
    </div>
  )
}

export default SocialLinks
