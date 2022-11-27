import React from 'react'
import './navbar.css'
import {logo} from './import'

const Navbar = () => {
  return (
    <>
    <div className="_nav-container">
      <div className="_nav-img">
        <img src={logo} alt="" />
      </div>
    <div className="_nav-links">
      <div className="_nav-text">
      <p>
        <a href="#">Home</a>
      </p>
      <p>
        <a href="#">USER RAGISTRETION</a>
      </p>
      <p>
        <a href="#">ABOUT US</a>
      </p>
      <p>
        <a href="#">CONTECT US</a>
      </p>
      </div>
    </div>
      <div className="_nav-button">
        <button className='__nav-button'>LOGIN</button>
      </div>
    </div>
    </>
  )
}

export default Navbar
