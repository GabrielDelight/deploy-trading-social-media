import React from "react";
import ChatBodyList from "./ChatBodyList";
import ChatData from "../../../data/ChatData";
import classes from "./ChatBody.module.css";
import { FiSmile } from "react-icons/fi";
import { MdAttachEmail, MdAttachFile, MdSend } from "react-icons/md";
import { RiUserSmileLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const ChatBody = () => {
  return (
    <div>
      <div className={classes.chat_body_div}>
        {ChatData.map((cur) => (
          <ChatBodyList avatar={cur.ownerAvatar} isSender={cur.isSender} />
        ))}
      </div>
      <div className={classes.chat_form_container}>
        <input placeholder="Enter your message here" type="text" />
        <div className={classes.absolute_form_colinatiner}>
          <div>
            <i>
              <RiUserSmileLine />
            </i>
          </div>
          <div>
            <i>
              <ImAttachment />
            </i>
          </div>
          <div style={{ backgroundColor: "#7CD892" }}>
            <i>
              <HiOutlinePaperAirplane style={{color: 'white'}} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
