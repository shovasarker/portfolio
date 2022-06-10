import React from 'react'
import { TagProvider } from '../../../contexts/TagContext'
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
      <TagProvider>
        <HomeProjects />
      </TagProvider>
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
