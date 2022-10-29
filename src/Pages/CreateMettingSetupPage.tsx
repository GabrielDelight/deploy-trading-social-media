import React from 'react'
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiClock, FiLink2, FiVideo } from "react-icons/fi";
import Main from "../components/UI/Main/Main";
import classes from '../styles/CreateMettingSetupPage.module.css'
const CreateMettingSetupPage = () => {
  return (
    <Main>
      <main className={classes.main}>
        <div className={classes.container}>
          <button>
            <i>
              <BsFillCameraVideoFill />
            </i>
            <span>Create Instant Meeting</span>
            <i></i>
          </button>
          <button className={classes.middle_button}>
            <i>
              <FiLink2 />
            </i>
            <span>Join Meeting</span>
            <i></i>
          </button>
          <button>
            <i>
              <FiClock />
            </i>
            <span>Schedule Meeting</span>
            <i></i>
          </button>
        </div>
      </main>
    </Main>
  );
}

export default CreateMettingSetupPage