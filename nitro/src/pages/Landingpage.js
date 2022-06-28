import React from 'react'
import Home from '../components/Home'
import Aboutus from '../components/Aboutus'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../styles/Landing.css'
function Landingpage() {
  return (
    <div className='l1'>
        <Home/>
        <Aboutus/>
        <Portfolio/>
        <Services/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Landingpage