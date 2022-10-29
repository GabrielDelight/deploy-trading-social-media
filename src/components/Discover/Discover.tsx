import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaHandshake, FaHandshakeSlash } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { MdClose, MdVerified } from "react-icons/md";
import classes from "./Discover.module.css";
import DiscoverProfile from "./DiscoverProfile";
const Discover = () => {
  return (
    <main className={classes.main}>
      <div className={classes.about_section}>
        <div className={classes.first_column}>
          <div className={classes.avatar_container}>
            <img src={"/images/ronaldo.jpg"} alt="" />
            <div className={classes.connect_container}>
              <div>
                <i>
                  <MdClose />
                </i>
              </div>

              <div>
                <i style={{ color: "#00b90d" }}>
                  <FaHandshake />
                </i>
              </div>

              <div>
                <i>
                  <FiShare />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.second_column}>
          <p className={classes.title_x}>About</p>
          <br />
          <div className={classes.user_name_}>
            <div className="flex_username__and__user__name__date">
              <p className={classes.name_x}>John Doe</p>
              <i>
                <AiOutlineCheckCircle />
              </i>
            </div>
            <br />
            <div className={classes.button_list}>
              <button>Trader</button>
              <button>Forex</button>
              <button>Indeces</button>
            </div>
            <div className={classes.bio_text}>
              <p>
                Don't worry about the people god has removed in your life, he
                saw things you didn't see he listened to conversations you
                could't hear and so he made moves you wouldn't make
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.profile_dection}>
        <DiscoverProfile />
      </div>
    </main>
  );
};

export default Discover;
