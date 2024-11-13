import { useState } from "react";
import  {accordionData} from "../data"



const Faq = () => {
    const [open ,setOpen] =useState(null)

    const handleClick = (id) =>{
        setOpen((prevId)=> prevId === id ? null : id )
        //  setOpen(!open)
       
    } 
  return (
    <div className="" style={{width:"800px", height:"auto" ,backgroundColor:"black"}} >
       {
        accordionData.map((data)=>(
            <div key={data.id} style={{color:"white",margin:"1rem" ,padding:"1rem"}}>
             <div style={{display:"flex", justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid white"}}>
                <p>{data.title}</p> 
                <div><button style={{width:"30px",fontSize:"1rem"}} onClick={()=>{handleClick(data.id)}}>{open == data.id ? "-" : "+"}</button></div>
                </div>

                <div>
                   {
                     open == data.id && <p>{data.content}</p>
                   }
                </div>
             
            </div>
        ))
       }
    </div>
  )
}

export default Faq