import React from 'react'
import './App.css'
import {Card1, Card2, Card3, Email, Footer, Navbar} from './components'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Card1/>
      <Card2/>
      <Card3/>
      <Email/> 
    <div>
      <Footer/>
    </div>
    </div>
  </>
  )
}

export default App

