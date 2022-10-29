import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import classes from "./DiscoverProfile.module.css";
const DiscoverProfile = () => {
  return (
    <div className={classes.profile_section}>
      <div className={classes.avatar_section_}>
        <img src="/images/ronaldo.jpg" alt="" />
      </div>
      <div className={classes.owner_name}>
        <div className="flex_username__and__user__name__date">
          <p className={classes._full_name_x}>John Doe</p>
          <i>
            <AiOutlineCheckCircle />
          </i>
        </div>
        <p>Full stack Developer</p>
      </div>

      <div className={classes.analysis_container}>
        <div>
          <h4>20k</h4>
          <p>Investors</p>
        </div>
        <div>
          <h4>90k</h4>
          <p>Mentors</p>
        </div>
        <div>
          <h4>10k</h4>
          <p>Posts</p>
        </div>
      </div>
      <div className={classes.button_section}>
        <button style={{ backgroundColor: "#4F46BA", color: "white" }}>
          View Profile
        </button>
        <button>Edit</button>
      </div>
      <div className={classes.photo_preview_section}>
        <div>
          <img src="/images/img2.jpg" alt="" />
        </div>
        <div>
          <img src="/images/img5.jpg" alt="" />
        </div>
        <div>
          <img src="/images/img3.jpg" alt="" />
        </div>
        <div>
          <img src="/images/img16.jpg" alt="" />
        </div>
        <div>
          <img src="/images/img15.jpg" alt="" />
        </div>
        <div>
          <img src="/images/img11.jpg" alt="" />
        </div>
      </div>
      <br />
    </div>
  );
};

export default DiscoverProfile;
