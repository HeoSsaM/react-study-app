import React from 'react'

export default function InfoCard({title, desc, icon: Icon}) {
  return (
    <div className='info-card'>      
    {/* &&(논리연산자)- Icon이 있을 때만 렌더링 */}      
      <h3>
        {Icon && <Icon size={24} color="#6d3edb" />}{title}
      </h3>
      <p className="desc">{desc}</p>
    </div>
  )
}
