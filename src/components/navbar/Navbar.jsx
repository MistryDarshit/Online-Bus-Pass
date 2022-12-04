import React from 'react'
import './navbar.css'
import {logo} from './import'

const Navbar = () => {
  return (
   <div className='__nav-container'>
    <div className="__nav-logo">
      <img src={logo} alt="" />
    </div>
    <div className="__nav-links">
      <p className='__nav-home'>
        <a href="#">HOME</a>
      </p>
      <p className='__nav-reg'>
      <a href="#">USER RAGISTRETION</a>
      </p>
      <p className='__nav-about'>
        <a href="#">ABOUT US</a>
      </p>
      <p className='__nav-contect'>
        <a href="#">CONTECT US</a>
      </p>    
    </div>
    <div className="__nav_button">
      <button className='__nav_button-login'><a href="#">
        LOGIN
        </a></button>
    </div>
   </div>
  )
}

export default Navbar
