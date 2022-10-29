import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import TrendingGroupsList from "../components/TrendingGroupsList/TrendingGroupsList";
import Main from "../components/UI/Main/Main";
import PostData from "../data/PostData";
import classes from "../styles/TrendingGroups.module.css";

const TrendingGroups = () => {
  return (
    <Main>
      <header className={classes.header}>
        <div className={classes.first_col}>
          <h1>Trading Groups</h1>
          <Link to={"/great-group"}>
            <button>
              <i>
                <BsPlusCircle />
              </i>
              <span>Create Group</span>
            </button>
          </Link>
        </div>

        <div className={classes.middle_button_section}>
          <button className={classes.btn_1}>Forex</button>
          <button className={classes.btn_2} style={{ backgroundColor: "#4F46BA", color: "white" }}>
            Binary
          </button>
          <button className={classes.btn_3}>Binary</button>
        </div>

        <div className={classes.second_menu}>
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
      <div className={classes.container_flex_}>
        {PostData.sort(() => Math.random() - 0.5).map((cur: any) => (
          <>
            <TrendingGroupsList image={cur.image1} />
            <TrendingGroupsList image={cur.image1} />
          </>
        ))}
      </div>
    </Main>
  );
};

export default TrendingGroups;
