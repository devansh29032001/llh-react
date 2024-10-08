import React from 'react'
import Navbar from './Home/Navbar'
import Photo from './Home/Photo'
import Dream from './Home/Dream'
import Talent from './Home/Talent'
import Work from './Home/Work'
import Partner from './Home/Partner'
import Global from './Home/Global'
import Footer from './Home/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Photo/>
      <Dream/>
      <Talent/>
      <Work/>
      <Partner/>
      <Global/>
      <Footer/>
    </div>
  )
}

export default Home
