import React from 'react'
import {logo} from "./import"
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="_nav-container">
        <div className="_nav-logo">
          <a href="/"><img src={logo} alt=""/></a>
        </div>
        <div className="_nav-link">
          <span className='_link-home'><a href="/">HOME</a></span>
          <span className='_link-reg'><a href="../../signup">USER RAGISTRETION</a></span>
          <span className='_link-about'><a href="../../about">ABOUT US</a></span>
          <span className='_link-cont'><a href="../../contact">CONTECT US</a></span>
        </div>
        <div className="_nav-log">
          <a href="../../login">LOGIN</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
