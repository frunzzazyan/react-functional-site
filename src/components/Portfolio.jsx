import React, { useEffect, useState } from 'react'
import "/src/Portfolio.css"
import { user } from '../dataUser/user'
import { CiSettings } from "react-icons/ci";
import { FaPenToSquare } from "react-icons/fa6";
import { VscEyeClosed } from "react-icons/vsc";
import { FaPenNib } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
let obj = {
    fnamelname:JSON.parse(localStorage.getItem("change-portfolio"))?.fnamelname,
    country:JSON.parse(localStorage.getItem("change-portfolio"))?.country,
    city:JSON.parse(localStorage.getItem("change-portfolio"))?.city,
    age:JSON.parse(localStorage.getItem("change-portfolio"))?.age,
    email:JSON.parse(localStorage.getItem("change-portfolio"))?.email
}


const Portfolio = () => {
    const [loading,setLoading] = useState(true)
    const [navbar,setNavbar] = useState(false)
    const [penPage,setPenPage] = useState(false)
    const [firstnameLastname, setFirstnameLastname] = useState()
    const [login,setLogin] = useState(JSON.parse(localStorage.getItem("login")))


    useEffect(()=>{
        user[0].userSignin = JSON.parse(localStorage.getItem("userSignin"))
        setTimeout(()=>{
            setLoading(false)
        },1000)
        console.log(obj)
       
    },[])

    function handlePen(){
        setPenPage(!penPage) 
    }
    function handleSubmit(val){
        localStorage.setItem("change-portfolio", JSON.stringify(val))
        setPenPage(!penPage)
        user.push(obj)
       
    }
    function handleClick(){
        setNavbar(!navbar)
      }



      return (
          <>
        {penPage? <div className="pen">
            <VscEyeClosed onClick={()=>handlePen()}/>
                <div className="pen-div">
                <FaPenNib />
                    <h1>CHANGES TO YOUR PAGE</h1>
                    <input onChange={(e)=>obj.fnamelname = e.target.value} type="text" name="fnamelname" placeholder='Firstname-Lastname' />
                    <input onChange={(e)=>obj.country = e.target.value} type="text" name="country" placeholder='Country' />
                    <input onChange={(e)=>obj.city = e.target.value} type="text" name="city" placeholder='City' />
                    <input onChange={(e)=>obj.age = e.target.value} type="text" name="age" placeholder='Age' />
                    <input onChange={(e)=>obj.email = e.target.value} type="text" name="email" placeholder='Email' />
                    <input onClick={()=>handleSubmit(obj)} type="submit" />
                </div>
        </div> : ""}
    <div className="portfolio-div">
    <header>
        <h1>logo</h1>
          <HiOutlineMenuAlt1 onClick={()=>setNavbar(!navbar)} />
        {(navbar? <ul className='scale-up-ver-top'
        ><Link to='/home'><li onClick={()=>handleClick()}>Home</li></Link>
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
              </ul> : "")}
    </header>
    <div className='portfolio'>
        {loading ? <h1>Loading...</h1> 
        : 
        <>
        <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rNuFRQJ0m9EkNrwaJtyxCSEfY7Rz35rC_g&s" alt="" />
            <h1>{(obj.fnamelname? obj.fnamelname : user[0].userSignin.login)}</h1>
            <div className="portfolio-icons">
            <CiSettings />
            <FaPenToSquare onClick={()=>handlePen()} />
            </div>
        </div>
          <div className="portfolio-info">
          <ul>
            <li>country - {(obj.country  ? <span> {obj.country} </span>:<span>not listed</span>)}</li>
            <li>city - {(obj.city  ? <span> {obj.city} </span>:<span>not listed</span>)}</li>
            <li>age - {(obj.age  ? <span> {obj.age} </span>:<span>not listed</span>)}</li>
            <li>email - {(obj.email  ? <span> {obj.email}</span> :<span>not listed</span>)}</li>
            
          </ul>
          </div>
        </>
        }
        
    </div>
        </div>
        </>
  )
}

export default Portfolio