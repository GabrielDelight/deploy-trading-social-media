import React from "react";
import classes from "./StoryList.module.css";
import PostData from "../../../data/PostData";
import StoryListitem from "./StoryListitem";
const StoryList = () => {
  return (
    <div className={classes.story_list_wrapper}>
      {PostData.map((cur, index) => (
        <StoryListitem
          avatar={cur.avatar}
          firstname={cur.firstname}
          image={cur.image1}
          key={index}
        />
      ))}
    </div>
  );
};

export default StoryList;
