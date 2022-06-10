import axios from 'axios'
import React, { useEffect } from 'react'

const CustomContactForm = () => {
  useEffect(() => {
    const getFormDetails = async () => {
      const { data } = await axios.post(
        `https://api.jotform.com/form/221594944946066/submissions?apiKey=491f5f101175ba97b53956dd9d9101c1`,
        [
          'submission[4]=Karim ALi',
          'submission[5]=karim@gmail.com',
          'submission[6]=Hello Shova',
        ]
      )

      console.log(data)
    }
    getFormDetails()
  }, [])
  return <div></div>
}

export default CustomContactForm
