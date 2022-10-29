import React from "react";
import classes from "./ChatBody.module.css";

interface Props {
  avatar: string;
  isSender: boolean;
}
const ChatBodyList: React.FC<Props> = ({ avatar, isSender }) => {
  let newClasses = isSender
    ? classes.body_wrapper + " " + classes.sender_section
    : classes.body_wrapper;
  return (
    <div className={classes.main_chat_wrapper}>
      <div className={newClasses}>
        <div className={classes.avatar_container}>
          <img src={avatar} alt="" />
        </div>
        <div>
          <div className={classes.chat_text_area}>
            <p>Hi George! Nice to hear you again!</p>
          </div>

          <div className={classes.chat_text_area}>
            <p>I’m fine, thank you! And what about you? Is everything ok?</p>
          </div>

          <div className={classes.date_container}>
            <p>
              <small>09:42</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBodyList;
