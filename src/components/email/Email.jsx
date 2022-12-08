import React ,{useEffect}from 'react'
import './email.css' 
import Aos from 'aos';
import 'aos/dist/aos.css'

const Email = () => {
  useEffect(() =>{
    Aos.init({
      disable: false,
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false, 
      debounceDelay: 150,
      throttleDelay: 200, 
      offset: 150,
      delay: 0,
      duration: 1200, 
      easing: 'ease', 
      once: false,
      mirror: false, 
      anchorPlacement: 'top-bottom',
    
    });
  },[])
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
