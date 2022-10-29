import React, { useEffect, useState } from "react";
import { BsChatDots, BsMenuButton, BsPeople, BsPieChart, BsPlayBtn, BsTable } from "react-icons/bs";
import { FaChartLine, FaRegUser } from "react-icons/fa";
import { FiClock, FiUser, FiVideo } from "react-icons/fi";
import { RiWechatLine } from "react-icons/ri";
import { BiPieChartAlt } from "react-icons/bi";

import { Link } from "react-router-dom";
import classes from "./Aside.module.css";
const Aside: React.FC = () => {
  return (
    <div className={classes.aside_container}>
      <br />
      <br />
      <br />
      <br />
      <div className={classes.aside_list_container}>
        <Link to={"/home"}>
          <p>
            <i>
              <BsMenuButton />
            </i>
            <span>Discover</span>
          </p>
        </Link>

        <Link to={"/chat"}>
          <p>
            <i>
              <RiWechatLine />
            </i>
            <span>Messaging</span>
          </p>
        </Link>

        <Link to={"/tredning-groups"}>
          <p>
            <i>
              <BsPeople />
            </i>
            <span>Trading Groups</span>
          </p>
        </Link>

        <Link to={"/live-streams"}>
          <p>
            <i>
              <BsPlayBtn />
            </i>
            <span>Live Streaming</span>
          </p>
        </Link>

        <Link to={'/meetings'}>
          <p>
            <i>
              <BiPieChartAlt />              
            </i>
            <span>Mettings</span>
          </p>
        </Link>

        <p>
          <i>
            <FaRegUser />
          </i>
          <span>Profile</span>
        </p>
        <p>
          <i>
            <BiPieChartAlt />
          </i>
          <span>Statistics</span>
        </p>
      </div>
      <br />
      <br />
      <div className={classes.profile_bottom_section}>
        <img src="/images/img11.jpg" alt="" />
        <div className={classes.absolute_2}>
          <h3>Try Premium </h3>
          <button>Upgrade now</button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
