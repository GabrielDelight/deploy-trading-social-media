import React from "react";
import { Link } from "react-router-dom";
import classes from "./StoryList.module.css";
interface Props {
  avatar?: string;
  firstname?: string;
  lastname?: string;
  image?: string;
}
const StoryListitem: React.FC<Props> = ({ avatar, firstname, image }) => {
  return (
    <Link to={"/story"}>
      <div className={classes.story_list_item}>
        <div className={classes.story_img_relative}>
          <img className={classes.story_image_wrapper} src={image} alt="" />
          <div className={classes.aboslute_small_image}>
            <img className={classes.story_image_wrapper} src={avatar} alt="" />
          </div>
        </div>
        <div className={classes.story_owner_name}>
          <p>{firstname}</p>
        </div>
      </div>
    </Link>
  );
};

export default StoryListitem;
