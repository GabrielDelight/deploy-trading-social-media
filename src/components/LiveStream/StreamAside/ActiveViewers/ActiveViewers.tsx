import React from "react";
import { MdMessage } from "react-icons/md";
import classes from "./ActiveViewers.module.css";

interface Props {
  firstname: string;
  lastname: string;
  avatar: string;
}
const ActiveViewers: React.FC<Props> = ({ firstname, lastname, avatar }) => {
  return (
    <div className={classes.lits_container}>
      <div className={classes.wrapper_flex_2}>
        <div className={classes.avatar_container}>
          <img src={avatar} alt="" />
          <div className={classes.absolute_icon}></div>
        </div>
        <div className={classes.detail_name}>
          <p>
            {firstname} {lastname}
          </p>
        </div>
      </div>
      <div className={classes.message_chat_icon}>
        <i>
          <MdMessage />
        </i>
      </div>
    </div>
  );
};

export default ActiveViewers;
