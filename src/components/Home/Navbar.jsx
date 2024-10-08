import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(true); // Track visibility of navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll positio

   
    const toggleNavbar=()=>{
        setNavbarOpen(!navbarOpen);
    }



    const handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > lastScrollY) {
          // If scrolling down, hide the navbar
          setShowNavbar(false);
        } else {
          // If scrolling up, show the navbar
          setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
    };


        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              // Cleanup the event listener on component unmount
              window.removeEventListener('scroll', handleScroll);
            };
          }, [lastScrollY]); 
    
  return (
    <>
       
       <div className={`header ${showNavbar ? 'flex' : 'hidden'} transition-ease duration-300 fixed z-[999] top-0 bg-white w-full`} >
                <div className='nav h-32 w-full  px-8 py-6'>
                    <div className='hidden nav1 px-20  md:flex gap-4 justify-end'>
                        <Link className='text-md' to='/about'>About Us</Link>
                        <Link className='text-md' to='/contact'>Contact Us</Link>
                    </div>
                    <div className='hidden nav2   md:flex items-center justify-evenly'>
                        <Link className='text-5xl font-bold text-[#4F185A]' to='/about'>LHH</Link>
                        <Link className='text-lg' to='/search'>Search Jobs</Link>
                        <Link className='text-lg' to='/find'>Find Great Talent</Link>
                        <Link className='text-lg' to='/join'>Join Us</Link>
                        <Link className='text-lg' to='/solution'>Solutions</Link>
                        <Link className='text-lg' to='/about'>Our Expertise</Link>

                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleNavbar}>OPEN</button>
                    </div>
                </div>
           </div>
    </>
  )
}

export default Navbar
