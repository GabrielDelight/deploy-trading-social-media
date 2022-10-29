import React from "react";
import { FaMicrophone } from "react-icons/fa";
import classes from "./LiveVideoList.module.css";
interface Props {
  image: string;
  name: string;
}
const LiveVideoList: React.FC<Props> = ({ image, name }): JSX.Element => {
  return (
    <div className={classes.container}>
      <img src={image} alt="" />
      <div className={classes.absolute_container}>
        <div className={classes.mike_icon}>
          <i>
            <FaMicrophone />
          </i>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveVideoList;
