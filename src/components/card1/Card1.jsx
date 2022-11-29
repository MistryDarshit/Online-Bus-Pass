import React from "react";
import "./card1.css";
import { cardCoin } from "./implment";

const Card1 = () => (
  <>
    <div className="main_container">
      <div className="__card1_container">
        <div className="__card1_container-text">
          <h1 className="__card1_continer-text_main">
            GET YOUR
            <br />
            BUS PASS
            <br />
            ONLINE
          </h1>
          <p className="__card1_container-text_sub">
            It is easy to use interface for people
            <br />
            can take advantages of our system and save lots
            <br />
            of time and effort
          </p>
          <p className="__card1_container-text_sub2">So get your pass now</p>
          <div className="__card1_container-button">
            <button className="__card1_container-button_start">
              <a href="#">Let’s Go &#8594;</a>
            </button>
          </div>
        </div>
        <div className="__card1_container-img">
          <div className="__card1_main-card1">
            <div className="__card1_red" />
            <div className="__card1_container-card">
              <div className="__card1_card_main">
                <div className="__card1_container_upper">
                  <div className="__card1_upper">
                    <p className="__card1-Name">MASTER CARD</p>
                  </div>
                  <div className="___card1-img">
                    <img src={cardCoin} alt="card" />
                  </div>
                </div>
                <div className="__card1_name-number">
                  <p className="__card1-Name">
                    MISTRY DARSHIT ASHOKBHAI <br />
                    1010-1010-1010-1010
                  </p>
                  <p className="__card1-date">01/12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Card1;
