import React from 'react'
import './info.css'
import {Acess , user ,partner , rout, Downlode} from '../implment'

const Info = () => {
  return (
    <>
   <div className="_info-main">
    <div className="_info-container">
      <div className="_info-cards">
        <img src={Downlode} alt="" />
        <h4 className="ani">
            1.2K
        </h4>
        <p className="contant-head">
          Dawnlode
        </p>
      </div>
    </div>
    <div className="_info-container">
    <div className="_info-cards">
      <img src={user} alt="" />
      <h4 className="contant-head">
          1.1K
      </h4>
      <p className="contant-head">
          Active User
      </p>
    </div>
  </div>
  <div className="_info-container">
      <div className="_info-cards">
        <img src={rout} alt="" />
        <h4 className="contant-head">
            30
        </h4>
        <p className="contant-head">
            Location
        </p>
      </div>
    </div>
    <div className="_info-container">
      <div className="_info-cards">
        <img src={partner} alt="" />
        <h4 className="contant-head">
            5
        </h4>
        <p className="contant-head">
        Partners
        </p>
      </div>
    </div>
    </div>
  </>
  )
}

export default Info
