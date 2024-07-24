import { useEffect, useState } from "react"
import "/src/Ticket.css"
import { GrCompliance } from "react-icons/gr";
import { user } from "../dataUser/user";


let data;
const Ticket = () => {
    const [obj,setObj] = useState(JSON.parse(localStorage.getItem("ticketUser")))
    const [trueFalse,setTrueFalse] = useState(false)
    const [login,setLogin] = useState(JSON.parse(localStorage.getItem("login")))
    const [card,setCard] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem("card")){
            if(localStorage.getItem("card").length == 93){
            setCard(true)
        }
        }
        
    },[])

    function handleClick(){
        if(login == true){
            if(card == false){
                location.pathname = "/card"
            }
            else{
                setTimeout(()=>{
                    setTrueFalse(true)
                    console.log(user)
            },1000)
            setTimeout(()=>{
                setTrueFalse(false)
            },5000)
            data = new Date()
            user.push({data: data, ticket: JSON.parse(localStorage.getItem("card"))})
            console.log(user)
        }
        }
        else{
            location.pathname = "/login"
        }
    }

    return (
        <>
        <div className="tickets">
            <img src={obj.img} alt="" />
            <h1>{obj.name}</h1>
            <p>{obj.p}</p>
            <button onClick={()=>handleClick()}>By Ticket</button>
        </div>
        {(trueFalse?  <div className="true-false">
            <div className="result">
            <h1>confirmed</h1>
            <GrCompliance />
            </div>
        </div>: "")}
       
        </>
  )
}

export default Ticket