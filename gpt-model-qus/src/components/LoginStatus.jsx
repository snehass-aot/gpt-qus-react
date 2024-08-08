import React from 'react'

function LoginStatus({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn ? <h1>Logged in</h1> : <h1>Logged Out</h1>}
    </div>
  )
}

export default LoginStatus


