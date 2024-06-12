import React, { useEffect, useRef, useState } from 'react'

const UseRef2 = () => {
    const [name,setName]=useState();
    const inputRef= useRef("");

    const handleChage=(e)=>{
        setName(e.target.value);
        if(inputRef.current){
            console.log("Dom type",inputRef.current.type)
        }
    }

    useEffect(()=>{
        inputRef.current= name;
    },[name])
    
  return (
    <div>
        <input
        type='text'
        value={name}
        name="name"
        onChange={handleChage}
        ref={inputRef}
        />
       <h1>Currnent Value{name}</h1>
       <h1>Previous Value{inputRef.current}</h1>
    </div>
  )
}

export default UseRef2