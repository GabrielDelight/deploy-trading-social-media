import React from "react";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { FaMapMarked } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer
      className={classes.footer}
      style={{
        backgroundColor: window.location.pathname.includes("marketplace")
          ? "#F14306"
          : "black",
      }}
    >
      <div className={classes.col1}>
        <img src="/logo/logo.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          volutpat justo eu metus laoreet, vel facilisis nisi venenatis. Fusce
          auctor arcu nec nisl ornare mattis. Duis quis vehicula neque, in
          vestibulum justo. Praesent sed lacus facilisis, consequat libero quis,
          tincidunt eros. Sed elementum maximus placerat.
        </p>
      </div>
      <div className={classes.col2}>
        <h2>Help</h2>
        <ul>
          <li>Help Center</li>
          <li>How to shop on electronnicshop.ng</li>
          <li>Delivery and timelines</li>
          <li>How to hire a technician</li>
          <li>Report a product</li>
        </ul>
      </div>
      <div className={classes.col3}>
        <h2>Contact</h2>
        <ul>
          <li>
            <i>
              <BsPhone />
            </i>
            <span>01-1234567; 02-1234567</span>
          </li>

          <li>
            <i>
              <BsEnvelope />
            </i>
            <span>support@electronicshop.ng</span>
          </li>

          <li>
            <i>
              <FiMapPin />
            </i>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum volutpat justo eu
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
