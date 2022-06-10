import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Button from '../../../standalone/Button'
import LinkButton from '../../../standalone/LinkButton'
import ImageSlider from '../ImageSlider'

const ProjectDetails = ({ project }) => {
  const {
    title,
    description,
    features,
    liveUrl,
    clientRepo,
    serverRepo,
    screenShots,
    tags,
  } = project
  console.log(project)
  return (
    <main className='container px-6 md:px-10 lg:px-16 my-10'>
      <div className='flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-start gap-10'>
        <div className='w-full lg:w-1/2'>
          <ImageSlider screenShots={screenShots} />
        </div>
        <div className='w-full lg:w-2/5 flex flex-col justify-start items-start gap-4 text-gray-700'>
          <h2 className='text-3xl font-semibold text-teal-500'>{title}</h2>
          <p>{description}</p>
          <span className='font-semibold'>Features :</span>
          <ul className='list-outside list-disc ml-5 space-y-3'>
            {features?.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <LinkButton to={liveUrl} primary outlined>
            <>Live Preview</>
            <BsBoxArrowUpRight className='w-5 h-5' />
          </LinkButton>
          <div className='flex justify-start items-center flex-wrap gap-4'>
            <LinkButton to={clientRepo} outlined>
              <>Client-side Repo</>
              <BsBoxArrowUpRight className='w-5 h-5' />
            </LinkButton>
            {serverRepo ? (
              <LinkButton to={serverRepo}>
                <>Server-side Repo</>
                <BsBoxArrowUpRight className='w-5 h-5' />
              </LinkButton>
            ) : null}
          </div>
          <p className='mt-4 font-semibold'>Tags :</p>
          <div className='flex justify-start items-center gap-3 flex-wrap'>
            {tags?.map((tag, i) => (
              <Button outlined small>
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetails
