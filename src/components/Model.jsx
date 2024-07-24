import React, { useState } from 'react'
import "/src/Model.css"
import { Link } from 'react-router-dom';
import { VscEyeClosed } from "react-icons/vsc";

let arr = []


const Model = (props) => {
  const [page, setPage] = useState(0)
  const [openClose,setOpenClose] = useState(false)
  const [info,setInfo] = useState()



function handleCreate(elem){
  arr = []
  for(let i in elem){
    arr.push(elem[i])
  }
}

handleCreate(props?.artist)

function handleClick(){
    setOpenClose(!openClose)
}

  return (
    <>
    {(openClose ? 
       <div className="info">
    <VscEyeClosed onClick={()=>handleClick()} />
      <img src={info.img} alt="" />
      <div className="info-text">
      <h3>{info.name}</h3>
      <p>{info.p}</p>
      </div>
      <Link to="/tickets" ><button onClick={()=>{
        localStorage.setItem("ticketUser",JSON.stringify({
          name : info.name,
          img: info.img,
          p: info.p
        }))
      }}>By Ticket</button></Link>
    </div>
      : "")}
   
    <div className='model-items'>
    <div className='model'>
      {arr.map((elem,idx)=>{
        return  <div onClick={()=>{
          handleClick()
          setInfo(elem.textUser)
          }} key={elem.id} style={{backgroundImage: `url(${elem.img})`}} className='model-item'>
          <div className="text-model">
            <h3>{elem.h3}</h3>
            <h1>{elem.h1}</h1>
          </div>
        </div>
      })}
    </div>
      <div className='page'>
        
          {/* <ul>
            {dataModel.map((elem,idx)=>{
              return <li key={idx} onClick={()=>setPage(idx)}>{idx+1}</li>
            })}
          </ul> */}
        </div>
          </div>
    </>
  )
}

export default Model