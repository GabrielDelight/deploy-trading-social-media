import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import Main from "../components/UI/Main/Main";
import classes from "../styles/JoinMeetingPage.module.css";
const JoinMeetingPage = () => {
  return (
    <Main>
      <main className={classes.main}>
        <div className={classes.container}>
          <input type="text" placeholder="Meeting ID" />
          <br />
          <button style={{ backgroundColor: "#1392E6" }}>Join Meeting</button>
          <button style={{ backgroundColor: "#FF6467" }}>Back</button>
        </div>
      </main>
    </Main>
  );
};

export default JoinMeetingPage;
