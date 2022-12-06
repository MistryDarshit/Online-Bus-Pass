import React from "react";
import "./footer.css";
import { face,git,insta,twit } from "../implment";

const footer = () => {
  return (
    <>
      <div className="_footer_container">
        <div className="_footer_copy-text">
          <p className="_footer_copyright-text">Copy right All rights reserved at 2022</p>
          </div>
          <div className="_footer-center_icon">
            <ul class="_footer-wrapper">
              <li class="_footer-icon _footer-facebook">
                <span class="_footer-tool">Facebook</span>
                <span>
                  <img src={face} alt="" className="_footer-tool2" />
                </span>
              </li>
              <li class="_footer-icon _footer-twitter">
                <span class="_footer-tool">Twitter</span>
                <span>
                  <img src={twit} alt="" className="_footer-tool2"/>
                </span>
              </li>
              <li class="_footer-icon _footer-instagram">
                <span class="_footer-tool">Instagram</span>
                <span>
                <img src={insta} alt="" className="_footer-tool2"/>
                </span>
              </li>
              <li class="_footer-icon _footer-github">
                <span class="_footer-tool">Github</span>
                <span>
                <img src={git} alt="" className="_footer-tool2"/>
                </span>
              </li>
            </ul>
        </div>
        <div className="_footer_term-text">
          <p className="_footer-link"><a href="">Terms & Services</a></p>
        </div>
      </div>
    </>
  );
};

export default footer;
