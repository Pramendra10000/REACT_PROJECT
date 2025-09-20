import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
   const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="services" id="Services">
        {/* left side */}
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit
            minima quisquam in voluptas hic, fuga nulla eaque beatae sapiente.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            labore.
          </span>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blurl"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* Right side  */}
        <div className="cards">
          {/* First cards */}
          <motion.div
          whileInView={{ left: "12rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "12rem" }}>
            <Card
              emoji={HeartEmoji}
              heading={"Design"}
              details={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
            />
          </motion.div>

          {/* Second cards */}

          <div style={{ top: "12rem", left: "-4rem" }}>
            <Card
              emoji={glasses}
              heading={"Developer"}
              details={"JAVA, SPRING MVC, SPRING BOOT, SERVLET, SQL,REACT"}
            />
          </div>

          {/* Third cards */}
          <div style={{ top: "19rem", left: "12rem" }}>
            <Card
              emoji={Humble}
              heading={"JAVA Full Stack"}
              details={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus voluptatum possimus."
              }
            />
          </div>
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};
export default Services;
