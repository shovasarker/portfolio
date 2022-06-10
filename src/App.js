import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './pages/shared/header/Header'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

//https://drive.google.com/uc?export=download&id=1IytEuag6PwMjDYTgQ_455UJlype7qu9D

export default App
