import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import classes from "./TradingType.module.css";
const TradingType = () => {
  return (
    <Body>
      <div className={classes.Container}>
        <div className={classes.header__container}>
          <h3 className={classes.title + " " + classes.h3}>Trading Type</h3>
          <h3 className={classes.subtitle + " " + classes.h3}>
            What trading skill do you know best
          </h3>
        </div>

        <div className={classes.wrapper}>
          <div className={classes.btn_Row}>
            <button className={`${classes.btn} ${classes.active}`}>
              Crypto
            </button>
            <button className={classes.btn}>forex</button>
            <button className={classes.btn}>Binary</button>
          </div>

          <div className={classes.type}>
            <button className={classes.type__action}>Bitcoin</button>
            <button className={classes.type__action}>Etheruem</button>
          </div>

          <div className={classes.btn__container}>
            <Link to="/trading-period">
              <button style={{ color: "white" }} className={classes.proceed}>
                {" "}
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default TradingType;
