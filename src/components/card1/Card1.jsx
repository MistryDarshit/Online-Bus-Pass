import React,{useEffect} from 'react'
import './card1.css'
import { cardCoin } from '../implment'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Card1 = () => {
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
    <>
      <div data-aos="fade-up">
      <div className="_card-container">
        <div className="_card-left_container">
          <p className="_card-maintext" >
          GET YOUR <br />
          BUS PASS <br />
          ONLINE
          </p>
          <p className="_card-subtext">
          It is easy to use interface for people can <br />
          take advantages of our system and save lots <br />
          of time and effort
          </p>
          <p className="_card-sub">
          So get your pass now
          </p>
          <div className="_card-button">
            <a href="#">Let’s Go &#8594;</a>
          </div>
        </div>

        <div className="_card-right_container">
            <div className="_card-red"/>
            <div className="_card-card">
              <div className="_card-top">
                <p className="_card-text">
                MASTER CARD
                </p>
                <img src={cardCoin} alt="" className="_card-img" />
              </div>
              <div className="_card-bottom">
                <p className="_card-name">
                MISTRY DARSHIT ASHOKBHAI <br />
                1010-1010-1010-1010
                </p>
                <p className="_card-date">
                01/12
                </p>
                </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Card1
