import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import classes from "./FxBook.module.css";
const FxBook = () => {
  return (
    <Body>
      <div className={classes.Container}>
        <div className={classes.header__container}>
          <h3 className={classes.title + " " + classes.h3}>My FxBook</h3>
          <h3 className={classes.subtitle + " " + classes.p}>
            Let people know how successful you
          </h3>
        </div>

        <div className={classes.wrapper}>
          <div>
            <p className={classes.p}>
              {" "}
              Let’s know how successful You have been?
            </p>
          </div>

          <div className={classes.input__container}>
            <input type="text" placeholder="FXbook Username" />
          </div>
          <div className={classes.btn__container}>
            <Link to="/verification">
              <button className={classes.proceed}> Login</button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default FxBook;
