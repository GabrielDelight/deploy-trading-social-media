import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import classes from "./TradingPeriod.module.css";
const TradingPeriod = () => {
  return (
    <Body>
      <div className={classes.Container}>
        <div className={classes.header__container}>
          <h3 className={classes.title + " " + classes.h3}>Training Period</h3>
          <h3 className={classes.subtitle + " " + classes.h3}>
            Let us know how long you havebeen in the charts
          </h3>
        </div>

        <div className={classes.wrapper}>
          <div>
            <p className={classes.p}> I have traded for </p>
          </div>

          <div className={classes.input__container}>
            <select>
              <option>5 - 9 years</option>
            </select>
          </div>
          <div className={classes.btn__container}>
            <Link to={"/fx-book"}>
              <button className={classes.proceed}>Proceed</button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default TradingPeriod;
