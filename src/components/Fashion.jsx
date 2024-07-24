import React, {useState,useEffect} from 'react'
import "/src/Fashion.css"
import { FaRegCirclePlay } from "react-icons/fa6";
let arr = []

const Fashion = (props) => {
    const [page,setPage] = useState(0)



  
  function handleCreate(elem){
    console.log(elem)
    arr = []
    for(let i in elem){
      arr.push(elem[i])
    }
  }
  
  handleCreate(props?.fashion)

  return (
    <div className='fashion-items'>
    <div className='fashion-page'>

    {arr.map((elem,idx)=>{
            return <div key={elem.id} className="fashion-page">
                <div className="video">
                    <img src={elem.img} alt="" />    
                    <FaRegCirclePlay />
                </div>
            <span>{elem.span}</span>
                <div className="fashion-text">
                    <h1>{elem.h1}</h1>
                    <p>{elem.p}</p>
                    <button>Read more</button>
                </div>
        </div>
        })}

    </div>
        <div className='page'>
          <ul>
            {/* {dataFashion.map((elem,idx)=>{
              return <li key={idx} onClick={()=>setPage(idx)}>{idx+1}</li>
            })} */}
          </ul>
        </div>
    </div>
  )
}

export default Fashion