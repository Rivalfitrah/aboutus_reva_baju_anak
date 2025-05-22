import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import SliderImage from './component/SliderImage'
import About from './component/About'
import Footer from './component/Footer'
import Galery from './component/Galery'

function AboutPage() {
  return (
    <>
    <Navbar />
    <br /><br /><br />
    <SliderImage />
    <About />
    <Galery />
    <Footer />

    </>
  )
}

export default AboutPage