import React from 'react'

function TodoList({title,desc}) {
  return (
    <li>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </li>
  )
}

export default TodoList
