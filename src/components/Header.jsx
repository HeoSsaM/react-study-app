import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/logo.png' //이미지를 변수에 담음
import Nav from './Nav'

export default function Header() {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <Link to='/'>
            <img src={Logo} alt="StudyGo" />STUDYGO
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  )
}
