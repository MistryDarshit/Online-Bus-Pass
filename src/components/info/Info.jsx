import React from "react";
import "./info.css";
import {  user, partner, rout, Downlode } from "../implment";
import CountUp from "react-countup";



const Info = () => {
  return (
    <>
      <div className="_info-main">
        <div className="_info-container">
          <div className="_info-cards">
            <img src={Downlode} alt="" />
              <h4 className="contant-head">
                <CountUp start={0} end={100} duration={2} delay={1}/>K
              </h4>
            <p className="contant-head">Dawnlode</p>
          </div>
        </div>
        <div className="_info-container">
          <div className="_info-cards">
            <img src={user} alt="" />
            <h4 className="contant-head"><CountUp start={0} end={1000} duration={2} delay={1}/>K</h4>
            <p className="contant-head">Active User</p>
          </div>
        </div>
        <div className="_info-container">
          <div className="_info-cards">
            <img src={rout} alt="" />
            <h4 className="contant-head"><CountUp start={0} end={30} duration={2} delay={1.5}/></h4>
            <p className="contant-head">Location</p>
          </div>
        </div>
        <div className="_info-container">
          <div className="_info-cards">
            <img src={partner} alt="" />
            <h4 className="contant-head"><CountUp start={0} end={5} duration={2} delay={2}/></h4>
            <p className="contant-head">Partners</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Info;
