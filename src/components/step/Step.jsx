import React from 'react'
import './step.css'
import {signup ,Form ,payment,Acess} from '../implment'

const Step = () => {
  return (
    <>
    <section class="_section-container">
  <div class="_section-line">
    <div class="_section-line21">
      <div class="_section-round-num">
        <div class="_section-line-num"></div>
      </div>
      <div class="_section-main_round">1</div>
      <div class="_section-img-container">
        <div class="_section-img">
          <img src={signup} alt="" />
        </div>
        <div class="_section-text-container">
          <h2 class="_section-text-main">Signup</h2>
          <p class="_section-text-sub">Signup for amazinng discount</p>
        </div>
      </div>
    </div>
    <div class="_section-line22">
      <div class="_section-round-num">
        <div class="_section-line-num"></div>
      </div>
      <div class="_section-main_round">2</div>
      <div class="_section-img-container">
        <div class="_section-img">
        <img src={Form} alt="" />
        </div>
        <div class="_section-text-container">
          <h2 class="_section-text-main">Form</h2>
          <p class="_section-text-sub">Enter youre details and fill form</p>
        </div>
      </div>
    </div>
    <div class="_section-line22">
      <div class="_section-round-num">
        <div class="_section-line-num"></div>
      </div>
      <div class="_section-main_round">3</div>
      <div class="_section-img-container">
        <div class="_section-img">
        <img src={payment} alt="" />
        </div>
        <div class="_section-text-container">
          <h2 class="_section-text-main">Paymant</h2>
          <p class="_section-text-sub">Make youre payment for acess youre pass</p>
        </div>
      </div>
    </div>
    <div class="_section-line22">
      <div class="_section-round-num">
        <div class="_section-line-num"></div>
      </div>
      <div class="_section-main_round">4</div>
      <div class="_section-img-container">
        <div class="_section-img">
        <img src={Acess} alt="" />
        </div>
        <div class="_section-text-container">
          <h2 class="_section-text-main">Acees</h2>
          <p class="_section-text-sub">Acess youre pass and enjoy youre ride</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Step
