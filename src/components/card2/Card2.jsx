import React from 'react'
import './card2.css'
import { cardCoin } from '../implment'

const Card2 = () => {
  return (
    <>
    <div className="main_container2">
      <div className="__card2_container2">
        <div className="__card2_container-text2">
          <h1 className="__card2_continer-text_main2">
            GET YOUR 
            <br />
            STUDENT PASS
            <br />
            NOW
          </h1>
          <p className="__card2_container-text_sub2">
            It is easy to use interface for people
            <br />
            can take advantages of our system and save lots
            <br />
            of time and effort
          </p>
          <p className="__card2_container-text_sub22">Click Below And Enjoy</p>
          <div className="__card2_container-discount2">
            <p className="__card2_discount">40% OFF ON YOUR RIDE</p>
          </div>
        </div>
        {/* Card Section Was Started here */}
        <div className="__card2_container-img2">
          <div className="__card2_main-card22">
            <div className="__card2_red2" />
            <div className="__card2_container-card2">
              <div className="__card2_card_main2">
                <div className="__card2_container_upper2">
                  <div className="__card2_upper2">
                    <p className="__card2-Name_type2">STUDENT PASS</p>
                  </div>
                  <div className="___card2-img2">
                    <img src={cardCoin} alt="card2" />
                  </div>
                </div>
                <div className="__card2_name-number2">
                  <p className="__card2-Name2">
                    MISTRY DARSHIT ASHOKBHAI <br />
                    1010-1010-1010-1010
                  </p>
                  <p className="__card2-date2">01/12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card2
