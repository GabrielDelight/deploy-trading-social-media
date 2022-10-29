import LiveVideoList from "../components/LiveStream/LiveVideoList/LiveVideoList";
import StreamAside from "../components/LiveStream/StreamAside/StreamAside";
import VideoStream from "../components/LiveStream/VideoStream/VideoStream";
import Main from "../components/UI/Main/Main";
import classes from "../styles/LiveVideoPage.module.css";
import streamersData from "../data/streamersData";
const LiveVideoPage = (): JSX.Element => {
  return (
    <Main>
      <main className={classes.main}>
        <article className={classes.article}>
          <div className={classes.container_wrap}>
            {streamersData.map((cur: any) => (
              <LiveVideoList image={cur.avatar} name={cur.firstname} />
            ))}
          </div>
          <VideoStream />
        </article>
        <aside className={classes.aside}>
          <StreamAside />
        </aside>
      </main>
    </Main>
  );
};

export default LiveVideoPage;
