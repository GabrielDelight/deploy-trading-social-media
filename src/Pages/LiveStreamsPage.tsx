import React from "react";
import { BsSignal } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RiSignalTowerFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LiveStream from "../components/LiveStream/LiveStream";
import Main from "../components/UI/Main/Main";
import PostData from "../data/PostData";
import classes from "../styles/LiveStreamsPage.module.css";
const LiveStreamsPage = () => {
  return (
    <Main>
      <header className={classes.header}>
        <div className={classes.first_col}>
          <h1>Live Streams</h1>
          <Link to={"/live-video"}>
            <button>
              <i>
                <RiSignalTowerFill />
              </i>
              <span>Go Live</span>
              <i></i>
            </button>
          </Link>
        </div>

        <div className={classes.second_menu}>
          <div className={classes.menu_icon}>
            <i>
              <FiMenu />
            </i>
          </div>
          <div className={classes.search_section}>
            <input type="text" placeholder="Search Stream" />
            <div className={classes.absolute_search_section}>
              <i>
                <FiSearch />
              </i>
            </div>
          </div>
        </div>
      </header>
      <br />
      <div className={classes.container_flex_}>
        {PostData.sort(() => Math.random() - 0.5).map((cur: any) => (
          <>
            <LiveStream image={cur.image1} />
            <LiveStream image={cur.image1} />
          </>
        ))}
      </div>
    </Main>
  );
};

export default LiveStreamsPage;
