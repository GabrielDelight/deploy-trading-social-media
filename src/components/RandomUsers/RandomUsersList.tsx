import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { IoIosClose, IoIosShareAlt, IoMdClose } from "react-icons/io";
import { MdClose, MdVerified } from "react-icons/md";
import classes from "./RandomUsers.module.css";
interface Props {
  firstname: string;
  lastname: string;
  avatar: string;
}
const RandomUsersList: React.FC<Props> = ({ avatar, firstname, lastname }) => {
  return (
    <React.Fragment>
      <div className={classes.random_users_list}>
        <div className={classes.avatar_container}>
          <img src={"/" + avatar} alt="" />
          <div className={classes.connect_container}>
            <div>
              <i>
                <IoMdClose />
              </i>
            </div>

            <div>
              <i style={{ color: "#00B90D" }}>
                <FaHandshake />
              </i>
            </div>

            <div>
              <i>
                <IoIosShareAlt />
              </i>
            </div>
          </div>
        </div>
        <div className={classes.owner_detail}>
          <div className="flex_username__and__user__name__date">
            <h4>
              {firstname} {lastname}
            </h4>
            <i>
              <AiOutlineCheckCircle />
            </i>
          </div>
          <p>Trader</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RandomUsersList;
