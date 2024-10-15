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
    <div className='h-20 w-full   '>
      <form className=' h-full flex items-center rounded-md shadow-xl gap-10 mt-8 px-3' action="" onSubmit={handleSearch}>
        <input type="text" name='profession' placeholder='Type of Job looking for? ' className='border border-zinc-300 px-4 py-2 w-[20vw] rounded-md'
         value={jobType}
         onChange={(e) => setJobType(e.target.value)} // Update state on input change
        />

        <input type="text" name='profession' placeholder='Enter Location' className=' border border-zinc-300 rounded-md px-4 py-2 w-[25vw]' 
        value={location}
        onChange={(e) => setLocation(e.target.value)} // Update state on input change
        />


        <button type='submit' className='px-5 py-3 bg-blue-900 hover:scale-105 active:scale-95 rounded-md text-white '>Search Jobs</button>
      </form>
    </div>
  )
}

export default Jobsearch1
