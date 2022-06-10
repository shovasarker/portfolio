import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProjects from '../../../hooks/useProjects'
import Header from '../../shared/header/Header'
import Spinner from '../../standalone/Spinner'
import ProjectDetails from '../components/ProjectDetails'

const Project = () => {
  const { projectName } = useParams()
  const [projects, loading] = useProjects()
  const [project, setProject] = useState()

  useEffect(() => {
    if (projects?.length < 1) return
    setProject(
      projects?.find(
        (p) => p.title.toLowerCase() === projectName?.toLowerCase()
      )
    )
  }, [projectName, projects])

  if (loading) return <Spinner center />

  return (
    <>
      <Header />
      <ProjectDetails project={project} />
    </>
  )
}

export default Project
