import React from 'react'
import Navbar from './Home/Navbar'
import About1 from './About/About1'
import About2 from './About/About2'
import About3 from './About/About3'
import About4 from './About/About4'
import About5 from './About/About5'
import Footer from './Home/Footer'

const About = () => {
  return (
   <>
        
        <Navbar/>
        <div className='p-32'>
            <About1/>
            <About2/>
            <About3/>
            <About4/>
            <About5/>
        </div>
        <Footer/>
       

        
            
   </>
  )
}

export default About
