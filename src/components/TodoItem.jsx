import React from 'react'

export default function TodoItem({todo, onRemove}) {
  return (
    <li className='todo-item'>
      <span>{todo.text}</span>
      <button onClick={()=>onRemove(todo.id)}>삭제</button>
    </li>
  )
}
