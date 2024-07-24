import React, { useEffect, useState } from 'react'
import HeaderSite from './components/HeaderSite'
import InfoPage from './components/InfoPage'
import { Routes, Route } from 'react-router-dom'
import Fashion from './components/Fashion'
import Model from './components/Model'
import Travel from './components/Travel'
import About from './components/About'
import Contact from './components/Contact'
import Ticket from './components/Ticket'
import SignIN from './components/SignIn'
import Login from './components/Login'
import Portfolio from './components/Portfolio'
import Card from './components/Card'
import { user } from './dataUser/user'



const App = () => {
  const [data, setData] = useState()
  const [login,setLogin] = useState()

  useEffect(()=>{
    fetch("src/script.json").then(res=>res.json()).then(res=>setData(res))
    setLogin(JSON.parse(localStorage.getItem("login")))
    
    return ()=>{
      
        
          user.push(JSON.parse(localStorage.getItem("userSignin")))
          user.push(JSON.parse(localStorage.getItem("login")))
          user.push(JSON.parse(localStorage.getItem("ticketUser")))
          user.push(JSON.parse(localStorage.getItem("card")))
          user.push(JSON.parse(localStorage.getItem("change-portfolio")))
       
      
    }
  },[localStorage.getItem("card"),localStorage.getItem("login"),localStorage.getItem("userSignin"),localStorage.getItem("ticketUser"),localStorage.getItem("change-portfolio")])

  return (

    <Routes>
    <Route path='/' element={
      <main>
    <HeaderSite/>
    <InfoPage data={data?.data} />
    </main>
    }/>
    {(login == true?
     <Route path='/portfolio' element={
      <main>
      <Portfolio/>
      </main>
    }/>
    :
    <Route path='/login' element={
      <main>
    <HeaderSite/>
    <Login/>
    </main>
    }/>
)}

 

    {(localStorage.getItem("userSignin")? "" : <Route path='/signin' element={
      <main>
    <HeaderSite/>
        <SignIN/>
    </main>
    }/>)}
    
    <Route path='/home' element={
      <main>
    <HeaderSite/>
    <InfoPage data={data?.data} />
    </main>
    }/>
    <Route path='/fashion' element={
      <main>
    <HeaderSite/>
    <Fashion fashion = {data?.dataFashion}/>
    </main>
    }/>
    <Route path='/artist' element={
      <main>
    <HeaderSite/>
    <Model artist = {data?.artists}/>
    </main>
    }/>
    <Route path='/travel' element={
      <main>
    <HeaderSite/>
    <Travel travel = {data?.travel}/>
    </main>
    }/>
    <Route path='/about' element={
      <main>
    <HeaderSite/>
    <About/>
    </main>
    }/>
    <Route path='/contact' element={
      <main>
    <HeaderSite/>
    <Contact/>
    </main>
    }/>
    <Route path = "/tickets"
    element = {
      <main>
    <HeaderSite/>
    <Ticket/>
    </main>
    }
    />

    <Route path='/card' element={<Card/>}/>
      
    </Routes>
  )
}

export default App