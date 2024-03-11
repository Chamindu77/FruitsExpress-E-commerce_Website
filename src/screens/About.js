import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
    <div> <Navbar/></div>
    <div>  
        <img src="/About.png" alt="Description of your image" style={{ height: '100%', width: '100%' }} />
    </div>
    <div><Footer/></div>
    </div>
  )
}
