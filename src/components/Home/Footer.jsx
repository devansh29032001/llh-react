import React from 'react'

const Footer = () => {
  return (
    <div className='md:w-full w-[200%] mt-64 md:mt-0  h-full bg-[#290C2F] px-24 py-8'>
        <h1 className='text-white text-5xl md:text-4xl  font-semibold'>Are you Ready for Next?</h1>
        <p className='text-white mt-5 text-2xl md:text-xl md:w-1/2 '>
        LHH helps individuals, teams, and organizations find and prepare for what's next in the world of work. We support clients needs throughout the talent journey, from recruitment to career transitions and leadership development. We empower organizations to expand their capabilities and workers to build brighter futures.
        </p>

        <div className='flex mt-10 justify-between flex-col gap-10 md:flex-row'>
            <div className='h-36  w-[50%] md:w-[32%]  p-3'>
                <h1 className=' text-white  text-3xl md:text-2xl'>Find a job</h1>
                <p className=' mb-2 text-lg text-white'>We can help you find your next career opportunity, browse thousands of jobs.</p>
                <a  className="text-pink-500" href="">FIND A JOB</a>
            </div>
            <div className='h-36  w-[50%] md:w-[32%]  p-3'>
                <h1 className=' text-white text-3xl md:text-2xl'>Find a job</h1>
                <p className=' mb-2 text-lg text-white'>We can help you find your next career opportunity, browse thousands of jobs.</p>
                <a  className="text-pink-500" href="">FIND A JOB</a>
            </div>
            <div className='h-36  w-[50%] md:w-[32%]  p-3'>
                <h1 className=' text-white text-3xl md:text-2xl'>Find a job</h1>
                <p className=' mb-2 text-lg text-white'>We can help you find your next career opportunity, browse thousands of jobs.</p>
                <a  className="text-pink-500" href="">FIND A JOB</a>
            </div>

        </div>

        <div className='flex mt-20 md:justify-between flex-col md:flex-row gap-10 md:gap-0 '>
            <div className='flex flex-col'>
                <a className='text-white text-4xl font-semibold ' href="">LHH</a>
                <p className='text-white mt-3'>Download the app</p>

                <div className='flex  gap-2 mt-4'>
                    <img className='h-8' src="https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/project/app-store.png?h=43&w=129&rev=ca68eb78ce984e74a88e6e083f6a1b7e&hash=76033E4BE489CFE9AFF1C1CA3C3ADB38" alt="" />
                    <img  className="h-8" src="https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/project/google-play.png?h=43&w=149&rev=49735265b99f4715adf2cef06ce2ec61&hash=3BEBA42B7A24062A9F5497713E30EA6B" alt="" />
                </div>

            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-white text-2xl font-semibold'>Individuals</h1>
               
                <a className='text-white' href="">REGISTER FOR CAREER SUPPORT</a>
                <a className='text-white' href="">JOIN OUR CANDIDATE DATABASE</a>
                <a className='text-white' href="">MY INFO (ASSOCIATE PORTAL)</a>
                <a className='text-white' href="">SALARY CALCULATOR</a>
                <a className='text-white' href="">CONTINUE YOUR OUTPLACEMENT
                </a>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-white text-2xl font-semibold'>Organisations</h1>
                
               <a  className=" text-white" href="">FIND GREAT TALENT</a>
               <a  className=" text-white" href="">EMPOWER TRANSITIONING TALENT</a>
               <a  className=" text-white" href="">MOBILIZE YOUR WORKFORCE</a>
               <a  className=" text-white" href="">
               DEVELOP YOUR LEADERS</a>
               <a  className=" text-white" href="">CLIENT RESOURCE CENTER</a>
               
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-white text-2xl font-semibold'>Company</h1>
                
                <a className='text-white' href="">CONTACT US</a>
                <a className='text-white' href="">PRESS ROOM</a>
                <a className='text-white' href="">CAREERS</a>
                <a className='text-white' href="">ABOUT US</a>
                <a className='text-white' href="">OUR LOCATIONS</a>
                <a className='text-white' href="">INVESTOR RELATIONS</a>
                <a className='text-white' href="">THE ADECCO GROUP</a>
            </div>
        </div>

        <div className='mt-20 mb-10'>
            <hr />
        </div>

        <div className='flex text-white md:items-center md:justify-between flex-col md:flex-row gap-10  '>
            <h1 className=' text-2xl text-zinc-500'>LHH 2024</h1>

            <a className=' text-2xl md:text-sm' href="">Cookie Policy</a>
            <a className=' text-2xl md:text-sm' href="">Diversity and Inclusion</a>
            <a className=' text-2xl md:text-sm' href="">EEO Statement and Legal Notices</a>
            <a className=' text-2xl md:text-sm' href="">Privacy Policy</a>
            <a className=' text-2xl md:text-sm' href="">Terms and Conditions</a>
            <a className=' text-2xl md:text-sm' href="">Your Privacy Choices</a>
            <div className='flex gap-4'>
            <i className=" text-4xl md:text-3xl  ri-linkedin-box-fill"></i>
            <i class=" text-4xl md:text-3xl ri-twitter-fill"></i>
            </div>
        </div>


    </div>
  )
}

export default Footer
