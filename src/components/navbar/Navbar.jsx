import React from 'react'
import {logo} from "./import"
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="_nav-container">
        <div className="_nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="_nav-link">
          <span className='_link-home'><a href="">HOME</a></span>
          <span className='_link-reg'><a href="">USER RAGISTRETION</a></span>
          <span className='_link-about'><a href="">ABOUT US</a></span>
          <span className='_link-cont'><a href="">CONTECT US</a></span>
        </div>
        <div className="_nav-log">
          <a href="">LOGIN</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
