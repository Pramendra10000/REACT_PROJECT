import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Work = () => {
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span>Work for All these</span>
        <span>Brand & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit
          minima quisquam in voluptas hic, fuga nulla eaque beatae sapiente.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          labore.
          <br />
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            aspernatur porro. Similique!
          </span>
          <br />
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* Background circle */}
        <div className="w-backCircle  blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
