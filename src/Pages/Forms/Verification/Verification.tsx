import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import VerifySVG from "../../../components/SVG/VerifySVG";
import classes from "./Verification.module.css";
const Verification = () => {
  return (
    <Body>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div>
            <VerifySVG />
          </div>

          <div className={classes.input__container}>
            <h2 className={classes.h2}> Verification Required</h2>
          </div>
          <br />
          <div>
            <p className={classes.p}>
              To continue using Fate as a verified trader you are required to
              verify your identity
            </p>
          </div>

          <div className={classes.btn__container}>
            <Link to={"/loading"}>
              <button className={classes.proceed}> Start Verification</button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Verification;
