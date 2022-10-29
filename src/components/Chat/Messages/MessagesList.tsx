import React from "react";
import { MessageData } from "../../../data/MessagesData";
import classes from "./MessagesList.module.css";

const MessagesList: React.FC<MessageData> = ({
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
        <p>
          {firstname} {lastname}
        </p>
        <p>
          <small> {lastMessage}</small>
        </p>
      </div>

      <div className={classes.action_area_section}>
        {unreadCount > 0 ? (
          <div className={classes.counter_chat}>
            <small>{unreadCount}</small>
          </div>
        ) : (
          <small>{date}</small>
        )}
      </div>
    </div>
  );
};

export default MessagesList;
