import React from 'react'
import './email.css' 


const Email = () => {
  return (
    <div data-aos="fade-up">
    <div className="_email-container">
      <div className="_email-input">
        <form action="#" method="">
          <label htmlFor="">Enter Youre E-mail Adress</label> <br />
          <input type="email"  placeholder=''/>
        </form>
      </div>
      <div className="_email-button">
        <a href="">E-mail</a>
      </div>
      <div className="_email-text">
        <p className="_email-maintext">Give us feedback to improv our service</p>
      </div>
    </div>
    </div>
  )
}

export default Email
