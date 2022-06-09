import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard'

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/projects.json`
      )
      setProjects(data)
    }

    getProjects()
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16'>
      {projects?.map((project) => (
        <ProjectCard key={project?.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsContainer
