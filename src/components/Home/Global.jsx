import React from 'react'

const Global = () => {
  return (
    <div className=' w-[200%] md:w-full h-screen  px-32 flex flex-col md:flex-row'>
        <div className=' part1 md:w-1/2 h-[70%] px-2  py-4 '>
            <h1 className=' text-5xl md:text-4xl font-semibold mb-4 md:mb-0'>Global Workforce 2.0: How to build a Winning Talent Strategy for the Future</h1>
            <p className='text-4xl  md:text-2xl text-zinc-600 mb-10'>Get Ready for Next with the latest workplace trends. Learn how to attract and, most importantly, retain top talent.</p>
            <a className='text-2md px-4 py-3 bg-[#F29B59] rounded-lg  ' href="">
                DOWNLOAD NOW
            </a>
        </div>

        <div className=' mt-20 md:mt-0 md:w-1/2 h-[70%] '>
            <img className='h-full object-cover rounded-md' src="https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/home-banner-imagetobeuse.jpg?h=839&w=1259&rev=2bb3a9d9276c42e2a89c20897e139674&hash=216EF3754DCC1F08250F216094D5D069" alt="" />
        </div>

    </div>
  )
}

export default Global
