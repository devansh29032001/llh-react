import React from 'react'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login/Login'
import Jobsearch from './components/Jobs/Jobsearch'
import Jobdetails from './components/Jobs/Jobdetails'
import Candidates from './components/Candidates'
const App = () => {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/search' element={<Jobsearch/>}/>
        <Route path='/search/:id' element={<Jobdetails/>}/>
        <Route path='/find' element={<Candidates/>}/>
      </Routes>
      
      
   </div>
   
  )
}

export default App
