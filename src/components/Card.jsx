import React, { useState } from 'react'
import "/src/Card.css"
import { Link } from 'react-router-dom'

const Card = () => {
  const [card,setCard] = useState(false)

let initialValues = {
    cartNumbers: "",
    cvc: "",
    month: "",
    year: "",
    fname : ""
}

function handleSubmit(val){
    if(val.cartNumbers.length == 16 && val.cvc.length && val.month <= 12 && val.year > 24 && val.year < 50){
      localStorage.setItem("card", JSON.stringify(val))
      setCard(true)
}
}


  return (

  <div className='cart'>
        <form className="cart-div">
            <div className="img">
            <img src="https://www.shareicon.net/data/2017/05/11/885937_visa_512x512.png" alt="" />
            </div>
        <input onChange={(e)=>initialValues.cartNumbers = e.target.value} type="number" placeholder='Card Numbers' name="cartNumbers" id='cartNumbers'/>
        <input onChange={(e)=>initialValues.cvc = e.target.value} type="number" placeholder='CVC' name="cvc" id='cvc' />
        <div className="data">
   
               <input placeholder='month' onChange={(e)=>initialValues.month = e.target.value} type="number" name='month' id="month"/>
            <span>/</span>
               <input placeholder='year' onChange={(e)=>initialValues.year = e.target.value} type="number"  name='year' id="year"/>

        </div>
            <input onChange={(e)=>initialValues.fname = e.target.value} className="name" name='fname' placeholder='NAME-LASTNAME'/>
           <Link to={(card? "/tickets" : "/card")}> <input onClick={()=>handleSubmit(initialValues)} type='submit'/></Link>
        </form>
        

    </div>
       
        
  )

}
export default Card