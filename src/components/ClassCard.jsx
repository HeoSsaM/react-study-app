import React from 'react'

export default function ClassCard({ item, onSelected}) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p className='category'>{item.category}</p>
      <p className='desc'>{item.desc}</p>
      
      <div className="btn-area">
        <button onClick={()=>onSelected(item.title)}>선택하기</button>
      </div>      
    </div>
  )
}
