import React from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import Spinner from "../../../components/SVG/Spinner";
import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <Body>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <Spinner />

          <div className={classes.btn__container}>
            <Link to={'/success'}>
              <button className={classes.proceed}>
                {" "}
                Verification In Process
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Loading;
