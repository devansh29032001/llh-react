import React from 'react'

const About4 = () => {
  return (
    <div className=' mt-40 md:mt-10 w-[400%] md:w-full'>
      <h1 className='text-5xl md:text-4xl '>Meet our team</h1>
      <p className='md:w-[70%]  text-3xl md:text-2xl'>Don't just take our word for it — hear it from our incredible team members. Learn about their personal journeys, professional growth, and the supportive and inclusive environment they thrive in at LHH.</p>
      <div className='flex flex-col md:flex-row mt-10 justify-between gap-20 md:gap-0 '>
        <div >
            <h1 className='text-3xl md:text-xl font-semibold md:w-[90%]'>"LHH has embraced me as a leader for Veterans and the LGBTQ+ community while also affording me the opportunity to explore different career paths including moving into a global role."</h1>
            <div className='flex gap-10 mt-4'>
            <img className='h-[100px] md:h-full' src="https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/marcusmaschmedt-photo_48x48.png?h=48&w=48&rev=5c1dce3de2ca4644be64c0bf4235e5b2&hash=380049F038DBF50FA8C6FE907887FD82" alt="" />
            <div className=''>
                <h1 className='text-2xl md:text-lg'>Marcus Maschmedt,</h1>
                <p className='text-xl md:text-sm text-zinc-600'>Global Social Engagement Manager</p>
            </div>
            </div>
        </div>
        <div >
            <h1 className='text-3xl md:text-xl font-semibold md:w-[90%]'>"Being a part of the LHH team has allowed me to have a positive impact on our community, the organizations and professionals that we support. I value the opportunity to help employees transition into their next great role."</h1>
            <div className='flex gap-10 mt-4'>
            <img className='h-[100px] md:h-full' src="https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/laurence-martin.png?h=48&w=48&rev=6032461bc3b74fe1ab5e03c58cccc2e8&hash=AEFC759AA9D0D8CDBEFF609C716DBE7F" alt="" />
            <div className=''>
                <h1 className='text-lg'>Laurence Martin,</h1>
                <p className='w-[60%] text-zinc-600'>Head of Delivery Operations - Career Transition and Mobility</p>
            </div>
            </div>
            
        </div>


      </div>
    </div>
  )
}

export default About4
