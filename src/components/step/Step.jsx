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
          <h2 class="_section-text-main">Shooting Stars</h2>
          <p class="_section-text-sub">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
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
          <h2 class="_section-text-main">The Catalyzer</h2>
          <p class="_section-text-sub">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
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
          <h2 class="_section-text-main">The 400 Blows</h2>
          <p class="_section-text-sub">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
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
          <h2 class="_section-text-main">Neptune</h2>
          <p class="_section-text-sub">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Step
