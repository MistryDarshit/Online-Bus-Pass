import React from 'react'
import './card3.css'
import { cardCoin } from '../implment'


const Card3 = () => {
  return (
    <>
    {/* Text section is hear */}
     <div className="main_container3">
      <div className="__card3_container3">
        <div className="__card3_container-text3">
          <h1 className="__card3_continer-text_main3">
            GET YOUR 
            <br />
            Public PASS
            <br />
            Now
          </h1>
          <p className="__card3_container-text_sub3">
          Submit your documents or id card an
            <br />
            grab amazing discount on your every
            <br />
            ride
          </p>
          <p className="__card3_container-text_sub23">Click Below And Enjoy</p>
          <div className="__card3_container-discount3">
            <p className="__card3_discount">10% OFF ON YOUR RIDE</p>
          </div>
        </div>
        {/* Card Section Was Started here */}
        <div className="__card3_container-img3">
          <div className="__card3_main-card3">
            <div className="__card3_red3" />
            <div className="__card3_container-card3">
              <div className="__card3_card_main3">
                <div className="__card3_container_upper3">
                  <div className="__card3_upper3">
                    <p className="__card3-Name_type3">PUBLIC CARD</p>
                  </div>
                  <div className="___card3-img3">
                    <img src={cardCoin} alt="card" />
                  </div>
                </div>
                <div className="__card3_name-number3">
                  <p className="__card3-Name3">
                    MISTRY DARSHIT ASHOKBHAI <br />
                    1010-1010-1010-1010
                  </p>
                  <p className="__card3-date3">01/12</p>
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

export default Card3
