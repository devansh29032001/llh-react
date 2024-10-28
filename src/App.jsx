import React,{ useEffect, useState }   from 'react'
import Home from './components/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login/Login'
import Jobsearch from './components/Jobs/Jobsearch'
import Jobdetails from './components/Jobs/Jobdetails'
import Candidates from './components/Candidates'
import Dashboard from './Dashboard/Dashboard'
import Signup from './components/Login/Signup'
import Navbar from './components/Home/Navbar'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {

  const [userLoggedIn,setUserLoggedIn]=useState(!!localStorage.getItem('userInfo'))
  const [userInfo, setUserInfo]=useState(JSON.parse(localStorage.getItem('userInfo')))
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('userInfo')
    localStorage.setItem('userLoggedIn', 'false');
    setUserLoggedIn(false)
    navigate('/login')
  }
  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },[])
  return (
   <div>
      <Navbar userLoggedIn={userLoggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login setUserLoggedIn={setUserLoggedIn} />}/>
        <Route path="/signup" element={<Signup/>} />

        <Route path='/search' element={<Jobsearch/>}>
           <Route path=':id' element={<Jobdetails/>}/>
        </Route>
        <Route path='/find' element={<Candidates/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      
      
   </div>
   
  )
}

export default App
