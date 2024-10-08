import React from 'react'

const About1 = () => {
  return (
    <div className='mt-10 flex items-center'>
      <div className='w-[50%]'>
        <h1 className='text-5xl'>About Us</h1>
        <p className='text-xl mt-4'>At LHH, we're passionate about guiding our clients, candidates, and colleagues to adapt and flourish in an ever-evolving workplace landscape.
        Our 8,000 colleagues serve 15,000 clients across 66 countries, impacting millions of lives each year through recruitment, outplacement and mobility, and leadership development.</p>
      </div>
      <div className='w-[50%] h-[70vh]'>
        <img  className=" h-full" src="https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/9-page-new-hero-180723.png?h=358&w=552&rev=86fb6d74f4554391958fcae074a8bc36&hash=479FCF25106C9DA983B9F8AFB6B0510C" alt="" />
      </div>
    </div>
  )
}

export default About1
