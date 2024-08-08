import React from 'react'
import { useRef,useEffect } from 'react';

function FocusInput() {
    const inputRef = useRef(null);
    useEffect(() => {
        // Focus the input field when the component mounts
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);
    
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Focus on me!" />
    </div>
  )
}

export default FocusInput
