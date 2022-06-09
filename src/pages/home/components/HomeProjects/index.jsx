import React from 'react'
import ProjectsContainer from '../../../shared/projectsContainer/ProjectsContainer'

const HomeProjects = () => {
  return (
    <section className='container px-6 md:px-10 lg:px-16 my-10'>
      <h2 className='text-center text-2xl font-medium text-gray-800 my-10'>
        My Projects
      </h2>
      <ProjectsContainer />
    </section>
  )
}

export default HomeProjects
