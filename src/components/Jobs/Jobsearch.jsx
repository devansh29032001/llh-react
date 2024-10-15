import React from 'react'
import Navbar from '../Home/Navbar'
import Jobsearch1 from './Jobsearch1'
import Jobsearch2 from './Jobsearch2'
import Footer from '../Home/Footer'
const Jobsearch = () => {
  return (
   <>
    <div className='p-24'>
        <Navbar/>
        <Jobsearch1/>
        <Jobsearch2/>
    </div>
    <Footer/>
   </>
  )
}

export default Jobsearch
