import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'
const Login = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(true)

  return (
    
   <>
   <Navbar/>
        <div className='container h-screen w-full  flex justify-center  items-center ' style={{
            background:`url("https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D),
            background-size: 'cover',
            
            `
        }}>
                <div className='form-container h-auto w-[80%] bg-zinc-100 md:h-auto md:w-[50%] lg:h-auto lg:w-[30%] px-10 py-3 flex flex-col gap-5 rounded-md mt-32'>
                    <div className='form-toggle flex justify-evenly mt-2 '>
                            <button onClick={()=>setIsLoggedIn(true)} className={isLoggedIn?`px-7 py-2 bg-purple-900 text-2xl rounded-md text-white`:`px-7 py-2 bg-white text-2xl rounded-md`}>Login</button>
                            <button className={!isLoggedIn?`px-6 py-3 bg-purple-900 text-2xl rounded-md text-white`:`px-6 py-3 bg-white text-2xl rounded-md`}onClick={()=>setIsLoggedIn(false)}>Signup</button>
                    </div>

                {isLoggedIn ?
                    <form action="">
                     <div className='flex flex-col gap-5'>
                          <input type="email" placeholder='email' name="email" className='p-2 text-xl w-full rounded-md' />
                         <input type="password" placeholder='password' name="password" className='p-2 text-xl w-full rounded-md' />

                          <button className='bg-purple-800 px-1 py-2 rounded-lg w-[40%] self-center text-lg text-white '>Login</button>

                         <a className='text-xl mb-4' onClick={()=>setIsLoggedIn(false)} href='#'>Not a member? Signup!</a>
                     </div>
                    </form> :
                    
                    <form action="">
                     <div className='flex flex-col gap-5'>
                     <input type="text" placeholder='Full Name' name="email" className='p-2 text-xl w-full rounded-md' />
                         <input type="email" placeholder='Email' name="email" className='p-2 text-xl w-full rounded-md' />
                         <input type="Password" placeholder='password' name="password" className='p-2 text-xl w-full rounded-md' />
                    
                        <button className='bg-purple-800 px-1 py-2 rounded-lg w-[40%] self-center text-xl text-white '>Signup</button>

                        <a onClick={()=>setIsLoggedIn(true)} className='text-xl mb-4' href="#">Already a member? Login!</a>
                    </div>
                    </form>}


                        
                </div>
        </div>
   </>
  )
}

export default Login
