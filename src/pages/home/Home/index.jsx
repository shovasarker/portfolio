import React from 'react'
import Footer from '../../shared/Footer'
import Header from '../../shared/header/Header'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import HomeProjects from '../components/HomeProjects'

const Home = () => {
  return (
    <main className='font-poppins'>
      <Banner />
      <Header />
      <About />
      <HomeProjects />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
