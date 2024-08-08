import React, { useState } from 'react'

function LimitedCounter() {
    const [count, setCount] = useState(0);
    const minValue = 0;
    const maxValue = 10;

    function increment(){
        if(count < maxValue){
            setCount(i => i+1);
        }
    }
  
    function decrement(){
        if(count > minValue){
            setCount(i => i-1);
        }
    }

    return (
        <div>
            <button onClick={increment} disabled={count >= maxValue}>Increment</button>
            <button onClick={decrement} disabled={count <= minValue}>Decrement</button>
        </div>
    )
}

export default LimitedCounter
