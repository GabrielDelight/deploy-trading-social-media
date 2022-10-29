import React from "react";
import { BsChevronCompactDown, BsDot } from "react-icons/bs";
import { FaEllipsisH, FaMicrophone, FaUserPlus } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import Messages from "../components/Chat/Messages/Messages";
import Main from "../components/UI/Main/Main";
import classes from "../styles/VoiceCallStyles.module.css";
import { FiVideo } from "react-icons/fi";
import { MdCall, MdMessage } from "react-icons/md";
const VoiceCallPage = () => {
  return (
    <Main>
      <main className={classes.main}>
        <div className={classes.aside}>
          <h3>Trading Groups</h3>
          <Messages title="Chats" />
        </div>
        <article className={classes.article_section}>
          <div className={classes.calling_oprions_div}>
            <p>
              Michael Wong{" "}
              <i>
                <GoPrimitiveDot style={{ color: "green", fontSize: '20px' }} />
              </i>
            </p>
            <div className={classes.avatar_section}>
              <img src="/images/img11.jpg" alt="" />
            </div>
            <div className={classes.icon_row_section}>
              <div>
                <i>
                  <FaMicrophone />
                </i>
              </div>

              <div>
                <i>
                  <FiVideo />
                </i>
              </div>

              <div style={{ backgroundColor: "red" }}>
                <i>
                  <MdCall />
                </i>
              </div>

              <div>
                <i>
                  <FaUserPlus />
                </i>
              </div>
              <div>
                <i>
                  <FaEllipsisH />
                </i>
              </div>
            </div>
            <div>
              <i>
                <MdMessage />
              </i>
              <br />
              <br />
              <br />
              <br />
              <i>
                <BsChevronCompactDown />
              </i>
            </div>
          </div>
        </article>
      </main>
    </Main>
  );
};

export default VoiceCallPage;
