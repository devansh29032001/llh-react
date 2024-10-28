// import React from 'react'
// import Navbar from '../Home/Navbar'
// import Jobsearch1 from './Jobsearch1'
// import Jobsearch2 from './Jobsearch2'
// import Footer from '../Home/Footer'
// import { Outlet } from 'react-router-dom'
// const Jobsearch = () => {
//   return (
//    <>
//    <Navbar/>
//     <div className='p-24'>
        
//         <Jobsearch1/>
//         <Jobsearch2/>

       
//     </div>
//     <Footer/>
//    </>
//   )
// }

// export default Jobsearch

import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import Jobsearch1 from './Jobsearch1'
import Jobsearch2 from './Jobsearch2'
import Footer from '../Home/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import { jobData } from '../../data/jobData'

const Jobsearch = () => {
  const navigate=useNavigate()

  useEffect(() => {
    // Only redirect if the URL doesn't already have a job id
    if (window.location.pathname === '/search') {
      navigate(`${jobData[0].id}`);
    }
  }, [navigate]);
  return (
   <>
   <Navbar/>
    <div className='py-24   '>
        <div className='px-24 '>
        <Jobsearch1/>
        </div>
        <div className='flex'>
        <div className='w-1/3'>
          <Jobsearch2/>
        </div>
        
        <div className='w-2/3'>
          <Outlet/>
        </div>
        </div>

       
    </div>
    <Footer/>
   </>
  )
}

export default Jobsearch
