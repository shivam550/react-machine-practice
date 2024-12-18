import React, { useState } from 'react'
import { items } from '../data'

const Tab = () => {
   const [clickbutton, setClickbutton] =useState('')

    
   
    console.log(items);

    
    const handelClick = (buttonname)=>{
        setClickbutton(buttonname)

     
        // const result = items.filter((f)=>f.category.toLowerCase().includes(`${buttonname}`))
        // console.log(result)
    }
     
    return (



        <>
         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
           <button style={{margin:'1rem',border:'1px solid red'}} onClick={()=>{handelClick('bags')}} >Bags</button>
           <button style={{margin:'1rem',border:'1px solid red'}} onClick={()=>{handelClick('watches')}} >Watches</button>
           <button style={{margin:'1rem',border:'1px solid red'}} onClick={()=>{handelClick('sports')}}>Sports</button>
           <button style={{margin:'1rem',border:'1px solid red'}} onClick={()=>{handelClick('sunglasses')}}>Sunglasses</button>
         </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {
                    items
                    .filter((f)=>f.category.toLowerCase().includes(clickbutton))
                    .map((item, index) => (
                        <div key={index} style={{ width: '170px', margin: '1rem', padding: '0.4rem', backgroundColor: 'white', color: 'black' }}>
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Tab