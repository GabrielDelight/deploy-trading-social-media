import React from "react";
import { BsGear, BsSearch } from "react-icons/bs";
import MessagesData from "../../../data/MessagesData";
import classes from "./Messages.module.css";
import MessagesList from "./MessagesList";

interface Props {
  title: string;
}
const Messages: React.FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className={classes.main_wrapper}>
      <h4 className={classes.title_tag}>{title}</h4>
      <div className={classes.first_row}>
        <div className={classes.gear_section}>
          <i>
            <BsGear />
          </i>
        </div>
        <div className={classes.flex_user_area}>
          <div className={classes.avatar_arwa}>
            <img src="/images/img11.jpg" alt="" />
            <div className={classes.online_div}></div>
          </div>
          <div className={classes.detail_text}>
            <p>
              <b>Gabriel Delight</b>
            </p>
            <p>
              <small>Trader</small>
            </p>

            <small style={{ color: "#76C00D" }}>Online</small>
          </div>
        </div>
      </div>

      <div className={classes.message_input_section}>
        <input type="text" placeholder="Search Group" />
        <div className={classes.search_icon}>
          <i>
            <BsSearch />
          </i>
        </div>
      </div>
      <br />
      <div className={classes.messages_list_wrapper}>
        {MessagesData.map((cur) => (
          <MessagesList
            avatar={cur.avatar}
            date={cur.date}
            firstname={cur.firstname}
            fullName={cur.fullName}
            id={cur.id}
            isSender={cur.isSender}
            isPhoto={cur.isPhoto}
            isReceiver={cur.isReceiver}
            lastname={cur.lastname}
            lastMessage={cur.lastMessage}
            ownerId={cur.ownerId}
            isVerified={cur.isVerified}
            unreadCount={cur.unreadCount}
            isVideo={cur.isVideo}
            key={cur.id}
            receiverId={cur.receiverId}
            nickname={cur.nickname}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
