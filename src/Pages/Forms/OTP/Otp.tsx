import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Body from "../../../components/Body/Body";
import classes from "./Otp.module.css";
const Otp = (): JSX.Element => {
  let input1 = useRef<HTMLInputElement>(null);
  let input2 = useRef<HTMLInputElement>(null);
  let input3 = useRef<HTMLInputElement>(null);
  let input4 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input1.current?.addEventListener("input", (e) => {
      input2.current?.focus();
    });

    input2.current?.addEventListener("input", (e) => {
      input3.current?.focus();
    });

    input3.current?.addEventListener("input", (e) => {
      input4.current?.focus();
    });

    // input4.current?.addEventListener("input", (e) => {
    //   input2.current?.focus();
    // });
  }, []);

  return (
    <Body>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <h3>Verify OTP</h3>
          </div>

          <div className={classes.otp__container}>
            <div className={classes.box}>
              <input type={"text"} maxLength={1} ref={input1} />
            </div>
            <div className={classes.box}>
              <input type={"text"} maxLength={1} ref={input2} />
            </div>

            <div className={classes.box}>
              <input type={"text"} maxLength={1} ref={input3} />
            </div>

            <div className={classes.box}>
              <input type={"text"} maxLength={1} ref={input4} />
            </div>
          </div>
          <div className={classes.btn__container}>
            <Link to={"/phone-number"}>
              <button> Login</button>
            </Link>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Otp;
