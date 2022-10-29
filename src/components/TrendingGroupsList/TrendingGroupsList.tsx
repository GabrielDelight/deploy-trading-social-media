import React from "react";

import classes from "./TrendingGroupsList.module.css";
interface Props {
  image: string;
}
const TrendingGroupsList: React.FC<Props> = ({ image }) => {
  return (
    <div className={classes.list_container}>
      <div className={classes.image_wrapper}>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <p>
            <b>Cuzin Cash</b>
          </p>
          <p>
            <small>Getting things started</small>
          </p>
        </div>

        <div className={classes.footer_section}>
          <div>
            <button>View</button>
          </div>
          <div>
            <p>
              $ {parseInt(Math.random().toString().substr(2, 3)).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingGroupsList;
