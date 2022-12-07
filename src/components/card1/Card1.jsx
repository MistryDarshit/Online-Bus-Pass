import React from 'react'
import './card1.css'
import { cardCoin } from '../implment'
const Card1 = () => {
  return (
    <>
      <div className="_card-container">
        <div className="_card-left_container">
          <p className="_card-maintext">
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
    </>
  )
}

export default Card1
