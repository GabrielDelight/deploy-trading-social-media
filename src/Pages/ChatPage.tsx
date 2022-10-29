import React from "react";
import ChatAside from "../components/Chat/ChatAside/ChatAside";
import ChatBody from "../components/Chat/ChatBody/ChatBody";
import Messages from "../components/Chat/Messages/Messages";
import Main from "../components/UI/Main/Main";
import classes from "../styles/ChatPage.module.css";
const ChatPage = () => {
  return (
    <Main>
      <main className={classes.main}>
        <div className={classes.messahes}>
          <Messages title={"Trading Groups"} />
        </div>
        <article className={classes.article_section}>
          <header className={classes.header}>
            <p>Dap Universitiy</p>
          </header>
          <ChatBody />
        </article>
        <div className={classes.eight_aside}>
          <ChatAside />
        </div>
      </main>
    </Main>
  );
};

export default ChatPage;
