import React,{  useState } from 'react'
import {logo} from "./import"
import './navbar.css'
import LoadingBar from 'react-top-loading-bar'

const Navbar = (props) => {
  const [progress, setProgress] = useState(0)
  return (
    <>
       <LoadingBar
        color='#ff3434'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed = "300"
      />
      <div className="_nav-container">
        <div className="_nav-logo">
          <a href="/"><img src={logo} alt=""/></a>
        </div>
        <div className="_nav-link">
          <span className='_link-home'><a href="/" onClick={() => {setProgress(100)}}>HOME</a></span>
          <span className='_link-reg'><a href="../../signup" onClick={() => {setProgress(100)}}>USER RAGISTRETION</a></span>
          <span className='_link-about'><a href="../../about" onClick={() => {setProgress(100)}}>ABOUT US</a></span>
          <span className='_link-cont'><a href="../../contact" onClick={() => {setProgress(100)}}>CONTECT US</a></span>
        </div>
        <div className="_nav-log">
          <a href="../../login">LOGIN</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
