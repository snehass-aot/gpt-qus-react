import React from 'react'
import Button from './Button'

function Greeting({name}) {
  function click(){
    alert("YoU ClIcKeD Me.......!😮")
  }
  return (
    <div>
      <h1>Hello, {name}</h1>
      <Button label='clickMe' style={{backgroundColor:"blue",color:"white",borderRadius:'10px',padding:"10px",border:"none",width:'200px'}} onClick={click}/>
    </div>
  )
}

export default Greeting
