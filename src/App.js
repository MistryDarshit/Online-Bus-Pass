import React,{useEffect} from 'react'
import './App.css'
import {Card1, Card2, Card3, Footer, Navbar,Info,Step} from './components'


const App = () => {
  return (
    <>
    
      <Navbar/>
      <Card1/>
      <Info/>
      <Card2/>
      <Card3/>
      <Step/>
      <Footer/>
  </>
  )
}

export default App

