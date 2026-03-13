import React from 'react'

export default function MainImg({title, desc}) {
  return (
    <div className="mainImg">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}
