import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Project from './pages/project/Project'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:projectName' element={<Project />} />
      </Routes>
    </>
  )
}

export default App
