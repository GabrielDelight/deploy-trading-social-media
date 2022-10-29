import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsLaptopFill } from "react-icons/bs";
import {
  FaDotCircle,
  FaMicrophoneAlt,
  FaMicrophoneAltSlash,
  FaVideo,
} from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import classes from "./VideoStream.module.css";
const VideoStream = () => {
  return (
    <>
      <div className={classes.container}>
        <video controls autoPlay src="/video/video1.mp4"></video>
        <div className={classes.incoming_contaiuner}>
          <div className={classes.sub_wrapper_section}>
            <div className={classes.absolute_close_x_icon}>
              <i>
                <RiCloseCircleLine />
              </i>
            </div>
            <div className={classes.profile_container}>
              <div>
                <img src="/images/img11.jpg" alt="" />
              </div>
              <div>
                <p>
                  <b>Someone wants to join the Meeting</b>
                </p>
                <p>
                  <small>Brandy Mack</small>
                </p>
              </div>
            </div>
            <div className={classes.accept_button}>
              <button>Accept</button>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.button_footer_1}>
          <button className={classes.id_button}>ID:6739GH57</button>
        </div>
        <div className={classes.middle_button_}>
          <div className={classes.mike_div_sec}>
            <i>
              <FaMicrophoneAltSlash />
            </i>
          </div>

          <div>
            <i>
              <FaVideo />
            </i>
          </div>

          <div>
            <i>
              <BsLaptopFill />
            </i>
          </div>

          <div className={classes.dot_icon}>
            <i>
              <FaDotCircle />
            </i>
          </div>

          <div>
            <i>
              <AiOutlineMenuFold />
            </i>
          </div>
        </div>
        <div>
          <button className={classes.exit_button}>Leave Meeting</button>
        </div>
      </footer>
    </>
  );
};
export default VideoStream;
