import React from 'react'

const data=[{
    title:"Evolve with purpose",
    description:"To meet changing client and candidate needs"
},{
    title:"Learn every day",
    description:"To stay actively curious and openminded"
},{
    title:"Reach high",
    description:"To strive for excellence in everything we do"
},{
    title:"Own it",
    description:"Empowered to make decisions and be accountable for the results"
},{
    title:"Win together",
    description:"Build relationships through trust, transparency, and collaboration"
},{
    title:"Make it fun",
    description:"We’re energized, inspired and motivated by our colleagues"
}]
const About3 = () => {
  return (
    <div className='mt-28 w-[400%] md:w-full '>
      <h1 className='text-4xl font-semibold'>Our core values</h1>
      <p className='text-xl text-zinc-600 md:w-[70%] mt-8'>At LHH, our core values are at the heart of everything we do. They shape our culture and drive our commitment to delivering exceptional talent services.</p>
      <div className='core-container h-full p-2 flex flex-col md:flex-wrap w-full  md:justify-between md:flex-row '>

        {data.map((item)=>{
            return <div className="md:w-[25vw] mb-10  md:h-[35vh]  shadow-xl p-3 rounded-md">
                <h1 className=' text-3xl md:text-xl mb-4 mt-2'>{item.title}</h1>
                <p className='text-xl md:text-lg text-zinc-700'>{item.description}</p>
            </div>
        })}
            
      </div>
    </div>
  )
}

export default About3
