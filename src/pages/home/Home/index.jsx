import React from 'react'
import Header from '../../shared/header/Header'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import HomeProjects from '../components/HomeProjects'

const Home = () => {
  return (
    <main className='font-poppins'>
      <Banner />
      <Header />
      <HomeProjects />
      <Contact />
    </main>
  )
}

export default Home
