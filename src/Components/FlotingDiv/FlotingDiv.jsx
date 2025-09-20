import React from "react";
import "./FlotingDiv.css";

<<<<<<< HEAD
const FlotingDiv = ({ image, txt1, txt2 }) => {
=======
import { themeContext } from "../../Context.js";
import { useContext } from "react";

const FlotingDiv = ({image ,txt1 ,txt2}) => {
>>>>>>> cfad1b054ff002f6bfe99a87dd127c63afd7e673
  return (
    <div>
      <div className="floatingcontent" >
        <img src={image} alt="" />
        <span>
          {txt1}
          <br />
          {txt2}
        </span>
      </div>
    </div>
  );
};

export default FlotingDiv;
