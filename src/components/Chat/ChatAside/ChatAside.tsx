import React from "react";
import { BsArrowLeft, BsPencil, BsTelephone } from "react-icons/bs";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import MessagesData from "../../../data/MessagesData";
import MessagesList from "../Messages/MessagesList";
import classes from "./ChatAside.module.css";
import FIlesAside from "./FilesAside/FIlesAside";
import GroupMessageListAside from "./GroupMessageListAside";
const ChatAside = () => {
  let messageArray = [];
  messageArray = MessagesData.splice(0, 3);

  return (
    <div className={classes.global_wrapper}>
      <div className={classes.first_row}>
        <div className={classes.back_button}>
          <i>
            <BsArrowLeft />
          </i>
        </div>
        <p>Chat details</p>
      </div>
      <br />
      <div className={classes.second_column}>
        <div className={classes.absolute_pencil}>
          <i>
            <BsPencil />
          </i>
        </div>
        <div className={classes.avatar_section}>
          <img src="/images/img11.jpg" alt="" />
        </div>
        <div>
          <p className={classes.name_title}>
            <big>Dap University</big>
          </p>
          <p className={classes.num_count}>253 members</p>
          <p className={classes.date_count}>Last message: Today, 09:56</p>
        </div>
      </div>
      <div className={classes.buttons}>
        <button style={{ backgroundColor: "#7CD892" }}>
          <i>
            <BsTelephone />
          </i>
          Voice chat
        </button>

        <button style={{ backgroundColor: "#FF686B" }}>
          <i>
            <FiVideo />
          </i>
          Voice chat
        </button>
      </div>
      <br />
      <div className={classes.header_section}>
        <div className={classes.title_div}>
          <p>Group Members</p>
        </div>
        <div className={classes.drop_down_div}>
          <i>
            <RiArrowDownSFill />
          </i>
        </div>
      </div>
      {messageArray.map((cur) => (
        <GroupMessageListAside
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
      <div className={classes.header_section}>
        <div className={classes.title_div}>
          <p>Chat files</p>
        </div>
        <div className={classes.drop_down_div}>
          <i>
            <RiArrowDownSFill />
          </i>
        </div>
      </div>
      <FIlesAside />
      <FIlesAside />
      <FIlesAside />
    </div>
  );
};

export default ChatAside;
