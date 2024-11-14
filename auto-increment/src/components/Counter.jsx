import { useEffect, useState } from "react"





const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [paused,setPaused] = useState(false);

  useEffect(()=>{
   const internal = setInterval(()=>{

    if(!paused){
      setCounter(prevCounter => prevCounter +1)
    }
   },1000);

    return() =>{
      clearInterval(internal)
    }
  })
 

  const handleStop = () =>{
     setPaused(!paused)
  }

  return (
    <div>
      <div style={{fontSize:"5rem"}}>{counter}</div>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Counter