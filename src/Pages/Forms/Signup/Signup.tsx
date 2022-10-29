import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import classes from "./Signup.module.css";
const Signup = () => {
  return (
    <Body>
      <div className={classes.container}>
        <div className={classes.header__container}>
          <h3 className={classes.title + " " + classes.h3}>
            Personal Information
          </h3>
          <h3 className={classes.subtitle + " " + classes.h3}>
            Let's know you better
          </h3>
        </div>
        <div className={classes.box}>
          <div className={classes.wrapper}>
            <div className={classes.input__container}>
              <input placeholder="First Name" />
            </div>

            <div className={classes.input__container}>
              <input placeholder="Last Name" />
            </div>

            <div className={classes.input__container}>
              <input placeholder="Date Of Birth" type="date" />
            </div>

            <div className={classes.input__container}>
              <select placeholder="Date Of Bi">
                <option> Account Type </option>
                <option> User </option>
                <option> Trader </option>
              </select>
            </div>

            <div className={classes.btn__container}>
              <Link to={"/otp"}>
                <button className={classes.proceed}> Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Signup;

// <div className={classes.wrapper}>

// <div className={classes.btn__container}>
//   <button> Continue</button>
// </div>
// </div>
