import React from 'react'
import ProjectsContainer from '../../../shared/projectsContainer/ProjectsContainer'
import TagsList from '../TagsList'

const HomeProjects = () => {
  return (
    <section
      id='portfolio'
      className='container px-6 md:px-10 lg:px-16 my-10 scroll-mt-28 '
    >
      <h2 className='section-title'>My Projects</h2>
      <TagsList />
      <ProjectsContainer />
    </section>
  )
}

export default HomeProjects
