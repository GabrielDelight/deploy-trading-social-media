import React from "react";
import { BsCardImage, BsChevronRight } from "react-icons/bs";
import { MdOutlineInsertPhoto } from "react-icons/md";
import classes from "./FIlesAside.module.css";
const FIlesAside = () => {
  return (
    <div className={classes.list_wapper}>
      <div className={classes.files_second_wrapper}>
        <div className={classes.files_icon}>
          <i>
            <BsCardImage />
          </i>
        </div>
        <div className={classes.paa_text}>
          <p>Documents</p>
          <big>8 files</big>
        </div>
      </div>

      <div className={classes.files_last_col}>
        <div>
          <p>2.45 MB</p>
        </div>
        <div className={classes.icon_holder_}>
          <i>
            <BsChevronRight />
          </i>
        </div>
      </div>
    </div>
  );
};

export default FIlesAside;
