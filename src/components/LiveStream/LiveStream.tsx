import React from "react";
import classes from "./LiveStream.module.css";

interface Props {
  image: string;
}
const LiveStream: React.FC<Props> = ({ image }) => {
  return (
    <div className={classes.list_container}>
      <div className={classes.image_wrapper}>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <h5>
            <b>Cuzin Cash</b>
          </h5>
          <p style={{marginTop: '4px'}}>
            <small>Getting things started</small>
          </p>
        </div>

        <div className={classes.footer_section}>
          <div>
            <p>
              $ {parseInt(Math.random().toString().substr(2, 3)).toFixed(2)}
            </p>
          </div>
          <div>
            <button>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
