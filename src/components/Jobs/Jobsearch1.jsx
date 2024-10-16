import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Jobsearch1 = () => {
  const [jobType,setJobType]=useState('')
  const [location,setLocation]=useState('')
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault();
    navigate(`/search?jobtype=${jobType}&location=${location}`)
  }

  return (
    <div className=' h-20 w-[300%]   md:w-full mb-64 md:mb-0'>
      <form className='h-auto md:h-full flex  items-center flex-col md:flex-row rounded-xl md:shadow-xl gap-10 mt-20 md:mt-8  px-3' action="" onSubmit={handleSearch}>
        <input type="text" name='profession' placeholder='Type of Job looking for? ' className='border border-zinc-300 text-3xl px-20 py-6 md:px-4 w-full  md:text-lg md:py-2 md:w-[20vw] rounded-md'
         value={jobType}
         onChange={(e) => setJobType(e.target.value)} // Update state on input change
        />

        <input type="text" name='profession' placeholder='Enter Location'  className='border border-zinc-300 text-3xl px-20 py-6 md:px-4 w-full  md:text-lg md:py-2 md:w-[20vw] rounded-md' 
        value={location}
        onChange={(e) => setLocation(e.target.value)} // Update state on input change
        />


        <button type='submit' className='w-full py-5 md:px-5 md:py-3 bg-blue-900 hover:scale-105 active:scale-95 duration-200 rounded-md text-white '>Search Jobs</button>
      </form>
    </div>
  )
}

export default Jobsearch1
