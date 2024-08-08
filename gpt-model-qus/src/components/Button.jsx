import React from 'react'

function Button({label,onClick,style}) {
  return (
    <div>
      <button style={style} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
