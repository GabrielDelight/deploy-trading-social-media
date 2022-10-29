import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import SuccessSVG from "../../../components/SVG/Success";
import classes from "./Success.module.css";
const Success = () => {
  return (
    <Body>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <SuccessSVG />

          <h2 className={classes.h2}>
            Your account has been Successfully created
          </h2>

          <p className={classes.p}>
            Let’s setup your profile so we can help you find your Match
          </p>

          <div className={classes.btn__container}>
            <Link to={"/home"}>
              <button className={classes.proceed}> Proceed</button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Success;
