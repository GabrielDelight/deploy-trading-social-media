import React from "react";
import { FiEye } from "react-icons/fi";
import LiveVideoChat from "../components/LiveStream/LiveVideoChat/LiveVideoChat";
import Main from "../components/UI/Main/Main";
import classes from "../styles/StoryStyles.module.css";
const SToryPage = () => {
  return (
    <Main>
      <main className={classes.main}>
        <article className={classes.article}>
          <div className={classes.relative_container}>
            {/* <img src="/images/longImage.jpg" alt="" /> */}
            <video src="/video/video3.mp4"></video>

            <div className={classes.absolute_header}>
              <div>
                <p>00:46</p>
              </div>

              <div>
                <button>
                  <i>
                    <FiEye />
                  </i>
                  178
                </button>
              </div>
            </div>
          </div>
        </article>
        <aside className={classes.aside}>
            <LiveVideoChat />
        </aside>
      </main>
    </Main>
  );
};

export default SToryPage;
