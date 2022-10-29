import React from "react";
import { MessageData } from "../../../data/MessagesData";
import classes from "./GroupMessageListAside.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

const GroupMessageListAside: React.FC<MessageData> = ({
  avatar,
  date,
  firstname,
  lastname,
  lastMessage,
  unreadCount = 0,
}) => {
  return (
    <div className={classes.message_list_container}>
      <div className={classes.relative_avatar}>
        <img src={avatar} alt="" />
        <div className={classes.absolute_online_icon}></div>
      </div>
      <div className={classes.list_name}>
        <p className={classes.name_section}>
          {firstname} {lastname}
        </p>
        <p>
          <small>Online</small>
        </p>
      </div>

      <div className={classes.action_area_section}>
        <div>
          <i style={{ color: "#7CD892" }}>
            <BsFillChatLeftDotsFill />
          </i>
          <i>
            <AiOutlineCloseCircle />
          </i>
        </div>
      </div>
    </div>
  );
};

export default GroupMessageListAside;
