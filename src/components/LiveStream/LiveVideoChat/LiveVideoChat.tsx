import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import classes from "./LiveVideoChat.module.css";
const LiveVideoChat = () => {
  return (
    <div className={classes.main_div}>
      <header className={classes.header}>
        <div className={classes.flex_2}>
          <div className={classes.avatar_section}>
            <img src="/images/img11.jpg" alt="" />
            <div className={classes.round_dot_icon}></div>
          </div>
          <p>
            <b>Jackson D.</b>
          </p>
        </div>
        <div className={classes.close_icon}>
          <i>
            <MdClose />
          </i>
        </div>
      </header>
      <div className={classes.chat_body}>
        <div className={classes.chat_list_section}>
          <p>
            <h6>Johnson Akin</h6>
          </p>
          <p>
            <small>Do you want to hear a joke about Joey?</small>
          </p>
        </div>

        <div className={classes.chat_list_section}>
          <p>
            <h6>Johnson Akin</h6>
          </p>
          <p>
            <small>Do you want to hear a joke about Joey?</small>
          </p>
        </div>

        <div className={classes.chat_list_section}>
          <p>
            <h6>Johnson Akin</h6>
          </p>
          <p>
            <small>Do you want to hear a joke about Joey?</small>
          </p>
        </div>
        <br />
        <div className={classes.form_wrapper}>
          <input type="text" placeholder="Type message here..." />
          <div className={classes.absolute_button}>
            <i>
              <AiOutlineSend />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoChat;
