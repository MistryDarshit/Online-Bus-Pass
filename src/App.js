import React,{useEffect} from 'react'
import './App.css'
import {Card1, Card2, Card3, Email, Footer, Navbar,Info,Step} from './components'


const App = () => {
  return (
    <>
    
      <Navbar/>
      <Card1/>
      <Card2/>
      <Card3/>
      <Step/>
      <Email/> 
      <Footer/>
  </>
  )
}

export default App

