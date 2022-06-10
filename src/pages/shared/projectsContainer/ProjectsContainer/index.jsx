import React, { useContext } from 'react'
import TagContext from '../../../../contexts/TagContext'
import useProjects from '../../../../hooks/useProjects'
import ProjectCard from '../ProjectCard'

const ProjectsContainer = () => {
  const [projects] = useProjects()
  const { selectedTag } = useContext(TagContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16'>
      {projects
        ?.filter((project) =>
          selectedTag ? project?.tags?.includes(selectedTag) : project
        )
        ?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
    </div>
  )
}

export default ProjectsContainer
