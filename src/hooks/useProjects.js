import axios from 'axios'
import { useEffect, useState } from 'react'

const useProjects = () => {
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

  return [projects]
}

export default useProjects
