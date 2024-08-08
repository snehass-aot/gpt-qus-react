import React from 'react'
import { useState } from 'react'

function NameForm() {
    const [name,setName] = useState("");
    function handleChange(event){
        setName(event.target.value);
    }
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder='Enter your name' />
      <div><h2>{name}</h2></div>
   </div>
  )
}

export default NameForm


