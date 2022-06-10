import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiArrowWings } from 'react-icons/gi'
import { BsBoxArrowUpRight } from 'react-icons/bs'

import Button from '../../../standalone/Button'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  const { img, title, description, tags, liveUrl } = project
  return (
    <div className='rounded shadow-2xl relative overflow-hidden h-[450px] project-card border border-gray-200'>
      <div className='absolute bg-black/20 w-full h-full -z-10'>
        <img
          src={img}
          alt={title}
          className='absolute top-0 -z-10 h-full object-cover w-full rounded'
        />
      </div>
      <div className='card-body hidden w-full h-full flex-col justify-center items-start gap-3 p-5 bg-white/80'>
        <h3 className='text-2xl z-20 font-semibold'>{title}</h3>
        <p>{description}</p>
        <div className='flex justify-start items-center gap-1 flex-wrap'>
          {tags
            ?.filter((t, i) => i < 3)
            ?.map((tag, i) => (
              <span
                key={i}
                className='inline-block px-2 border border-gray-600 text-gray-700 rounded'
              >
                {tag}
              </span>
            ))}
        </div>
        <a href={liveUrl} target='_blank' rel='noreferrer'>
          <Button primary className={'mt-2'}>
            <>Live Preview</>
            <GiArrowWings className='w-5 h-5' />
          </Button>
        </a>
        <Button outlined onClick={() => navigate(`/project/${title}`)}>
          <>Learn More</>
          <BsBoxArrowUpRight className='w-5 h-5' />
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard
