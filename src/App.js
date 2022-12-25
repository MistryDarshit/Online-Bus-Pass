import React,{useEffect} from 'react'
import './App.css'
import { Home ,About,Cont,Signup,Login} from './container'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cont" element={<Cont/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

