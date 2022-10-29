import React from "react";
import RandomUsersList from "./RandomUsersList";
import classes from "./RandomUsers.module.css";
import userData from "../../data/UserData";
const RandomUsers = () => {
  return (
    <React.Fragment>
      <p className='title-paragraph' >Random users</p>
      <div className={classes.random_user_container}>
        {userData.map((cur, index) => (
          <RandomUsersList
            avatar={cur.avatar}
            firstname={cur.firstname}
            lastname={cur.lastname}
            key={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default RandomUsers;
