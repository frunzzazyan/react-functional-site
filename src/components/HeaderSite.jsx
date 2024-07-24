import React, { useEffect, useState } from 'react'
import "/src/HeaderSite.css"
import { TfiAlignRight } from "react-icons/tfi";
import SimpleSlider from './SimpleSlider';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const HeaderSite = () => {
  const [navbar ,setNavbar] = useState(false)
  const [login,setLogin] = useState(JSON.parse(localStorage.getItem("login")))


  function handleClick(){
    setNavbar(!navbar)
  }
  return (
    <div className='home-header'>
        <header>
            <h1>logo</h1>
            <div className="menu"><TfiAlignRight onClick={()=>handleClick()} /></div>
        </header>
        <SimpleSlider/>
        <div className="home-header-text">
            <h3>MODEL</h3>
            <h1>Canadian Girl make your world go round</h1>
        </div>
        {navbar ? <nav>
          <IoMdClose onClick={()=>handleClick()} />
            <ul>
              <Link to='/home'><li onClick={()=>handleClick()}>Home</li></Link>
              {(login?
              <>
              <Link><li onClick={()=>{
                localStorage.setItem("login", false)
                setLogin(false)
                location.pathname = "/"
              }
            }>Log Out</li></Link>
              <Link to="/portfolio"><li>Portfolio</li></Link>
            </>
              : <Link to='/login'><li onClick={()=>handleClick()}>Login</li></Link>)}
              
              {(localStorage.getItem("userSignin")? "" :<Link to='/signin'><li onClick={()=>handleClick()}>Sign In</li></Link>)}
              <Link to='/fashion'><li onClick={()=>handleClick()}>Fashion</li></Link>
              <Link to='/artist'><li onClick={()=>handleClick()}>Artist</li></Link>
              <Link to='/travel'><li onClick={()=>handleClick()}>Travel</li></Link>
              <Link to='/about'><li onClick={()=>handleClick()}>About us</li></Link>
              <Link to='/contact'><li onClick={()=>handleClick()}>Contact</li></Link>
            </ul>
        </nav>:""}
      
    </div>
  )
}

export default HeaderSite