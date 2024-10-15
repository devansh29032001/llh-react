import React from 'react'

const Partner = () => {
  return (
    <div className=' w-[200%] md:w-full full mt-[250vh] md:mt-0 px-32 py-12'>
      <h1 className=' text-5xl md:text-4xl font-semibold mt-4 mb-3 md:w-[70%]'>Your partner in career and workforce transformation</h1>
        <p className=' md:w-[65%]  text-4xl md:text-2xl text-zinc-500'>
        With a personalized, empathetic approach and proven track record, we are here for you to achieve your career and business goals.
        </p>
      <div className=' mt-10 h-full  flex flex-wrap  justify-between px-2' >
            <div className=' mt-4 h-28 w-[200%] md:w-72  p-2 rounded-md shadow-xl' >
                <h1 className='text-2xl mb-4'>Find your dream job</h1>
                <a className='text-md text-red-400 ' href="">SEARCH JOBS</a>
            </div>
            
            <div className=' mt-4 h-28 w-[200%] md:w-72  p-2 rounded-md shadow-xl' >
                <h1 className='text-2xl mb-4'>Find & attract great hires</h1>
                <a className='text-md text-red-400 ' href="">RECRUITMENT SOLUTIONS</a>
            </div>
            <div className=' mt-4 h-28 w-[200%] md:w-72  p-2 rounded-md shadow-xl' >
                <h1 className='text-2xl mb-4'>Search for top talent</h1>
                <a className='text-md text-red-400 ' href="">CANDIDATE SEARCH</a>
            </div>
            <div className=' mt-4 full w-[200%] md:w-72 h-28  p-2 rounded-md shadow-xl' >
                <h1 className='text-2xl mb-4'>Future proof your workforce</h1>
                <a className='text-md text-red-400 ' href="">CAREER MOBILITY SOLUTIONS</a>
            </div>
            <div className=' mt-4 h-full w-[200%] md:w-72  h-28 p-2 rounded-md shadow-xl' >
                <h1 className='text-2xl mb-4'>Develop your leadership team</h1>
                <a className='text-md text-red-400 ' href="">LEADERSHIP DEVELOPMENT</a>
            </div>
            <div className=' mt-4  w-[200%] md:w-72 h-28  p-2 rounded-md shadow-xl' >
                <h1 className='text-2xl mb-4'>Empower transitioning talent</h1>
                <a className='text-md text-red-400 ' href="">EMPATHETIC OUTPLACEMENT</a>
            </div>
      </div>
    </div>
  )
}

export default Partner
