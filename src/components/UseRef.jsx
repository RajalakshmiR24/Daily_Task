import React, { useRef, useState } from 'react'

function UseRef() {
    const [counter,setCounter]=useState(0);

    const counterRef = useRef(0);
    
    const handleClick=()=>{
        setCounter(counter+1);
    }
    const handleRefClick=()=>{
        counterRef.current++
    }

    console.log("rendered")
  return (
    <div>
        <p>{`the counetr is:${counter}`} </p>
        <p>{`the counetr is:${counterRef.current}`} </p>
        <button onClick={handleClick}>increment</button>
        <button onClick={handleRefClick} >RefClick</button>
    </div>
  )
}

export default UseRef;