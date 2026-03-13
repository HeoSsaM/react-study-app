import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0); //state 초기화
  
  return (
    <div className='counter'>
      <div className="inner">
        <h3>좋아요 카운터</h3>
        <p><strong>현재 좋아요 수 : {count}</strong></p>
        <div className="btn-area">
          <button onClick={()=>setCount(count+1)}>증가</button>
          <button onClick={()=>setCount(count > 0 ? count-1:0)}>감소</button>
          <button onClick={reset}>초기화</button>
        </div>
      </div>
    </div>
  )
}
