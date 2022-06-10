import React from 'react'
import useProjects from '../../../../hooks/useProjects'
import ProjectCard from '../ProjectCard'

const ProjectsContainer = () => {
  const [projects] = useProjects()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16'>
      {projects?.map((project) => (
        <ProjectCard key={project?.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsContainer
