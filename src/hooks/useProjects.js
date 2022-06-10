import axios from 'axios'
import { useEffect, useState } from 'react'

const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/projects.json`
      )
      setProjects(data)
      setLoading(false)
    }

    getProjects()
  }, [])

  return [projects, loading]
}

export default useProjects
