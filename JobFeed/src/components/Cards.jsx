
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Cards = () => {
    const [userData, setUserData] = useState([]);
    const [showCard , setShowCard] = useState(4);
    const [loading ,setLoading] = useState(false)


    useEffect(() => {
        fetchDataApi()
    }, [showCard])


    const fetchDataApi = async () => {
        setLoading(true)
        const response = await fetch(`https://randomuser.me/api/?results=${showCard}`);
        const data = await response.json();
        // console.log(data.results)
      
        setUserData(data.results);
        setLoading(false)
    }
  
    const handelMore = () =>{
     setShowCard((prevCard)=> prevCard + 5);
    }

    return (
        <>
            <div style={{ width: '100%', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {
                  loading ? (<h1>Loading User Profile.....</h1>) :  (

                    userData.map((infos) => (
                        <div key={infos.cell} style={{ width: '250px', height: 'auto', border: '1px solid red', margin: '1rem', padding:'0.5rem' }}>
                            <img src={infos.picture.large} alt={infos.name.first} />
                            <p>{infos.email}</p>
                            <p>{infos.name.title + " " + infos.name.first}</p>
                            <p>{infos.phone}</p>
                            <p>{infos.location.country}</p>
                        </div>
                    ))
                  )
                }
            </div>
            <div style={{textAlign:'center'}}>
                <button onClick={handelMore}>Load More</button>
            </div>
        </>
    )
}

export default Cards