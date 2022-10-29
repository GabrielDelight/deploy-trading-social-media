import React, { useState } from "react";
import { BsFillBellFill, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FiBell, FiMoon, FiSearch, FiSun } from "react-icons/fi";
import classes from "./Header.module.css";
const Header = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(true);

  const onToggleHabndler = () => {
    setToggleTheme(!toggleTheme);
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.rught_corner}>
          <div className={classes.upgrade_button}>
            <button>Upgrade Account</button>
          </div>
        </div>

        <div className={classes.left_corner_header}>
          <div className={classes.dark_mode_container}>
            <button
              style={{ backgroundColor: toggleTheme ? "white" : "" }}
              onClick={onToggleHabndler}
            >
              <i>
                <BsFillSunFill />
              </i>
              <span>Light</span>
            </button>

            <button
              style={{ backgroundColor: !toggleTheme ? "white" : "" }}
              onClick={onToggleHabndler}
            >
              <i>
                <BsFillMoonFill />
              </i>
              <span>Dark</span>
            </button>
          </div>

          <div className={classes.icon_div}>
            <i>
              <FiSearch />
            </i>
          </div>

          <div className={classes.icon_div}>
            <i>
              <BsFillBellFill />
            </i>
          </div>

          <div className={classes.avatar_container_div}>
            <img src="/images/ronaldo.jpg" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
