import React from "react";
import { Link } from "react-router-dom";
import ReactCalendar from "../components/Calendar/ReactCalendar";

import Main from "../components/UI/Main/Main";
import classes from "../styles/MettingsStyles.module.css";

const MeetingsPage = () => {
  return (
    <Main>
      <div className={classes.meetings_container}>
        <header className={classes.header}>
          <input
            type="text"
            placeholder="Meeting Title

"
          />
        </header>
        <br />
        <ReactCalendar />
        <br />
        <div className={classes.timer_section}>
          <input type="time" name="" id="" />
        </div>
        <br />
        <div className={classes.done_btn}>
          <Link to="/meetings-setup">
            <button>Done</button>
          </Link>
        </div>
      </div>
    </Main>
  );
};

export default MeetingsPage;
