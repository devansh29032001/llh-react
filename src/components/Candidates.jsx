import React from 'react'
import Navbar from './Home/Navbar'
import Candidate1 from './Candidates/Candidate1'
import Candidate2 from './Candidates/Candidate2'
import Footer from './Home/Footer'

const Candidates = () => {
  return (
    
    <div >
        <Navbar/>
        <div className='p-24'>
            <Candidate1/>
            <Candidate2/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Candidates
