import React from 'react'
import { useState } from 'react'

function StyledComponent() {
    const [color, setColor] = useState("lightgreen");
    const changeColor = () => {
        setColor( prevColor => (prevColor==="lightgreen" ? "lightblue" : "lightgreen"));
    };

    return (
        <div>
            <div style={{backgroundColor:color,width:'100px',height:'100px'}}></div>
            <button onClick={changeColor}>Click me to change </button>
        </div>
    );
}

export default StyledComponent  

