import React from 'react'
import './App.css'
import {Card1, Card2, Card3, Email, Footer, Navbar} from './components'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Card1/>
      <Card2/>
      <Card3/>
      <Email/>
    </div>
    <div>
      <Footer/>
    </div>
  </>
  )
}

export default App

