import React from 'react'

function ButtonClicker() {
    
  function buttonHandler(){
        alert("Button clicked!");
    }

  return (
    <div>
      <button onClick={buttonHandler}>Click me</button>
    </div>
  )
}

export default ButtonClicker
