import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      {/* Link-> react용 a태그 */}
      <Link to='/'>홈</Link>
      <Link to='/class'>강의</Link>
      <Link to='/todo'>할일</Link>
    </nav>
  )
}
