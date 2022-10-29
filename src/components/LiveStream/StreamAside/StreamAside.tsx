import React from "react";
import { FiSearch } from "react-icons/fi";
import ActiveViewers from "./ActiveViewers/ActiveViewers";
import classes from "./StreamAside.module.css";
import userData from "../../../data/UserData";
const StreamAside = () => {
  return (
    <div>
      <div className={classes.search_container}>
        <input type="text" placeholder="Search" />
        <div className={classes.search_icon_div}>
          <i>
            <FiSearch />
          </i>
        </div>
      </div>
      <br />
      {userData.map((cur) => (
        <ActiveViewers
          avatar={cur.avatar}
          firstname={cur.firstname}
          lastname={cur.lastname}
        />
      ))}
    </div>
  );
};

export default StreamAside;
