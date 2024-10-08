import React from 'react'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
   </div>
   
  )
}

export default App
