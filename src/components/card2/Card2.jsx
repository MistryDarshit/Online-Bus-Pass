import React ,{useEffect}from "react";
import { cardCoin } from "../implment";
import "./card2.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Card2 = () => {
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
    <div className="_card2-container">
      <div className="_card2-left_container">
        <div className="_card2-red" />
        <div className="_card2-card">
          <div className="_card2-top">
            <p className="_card2-text">MASTER CARD</p>
            <img src={cardCoin} alt="" className="_card2-img" />
          </div>
          <div className="_card2-bottom">
            <p className="_card2-name">
              MISTRY DARSHIT ASHOKBHAI <br />
              1010-1010-1010-1010
            </p>
            <p className="_card2-date">01/12</p>
          </div>
        </div>
      </div>
      <div className="_card2-right_container">
        <p className="_card2-maintext">
        GET YOUR <br />
        PUBLIC PASS <br />
        NOW
        </p>
        <p className="_card2-subtext">
        Submit your documents or id card and <br />
        grab amazing discount on your every <br />
        ride
        </p>
        <p className="_card2-sub">click below and enjoy</p>
        <div className="_card2-button">
          <a href="#">40% OFF ON YOUR RIDE</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card2;
