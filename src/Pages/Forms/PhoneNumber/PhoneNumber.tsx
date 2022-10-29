import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import classes from "./Index.module.css";
const PhoneNumber = () => {
  return (
    <Body>
      <div className={classes.Container}>
        <div className={classes.header}>
          <h3> Get Started</h3>
          <p>Sign up to get started finding your Match</p>
        </div>
        <div className={classes.wrapper__box}>
          <div className={classes.wrapper}>
            <div className={classes.login__container}>
              <h3 className={classes.login}>Login</h3>
            </div>

            <div className={classes.input__container}>
              <div className={classes.country__box}>+1</div>
              <input type="text" />
            </div>

            <div className={classes.btn__container}>
              <Link to="/trading-type">
                <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default PhoneNumber;

{
  /* <div className={classes.wrapper}>
<div className="classes title__box">
  <h3 className={classes.login}>Login</h3>
</div>

<div className={classes.input__container}>
  <div className={classes.country__box}> +1</div>
  <input />
</div>

<div className={classes.btn__container}>
  <button> Login</button>
</div>

</div> */
}
