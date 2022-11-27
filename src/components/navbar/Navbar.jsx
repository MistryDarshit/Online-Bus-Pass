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
      <p className="_nav-p1">
        <a href="#">HOME</a>
      </p>
      <p className="_nav-p2">
        <a href="#">USER RAGISTRETION</a>
      </p>
      <p className="_nav-p3">
        <a href="#">ABOUT US</a>
      </p>
      <p className="_nav-p4">
        <a href="#">CONTECT US</a>
      </p>
      </div>
    </div>
      <div className="_nav-button">
        <a href="">LOGIN</a>
      </div>
    </div>
    </>
  )
}

export default Navbar
