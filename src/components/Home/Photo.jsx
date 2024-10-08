import React from 'react'

const Photo = () => {
  return (
    <>
        <div className='relative   '>
            <div  className=' mt-32 hidden  md:flex w-full h-[55vh] ' style={{background:`url('https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/homepage-hero-banner/homepage-banner-2.png?h=300&amp;w=1400&amp;rev=1fa9773df14943a69862d0c89011bbdd&amp;hash=C012F5A455D0E8673F333D676727DC71')`,backgroundSize:'cover',backgroundPosition:'center'}}>
            </div>
            <h1 className='absolute md:text-5xl md:font-semibold md:w-[40%] md:px-5  md:left-[10%] top-[10%]'>We Help You Prepare and Thrive in the Future of Work</h1> 
        </div>
    </>
  )
}

export default Photo
