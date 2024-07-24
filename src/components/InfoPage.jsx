import React, { useEffect, useState } from 'react'
import "/src/InfoPage.css"

let arr = []

const InfoPage = (props) => {
  const [page,setPage] = useState(0)


function handleCreate(elem){
  arr = []
  for(let i in elem){
    arr.push(elem[i])
  }
}


handleCreate(props?.data)
  return (
    <div className='info-items'>
    <div className='info-page'>

        
        {arr.map((elem,idx)=>{
            return <div key={elem.id} className="item-page">
                <div className="img">
                    <img src={elem.img} alt="" />    
                </div>
            <span>{elem.span}</span>
            <h1>{elem.h1}</h1>
            <p>{elem.p}</p>
        </div>
        })}

    </div>
        <div className='page'>
          <ul>
            {/* {.map((elem,idx)=>{
              return <li key={idx} onClick={()=>setPage(idx)}>{idx+1}</li>
            })} */}
          </ul>
        </div>
    </div>
  )
}

export default InfoPage