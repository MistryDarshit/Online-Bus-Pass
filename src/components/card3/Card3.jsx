import React from "react";
import './card3.css'
import { cardCoin } from "../implment";

const Card3 = () => {
  return (
    <>
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
    </>
  );
};

export default Card3;
