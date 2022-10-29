import React from "react";
import LineSVG from "../SVG/LineSVG";
import classes from "./Body.module.css";
import Circle1 from "../Assets/Cirle1.png";
import Circle2 from "../Assets/Circle2.png";
import Circle3 from "../Assets/Circle3.png";
import Circle4 from "../Assets/Circle4.png";
import Circle5 from "../Assets/Circle5.png";
import Circle6 from "../Assets/Circle6.png";
import Circle7 from "../Assets/Circle7.png";

interface BodyProps {
  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
}

const Body = ({ children }: BodyProps) => {
  return (
    <div className={classes.body__container}>
      <div className={classes.line__box}>
        {" "}
        <LineSVG />
        <img src={Circle1} alt="circle1" className={classes.circle1} />
      </div>
      <img src={Circle5} alt="circle5" className={classes.circle5} />

      <img src={Circle6} alt="circle6" className={classes.circle6} />

      {children}

      <img src={Circle7} alt="circle7" className={classes.circle7} />

      <img src={Circle4} alt="circle4" className={classes.circle4} />

      <img src={Circle2} alt="circle2" className={classes.circle2} />
      <img src={Circle3} alt="circle3" className={classes.circle3} />
    </div>
  );
};

export default Body;
