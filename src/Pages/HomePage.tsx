import React from "react";
import Discover from "../components/Discover/Discover";
import RandomUsers from "../components/RandomUsers/RandomUsers";
import StoryList from "../components/Story/StoryList/StoryList";
import Main from "../components/UI/Main/Main";
const HomePage = () => {
  return (
    <Main>
      <div style={{padding: '10px'}}>
        <StoryList />
        <p className="title-paragraph">Random users</p>
        <Discover />
        <br />
        <RandomUsers />
      </div>
    </Main>
  );
};

export default HomePage;
