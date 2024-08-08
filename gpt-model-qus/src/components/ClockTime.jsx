import { useState,useEffect } from 'react'

function ClockTime() {
    const [time,setTime] = useState(new Date().toLocaleTimeString());
   
    useEffect(() => {
      const interTime = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      },1000);
      return () => clearInterval(interTime)
    },[]);

  return (
    <div>
      <h2>Current time:{time}</h2>
    </div>
  )
}

export default ClockTime

