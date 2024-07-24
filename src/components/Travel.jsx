import React, { useState, useEffect } from 'react'
import "/src/Travel.css"
let arr = []
const Travel = (props) => {
    const [page,setPage] = useState(0)

  
  function handleCreate(elem){
    arr = []
    for(let i in elem){
      arr.push(elem[i])
    }
  }
  
  handleCreate(props?.travel)
  return (
    <div className='travel-items'>
        <div className="travel">
            {arr.map((elem,idx)=>{
                return <div key={elem.id} className="travel-item">
                    <div className="image-travel">
                        <img src={elem.img} alt="" />
                    </div>
                    <div className="text-travel">
                        <h1>{elem.h1}</h1>
                        <span>{elem.span}</span>
                        <p>{elem.p}</p>
                    </div>
                </div>
            })}
        </div>

        <div className='page'>
          <ul>
            {/* {dataTravel.map((elem,idx)=>{
              return <li key={idx} onClick={()=>setPage(idx)}>{idx+1}</li>
            })} */}
          </ul>
        </div>
             </div>
  )
}

export default Travel