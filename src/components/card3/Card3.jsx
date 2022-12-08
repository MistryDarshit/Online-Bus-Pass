import React, {useEffect} from "react";
import './card3.css'
import { cardCoin } from "../implment";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Card3 = () => {

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
      <div className="_card3-container">
        <div className="_card3-left_container">
          <p className="_card3-maintext">
          GET YOUR <br />
          PUBLIC PASS <br />
          NOW
          </p>
          <p className="_card3-subtext">
          Submit your documents or id card and <br />
          grab amazing discount on your every <br />
          ride
          </p>
          <p className="_card3-sub">click below and enjoy</p>
          <div className="_card3-button">
            <a href="#">10% OFF ON YOUR RIDE</a>
          </div>
        </div>
        <div className="_card3-right_container">
          <div className="_card3-yello" />
          <div className="_card3-card">
            <div className="_card3-top">
              <p className="_card3-text">PUBLIC CARD</p>
              <img src={cardCoin} alt="" className="_card3-img" />
            </div>
            <div className="_card3-bottom">
              <p className="_card3-name">
                MISTRY DARSHIT ASHOKBHAI <br />
                1010-1010-1010-1010
              </p>
              <p className="_card3-date">01/12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card3;
